'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/map.react'),
    
    //    -- sidebar components
    MapSidebar = require('../components/utils/MapSidebar.react'),
    LayerList = require('../components/layerList.react'),

    // -- data
    LayerInfo = require('../data/layerInfo'),
    Streets = require('../data/streets'),

    // -- actions
    
    // -- utils;
    d3 = require('d3');
    


var WalkerDashboard = React.createClass({

    getInitialState:function(){
        //var geoLayerInfo = geoLayer;



        return {
            mapLayers:{},
            layersInfo: LayerInfo,
            streets: Streets,
        }

    },

    loadLayer:function(layName,url,datasetName){
        console.log(url);
        console.log(this);
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
                content: <LayerList title="Freight Layers" dataset='layersInfo' layers={this.state.layersInfo} onClick = {this.handleClick} />

            },
            {
                name:'home2',
                icon:'fa fa-home',
                content:<LayerList dataset='streets' layers={this.state.streets} onClick = {this.handleClick} />
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
                <MapSidebar panes={this.getPanes()} />
                            
                <Map layers={this.state.mapLayers} />

            
            </div> 
        	
        );
    
    }
});

module.exports = WalkerDashboard;