'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/transMap.react'),

    
    //    -- sidebar components
    MapSidebar = require('../components/utils/MapSidebar.react'),


    // -- data
    STCC2 = require('../data/stcc2'),
    STCC3 = require('../data/stcc3'),
    
    // -- utils;
    d3 = require('d3'),
        colorbrewer = require('colorbrewer');

function getColor(d) {
return d > 100000000000 ? '#800026' :
       d > 50000000000  ? '#BD0026' :
       d > 2000000000  ? '#E31A1C' :
       d > 100000000  ? '#FC4E2A' :
       d > 50000000   ? '#FD8D3C' :
       d > 2000000   ? '#FEB24C' :
       d > 100000   ? '#FED976' :
                  '#FFEDA0';
}

var colorScale = d3.scale.ordinal()
                 .domain(["CAN_adm1","Western_Region"])
                 .range(colorbrewer.Paired[9]);

var STCCItem = React.createClass({
    getInitialState:function(){
        return{selected:false}
    },
    handleClick:function(){
       this.setState({selected:!this.state.selected})
       this.props.onClick(this.props.value)
    },
    componentWillMount:function(){
        if(this.props.type === "3"){
            this.setState({selected:true});
        }
    },
    render:function(){
        if(this.props.type === "2"){
            var btnStyle = {
                width:'95%',
                textAlign:'left',
                padding:'10px',
                border:'none'
            }
        }
        if(this.props.type === "3"){
            var btnStyle = {
                width:'70%',
                textAlign:'left',
                paddingLeft:'50px',
                border:'none'
            }            
        }
        var curStyle = this.state.selected ? 'layListActive' : 'layListInactive'

        return(
            <div>
                <button className={curStyle} style = {btnStyle} value={this.props.value} onClick={this.handleClick}>{this.props.name}</button>
            </div>
            )
    }
})


var STCCList = React.createClass({
    getInitialState:function(){
        return{selected:[]}
    },
    onClick:function(value){
        var scope = this;
        var newState = scope.state;
        
        console.log("Selected STCC Value",value)
        if(newState.selected.indexOf(value) != -1){
            newState.selected.splice(newState.selected.indexOf(value),1)
        }
        else{
            newState.selected.push(value);
        }
        scope.setState(newState);
    },
    render:function(){
        var scope = this;
        //Loop through items
        //Make an STCC2 Item for each one
        var list = Object.keys(STCC2).map(function(key,index){
            //Loop through selected STCC
            //For every one, make another set of STCC items 

            //If it doesn't equal -1, it is selected.
            //Need to make sub-buttons
            
            if(scope.state.selected.indexOf(key) !== -1){

                //subList is a list of sub-codes
                var subList = Object.keys(STCC3).map(function(subKey,subIndex){
                    //Find STCC3 codes with same first numbers
                    if(subKey.substring(0,2) === key){
                        //for every matching subkey, make an item
                        return(<STCCItem type="3" name={STCC3[subKey]} onClick={scope.onClick} value ={subKey} />)
                    }
                })

                //Return the header button, plus the list of subkeys
                return(
                    <div>
                        <STCCItem type="2" name={STCC2[key]} onClick={scope.onClick} value ={key} />
                        {subList}
                    </div>
                    )

            }
            //Otherwise, make normal one
            else{
                return(<STCCItem type="2" name={STCC2[key]} onClick={scope.onClick} value ={key} />)
            }



        })
        return (
            <div>
            {list}
            </div>
            )
    }
})


