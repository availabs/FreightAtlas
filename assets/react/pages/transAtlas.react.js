'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/transMap.react'),

    
    //    -- sidebar components
    MapSidebar = require('../components/utils/MapSidebar.react'),


    // -- data
    STCC2 = require('../data/stcc2'),
    STCC3 = require('../data/stcc3'),
    //StateFips = require('../../data/finalGeoJson/stateFips'),

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
        return{
            selected:true,
            expanded:false
        }
    },
    handle3Click:function(){
        //Toggles Item on or off
       this.setState({selected:!this.state.selected})
       this.props.onClick(this.props.value)
    },
    handle2Click:function(){
        //Adds a list of STTCItems representing STCC3 Codes
        //It is placed under the appropriate STCC2 code
        this.setState({
            selected:this.state.selected,
            expanded:!this.state.expanded
        })

    },
    render:function(){
        var scope = this;
        if(this.props.type === "2" ){
            var btnStyle = {
                width:'75%',
                textAlign:'left',
                padding:'10px',
                border:'none'
            }
            var style = {
                width:'25%',
                float:'right',
                fontSize:'15px',
                padding:'5px',
                border:'1px'  
            }
            var curStyle = this.state.selected ? 'layListActive' : 'layListInactive'
        }
        if(this.props.type === "3"){
            var btnStyle = {
                width:'60%',
                textAlign:'left',
                padding:'10px',
                border:'none'
            }
            var style = {
                width:'40%',
                float:'right',
                fontSize:'10px',
                padding:'10px',
                border:'1px'                
            }
            var curStyle = this.state.selected ? 'trans3' : 'layListInactive'           
        }



        //In this render, if EXPANDED, draw STCC3 items

        if(this.state.expanded){
            //subList is a list of sub-codes
            var stcc3List = Object.keys(STCC3).map(function(key,index){
                //Find STCC3 codes with same first numbers
                if(key.substring(0,2) === scope.props.value){
                    //for every matching subkey, make an item
                    return(
                        <STCCItem 
                            type="3" 
                            name={STCC3[key]} 
                            onClick={scope.props.onClick} 
                            value ={key} />
                    )
                }
            })

            //Return the header button, plus the list of subkeys
            return(
                <div>
                    <button 
                        className={curStyle} 
                        style = {btnStyle} 
                        id={this.props.value}
                        value={this.props.value} 
                        onClick={this.handle2Click}>
                        {this.props.name}
                    </button>
                    <button
                        className={"layListInactive"}
                        style={style}
                        onClick={this.handle3Click}>
                        On/Off                    
                    </button>
                    {stcc3List}
                </div>
            )
        }
        else{
            return(
                <div>
                    <button 
                        className={curStyle} 
                        style = {btnStyle} 
                        id={this.props.value}
                        value={this.props.value} 
                        onClick={this.handle2Click}>
                        {this.props.name}
                    </button>
                    <button
                        className={"layListInactive"}
                        style={style}
                        onClick={this.handle3Click}>
                        On/Off                    
                    </button>
                </div>
            )
        }        


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
    selectAll:function(){
        console.log("Select All")
        var scope = this;

        Object.keys(this.refs).forEach(function(key){
            scope.refs[key].setState({
                                selected:true,
                                expanded:scope.refs[key].expanded
                                });
        })

        Object.keys(React.findDOMNode(this).children).forEach(function(index){
            if(React.findDOMNode(scope).children[index].children[0]){
                React.findDOMNode(scope).children[index].children[0].className = "layListActive"
            }
        })
        this.setState({selected:[]})
    },
    deselectAll:function(){
        console.log("Deselect All")
        var scope = this;
        var items = []
        Object.keys(this.refs).forEach(function(key){
            items.push(key)
            scope.refs[key].setState({
                                selected:false,
                                expanded:false
                                });
        })

        Object.keys(React.findDOMNode(this).children).forEach(function(index){
            if(React.findDOMNode(scope).children[index].children[0]){
                React.findDOMNode(scope).children[index].children[0].className = "layListInactive"
            }
        })

        this.setState({selected:items})
    },
    render:function(){
        var scope = this;
        //Loop through items
        //Make an STCC2 Item for each one
        var stcc2List = Object.keys(STCC2).map(function(key,index){
                return(
                    <STCCItem 
                        ref={key}
                        type="2" 
                        name={STCC2[key]} 
                        onClick={scope.onClick} 
                        value ={key} />
                )
        })

        return (
            <div>
                <button
                    className={"layListInactive"}
                        style={{
                            width:'45%',
                            float:'left',
                            fontSize:'15px',
                            border:'1px'
                        }}
                        onClick={this.selectAll}>
                    Select All
                </button>
                <button
                    className={"layListInactive"}
                    style={{
                        width:'45%',
                        float:'right',
                        fontSize:'15px',
                        border:'1px'
                    }}
                    onClick={this.deselectAll}>
                    Deselect All
                </button>
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

        if(props.tons && props["name"]){
            infoPanel.innerHTML = scope.state.params["source"] + ' of exports <br/><br/>' + '<b>' + props["name"] + ' county'+'</b><br />' + comma(props.tons) + ' Tons';
        }
        else{
            infoPanel.innerHTML = scope.state.params["source"] + ' of exports <br/><br/>' + '<b>' + props["name"] + ' county'+'</b><br />' + 'No data for this county';
        }
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
        console.log(layer)
        if(layer.feature.properties.NAME){
            props["name"] = layer.feature.properties.NAME;
            if(layer.options){
                props["tons"] = layer.options.tons
            }           
        }




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
    },
    zoomToFeature: function(e) {
        e.target._map.fitBounds(e.target.getBounds());
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
                                click: scopeDash.zoomToFeature
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
            
            dataReturned.rows.forEach(function(curCounty){

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
                title:'STCC Codes',
                content:<div>
                            <span>
                                <button
                                    ref="executeFilter"
                                    id="executeFilter"
                                    className={"layListInactive"}
                                        style={{
                                            width:'45%',
                                            float:'right',
                                            fontSize:'15px',
                                            border:'1px'
                                        }}
                                    onClick={this.executeFilter}> 
                                        Filter
                                </button>
                                <h4 style={{width:'45%'}}>Filter by STCC Code</h4>
                            </span>
                            <STCCList ref="list"/>
                        </div>
            }                                  
        ]
    },
    executeFilter:function(e){
        var exclude2 =[];
        var exclude3=[];
        var scope = this;
        var newState = scope.state;

        var curStcc2 = this.state.params["STCC2"]
        console.log("Before change STCC2",curStcc2)

        if(this.refs["list"].state["selected"].length === 0){
            console.log("All are Selected");
            newState.params.STCC2 = "all";

            if(curStcc2 != "all"){
                console.log("New Layer")
                scope.setState(newState)
                scope.getLayer(scope.state.params);               
            }
        }
        else{
            console.log("All but the following are selected")
            for(var i=0; i<this.refs["list"].state["selected"].length;i++){

                if(this.refs["list"].state["selected"][i].length === 2){
                    console.log("This is an 2",this.refs["list"].state["selected"][i]);
                    exclude2.push(this.refs["list"].state["selected"][i]);
                }
                else{
                    console.log("This is an 3",this.refs["list"].state["selected"][i]);
                    exclude3.push(this.refs["list"].state["selected"][i]);
                }

            }
            if(exclude3.length === 0){
                exclude3="all";
            }

            console.log("All STCC2 except: ", exclude2);
            console.log("All STCC3 except: ", exclude3);
            newState.params.STCC2=exclude2;
            newState.params.STCC3=exclude3;

            if(exclude2 != curStcc2){
                console.log("New Layer")
                scope.setState(newState)
                scope.getLayer(scope.state.params)
            }
        }
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