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
    comma = d3.format(",");

//Function for opacity of choropleth map
function getColor(d) {
    return d > 7000000 ? '#b10026' : //7 mil
           d > 1000000 ? '#e31a1c' : //1 mil
           d > 500000 ? '#fc4e2a' : //500k
           d > 100000 ? '#fd8d3c' : //100k
           d > 50000 ? '#feb24c' : //50k
           d > 10000 ? '#fed976' : //10k
           d > 5000 ? '#ffeda0' :  //5k
                    '#ffffcc';
}


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
                <button 
                    className={curStyle} 
                    style = {btnStyle} 
                    value={this.props.value} 
                    onClick={this.handleClick}>
                    {this.props.name}
                </button>
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
        var stcc2List = Object.keys(STCC2).map(function(key,index){
            //Loop through selected STCC
            //For every one, make another set of STCC items 

            //If it doesn't equal -1, it is selected.
            //Need to make sub-buttons
            if(scope.state.selected.indexOf(key) !== -1){
                //subList is a list of sub-codes
                var stcc3List = Object.keys(STCC3).map(function(subKey,subIndex){
                    //Find STCC3 codes with same first numbers
                    if(subKey.substring(0,2) === key){
                        //for every matching subkey, make an item
                        return(
                            <STCCItem 
                                type="3" 
                                name={STCC3[subKey]} 
                                onClick={scope.onClick} 
                                value ={subKey} />
                        )
                    }
                })
                //Return the header button, plus the list of subkeys
                return(
                    <div>
                        <STCCItem 
                            type="2" 
                            name={STCC2[key]} 
                            onClick={scope.onClick} 
                            value={key} />
                        {stcc3List}
                    </div>
                )
            }
            //Otherwise, make normal one
            else{
                return(
                    <STCCItem 
                        type="2" 
                        name={STCC2[key]} 
                        onClick={scope.onClick} 
                        value ={key} />
                )
            }
        })
        return (
            <div>
                {stcc2List}
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
    updateInfo:function(props){
        var scope = this,
            infoPanel = document.getElementById('info');

        infoPanel.innerHTML = '<h4>' + scope.state.params["source"] + ' of exports</h4>' + '<b>' + props["name"] + ' county'+'</b><br />' + comma(props.tons) + ' Tons';
    },
    highlightFeature:function (e) {
        var layer = e.target,
            props = {name:"",tons:0};

        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });


        props["name"] = layer.feature.properties.NAME;
        props["tons"] = layer.options.tons

        this.updateInfo(props)
        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
        }
        
        //info.update(layer.feature.properties);
    },
    resetHighlight:function (e) {
        var layer = e.target;
        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToBack();
        }


        layer.setStyle({
            weight: 2,
            color: 'white',
            dashArray: '3'
        })
        //info.update();
    },
    loadLayer:function(newLayName,url,countyData){
        var scopeDash = this,
            newState = scopeDash.state,

            urlBase = "/data/finalGeoJson/",
            urlFull = urlBase + url;

        if(!this.state.layer[newLayName]){        
            d3.json(urlFull,function(err,data){
                newState.layer[newLayName] = {
                    id:newLayName,
                    geo:data,
                    options:{
                        zoomOnLoad:false,
                        tons:0,
                        centerOnLoad:false,
                        visible:true,
                        loaded:true,
                        onEachFeature: function(feature,layer){
                            var featureScope = this,
                                geoID = feature.properties.GEO_ID.substring(9,14),
                                curFeature = feature

                            this.tons = d3.round(countyData[geoID])


                            var popupContent = "<b>" + feature.properties.NAME + " county</b> <br/>" + comma(this.tons) + " Tons";
                            layer.bindPopup(popupContent);  

                            this.style = function(feature){
                                
                                return {
                                    fillColor: getColor(featureScope.tons),
                                    weight: 2,
                                    opacity: 1,
                                    color: 'white',
                                    dashArray: '3',
                                    fillOpacity: 0.7
                                }
                            }

                            
                            layer.on({
                                mouseover: scopeDash.highlightFeature,
                                mouseout: scopeDash.resetHighlight,
                                // click: zoomToFeature
                            });
                        }
                    }
                }
                //Only 1 layer can be visible at a time
                Object.keys(newState.layer).forEach(function(curLayer){
                    if(curLayer != newLayName){    
                        newState.layer[curLayer].options.visible = false
                        newState.layer[curLayer].id += 1;
                    }
                })
                scopeDash.setState(newState);  
            }) 
        }
        else{
            //Only 1 layer can be visible at a time

            //layName is the name of the clicked layer
            //If layName.visable = true, set to false
            //If layName.visible = false, set to true
            //AKA toggle layName

            //curLayer is name of current layer in loop
            //if(curLayer != layName)
            //Set to False
            Object.keys(newState.layer).forEach(function(curLayer){
                if(curLayer != newLayName){
                    newState.layer[curLayer].options.visible = false
                    newState.layer[curLayer].id += 1;
                }
            })

            newState.layer[newLayName].options.visible = !newState.layer[newLayName].options.visible;
            newState.layer[newLayName].id += 1;
            scopeDash.setState(newState);
        }

    },

    getLayer:function(params){
        var scope = this,

            countyObject = {},
            newLayer ={};

        d3.json('/transquery')
        .post(JSON.stringify(params),function(err,dataReturned){

            dataReturned.success.rows.forEach(function(curCounty){
                if(scope.state.params["source"] === "origin"){
                    countyObject[curCounty.Origin_County_FIPS_Code] = curCounty.total_tons;
                }
                else{
                    countyObject[curCounty.Destination_County_FIPS_Code] = curCounty.total_tons;
                }
            })
            var name = "usCounties" + params["source"] + params["STCC2"] + params["STCC3"]
            scope.loadLayer(name,"usCounties.geojson",countyObject);   
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
        var scope = this,
            newState = scope.state;

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

        newState.params={
            source:e.target.id,
            STCC2:newState.params.STCC2,
            STCC3:newState.params.STCC3
        }
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