var TransDashboard = React.createClass({
    getInitialState:function(){

        return {
            layer:{},
            params:{
                source:"origin",
                STCC2:"all",
                STCC3:"all"
            }
        }

    },
    loadLayer:function(layName,url,countyData){
        var scopeDash = this,
            newState = scopeDash.state,


            urlFull = url;

        if(!this.state.layer[layName]){        
            d3.json(urlFull,function(err,data){
                newState.layer[layName] = {id:layName,geo:data,options:{
                        zoomOnLoad:false,
                        tons:0,
                        centerOnLoad:false,
                        visible:true,
                        loaded:true,
                        onEachFeature: function(feature,layer){
                            var geoID = feature.properties.GEO_ID.substring(9,14)
                            this.tons = countyData[geoID]
                            var scope = this
                            this.style = function(feature){
                                return {
                                        fillColor: getColor(scope.tons),
                                        weight: 2,
                                        opacity: 1,
                                        color: 'white',
                                        dashArray: '3',
                                        fillOpacity: 0.7
                                    }
                            }
                            var popupContent = "" + this.tons;
                            layer.bindPopup(popupContent);  
                        }
                    }
                }



                Object.keys(newState.layer).forEach(function(curLayer){

                    if(curLayer != layName){    
                        newState.layer[curLayer].options.visible = false
                        newState.layer[curLayer].id += 1;
                    }
                })

                scopeDash.setState(newState);  
            }) 
        }
        else{

            //layName is clicked layer
            //If layName.visable = true, set to false
            //If layName.visible = false, set to true
            //AKA toggle layName

            //if(curLayer != layName)
            //Set to False

                Object.keys(newState.layer).forEach(function(curLayer){

                    if(curLayer != layName){
   
                        newState.layer[curLayer].options.visible = false
                        newState.layer[curLayer].id += 1;
                    }
                })

            newState.layer[layName].options.visible = !newState.layer[layName].options.visible;
            newState.layer[layName].id += 1;
            scopeDash.setState(newState);
        }

    },

    getLayer:function(params){
        var scope = this;
        var countyObject = {}
        var newLayer ={}

        d3.json('/transquery')
        .post(JSON.stringify(params),function(err,dataReturned){
            //console.log('data sent',err,dataReturned.success.rows)

            dataReturned.success.rows.forEach(function(curCounty){

                if(scope.state.params["source"] === "origin"){
                    countyObject[curCounty.Origin_County_FIPS_Code] = curCounty.total_tons;
                }
                else{
                    countyObject[curCounty.Destination_County_FIPS_Code] = curCounty.total_tons;
                }
            }) 
                var name = "usCounties" + params["source"] + params["STCC2"] + params["STCC3"]
                scope.loadLayer(name,"/data/finalGeoJson/usCounties.geojson",countyObject);   
        })       

    },
    componentWillMount:function(){

           this.getLayer(this.state.params)
        
    },
    getPanes:function(){
        return [ 
            {
                name:'home',
                icon:'/images/nyslogo',
                title:'About',
                content:<h3>hello</h3>
            },
                        {
                name:'home2',
                icon:'/images/nyslogo',
                title:'Origin/Destination',
                content:<div>
                            <br/>
                            <button 
                                ref="origin"
                                id="origin"
                                className={"layListActive"} 
                                style={{
                                    width:'95%',
                                    textAlign:'left',
                                    padding:'10px',
                                    border:'none'
                                }} 
                                onClick={this.sourceChange}>
                                Origin
                            </button>
                            <br/>
                            <button 
                                ref="destination"
                                id="destination"
                                className={"layListInactive"}
                                    style={{
                                        width:'95%',
                                        textAlign:'left',
                                        padding:'10px',
                                        border:'none'
                                    }} 
                                onClick={this.sourceChange}>
                                Destination
                            </button>
                        </div>
            }, 
            {
                name:'home3',
                icon:'/images/nyslogo',
                title:'STCC2 Codes',
                content:<div>
                            <h3>Filter by STCC2 Code</h3>
                            <STCCList />
                        </div>
            }                                  
        ]
    },
    sourceChange:function(e){

        var scope = this;
        var newState = scope.state;

        if(e.target.className === "layListActive"){
            e.target.className = "layListInactive";
        }
        else{
            e.target.className = "layListActive"

            Object.keys(scope.refs).forEach(function(button){
                if(button != e.target.id){
                    scope.refs[button].getDOMNode().className = "layListInactive";                    
                }
            })
        }

        newState.params={source:e.target.id,STCC2:newState.params.STCC2,STCC3:newState.params.STCC3}
        scope.setState(newState);
        scope.getLayer(scope.state.params);
    },
    render: function() {
        var scope = this;
        console.log("Scope in atlas render",scope);

        return (
                <div style={{width:'100%',height:'100%'}} >
                    <Map layers={this.state.layer} />
                    <MapSidebar panes={this.getPanes()} /> 
                </div>
        )
    }
});

module.exports = TransDashboard;