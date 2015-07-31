'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/map.react'),
    LayerLegend = require('../components/utils/layerLegend.react'),
    
    //    -- sidebar components
    MapSidebar = require('../components/utils/MapSidebar.react'),
    LayerList = require('../components/layerList.react'),

    // -- data
    Areas = require('../data/areas'),
    Facilities = require('../data/facilities'),
    Rail = require('../data/rail'),
    Road = require('../data/road'),
    // -- actions
    
    // -- utils;
    d3 = require('d3');
    


var WalkerDashboard = React.createClass({

    getInitialState:function(){
        //var geoLayerInfo = geoLayer;



        return {
            mapLayers:{},
            areas:Areas,
            facilities:Facilities,
            rail:Rail,
            road:Road
        }

    },

    loadLayer:function(layName,url,datasetName){
        console.log(url);

        var scope = this,
            newState = scope.state;
        if(!this.state[datasetName][layName].options.loaded){
            var urlBase = "/data/geoJson/";

            var urlFull = urlBase + url;
        
            d3.json(urlFull,function(err,data){


                newState.mapLayers[layName] = {id:layName,geo:data,options:scope.state[datasetName][layName].options};
                newState[datasetName][layName].options.loaded = true;
                newState[datasetName][layName].options.visible = true;

                scope.setState(newState)
                
            }) 
        }else{
            newState.mapLayers[layName].options.visible = !newState.mapLayers[layName].options.visible;
            newState.mapLayers[layName].id += 1;
            scope.setState(newState)
        }


    },
    
    getPanes:function(){
        return [
            {
                name:'home',
                icon:'/styles/images/layers.png',
                content: <h3> NYS Freight Atlas </h3>
            },
            {
                name:'home2',
                icon:'/styles/images/layers.png',
                content: <LayerList title="New York State Regions" dataset='areas' layers={this.state.areas} onClick = {this.handleClick} />
            },
            {
                name:'home3',
                icon:'/images/facilities.png',
                content:<LayerList title="Freight Facilities" dataset='facilities' layers={this.state.facilities} onClick = {this.handleClick} />
            },            
            {
                name:'home4',
                icon:'/images/rail.png',
                content:<LayerList title="Rail Network" dataset='rail' layers={this.state.rail} onClick = {this.handleClick} />
            },            
            {
                name:'home5',
                icon:'/images/truck.png',
                content:<LayerList title="Road Network" dataset='road' layers={this.state.road} onClick = {this.handleClick} />
            }              
        ]
    },

    componentDidMount:function(){

        console.log("hello");



    },
    handleClick: function (childComponent) {

        var curLayerName = childComponent.props.layerName;
        var datasetName = childComponent.props.dataset;
        var curLayerPath = this.state[datasetName][childComponent.props.layerName].path;
        this.loadLayer(curLayerName,curLayerPath,datasetName)
    },

    render: function() {
        
        var nextCoords = this.props.currentHouse ? this.props.currentHouse.geometry.coordinates : null;
        var button = <span />;
        var imgStyle = {
                position: 'absolute',
                left: '10px',
                height: '41px',
                top: '5px'
        }

        
       

        

        return (
                <div style={{width:'100%',height:'100%'}} >
                    <div className={"header"} style={{textAlign:'center'}}>
                    <img style={imgStyle} src="/images/nygov-logo.png"/>
                    New York State Freight Atlas</div>
                    <LayerLegend />
                    <MapSidebar panes={this.getPanes()} /> 


                    <Map layers={this.state.mapLayers}  />


                </div>
        )
    
    }
});

module.exports = WalkerDashboard;