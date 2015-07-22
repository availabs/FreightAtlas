'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/map.react'),
    
    //    -- sidebar components
    MapSidebar = require('../components/utils/MapSidebar.react'),
    LayerList = require('../components/layerList.react'),

    // -- data
    LayerInfo = require('../data/layerInfo')

    // -- actions
    
    // -- utils;
    d3 = require('d3');
    


var WalkerDashboard = React.createClass({

    getInitialState:function(){
        //var geoLayerInfo = geoLayer;

        var allLayers = LayerInfo;



        return {
            mapLayers:{},
            layersInfo: allLayers
        }

    },

    loadLayer:function(layName,url){
        console.log(url);
        var scope = this,
            newState = scope.state;
        if(!this.state.layersInfo[layName].options.loaded){
            var urlBase = "/data/geoJson/";

            var urlFull = urlBase + url;
        
            d3.json(urlFull,function(err,data){


                newState.mapLayers[layName] = {id:layName,geo:data,options:scope.state.layersInfo[layName].options};
                newState.layersInfo[layName].options.loaded = true;
                newState.layersInfo[layName].options.visible = true;

                scope.setState(newState)
                
            }) 
        }else{
            newState.mapLayers[layName].options.visible = !newState.mapLayers[layName].options.visible;
            newState.mapLayers[layName].id += 1;
            console.log(newState.mapLayers[layName]);
            scope.setState(newState)
        }


    },
    
    getPanes:function(){
        return [
            {
                name:'home',
                icon:'fa fa-home',
                content: <LayerList layers={this.state.layersInfo} onClick = {this.handleClick} />

            }       
        ]
    },

    componentDidMount:function(){

        console.log("hello");



    },
    handleClick: function (childComponent) {
        var curLayerName = childComponent.props.layerName;
        var curLayerPath = this.state.layersInfo[childComponent.props.layerName].path;
        this.loadLayer(curLayerName,curLayerPath)
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