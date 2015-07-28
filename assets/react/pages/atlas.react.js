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
                icon:'fa fa-home',
                content: <LayerList title="Freight Atlas Areas" dataset='areas' layers={this.state.areas} onClick = {this.handleClick} />
            },
            {
                name:'home2',
                icon:'fa fa-home',
                content:<LayerList title="Freight Atlas Facilities" dataset='facilities' layers={this.state.facilities} onClick = {this.handleClick} />
            },            
            {
                name:'home3',
                icon:'fa fa-home',
                content:<LayerList title="Freight Atlas Rail" dataset='rail' layers={this.state.rail} onClick = {this.handleClick} />
            },            
            {
                name:'home4',
                icon:'fa fa-home',
                content:<LayerList title="Freight Atlas Road" dataset='road' layers={this.state.road} onClick = {this.handleClick} />
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
        var button = <span />
        
       

        

        return (
                <div style={{width:'100%',height:'100%'}} >
                    <div className={"header"}> NYSDOT Logo and Title</div>
                    <LayerLegend />
                    <MapSidebar panes={this.getPanes()} /> 


                    <Map layers={this.state.mapLayers}  />


                </div>
        )
    
    }
});

module.exports = WalkerDashboard;