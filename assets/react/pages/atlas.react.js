'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/map.react'),
    
    //    -- sidebar components
    MapSidebar = require('../components/utils/MapSidebar.react'),
    LayerList = require('../components/layerList.react'),
    
    // -- actions
    
    // -- utils;
    d3 = require('d3');
    
    

var WalkerDashboard = React.createClass({

    getInitialState:function(){

        return {
            mapLayers:{layer1:{id:0,options:{zoomOnLoad:true},geo:{type:"FeatureCollection",features:[]}}},
            layers:[{name:"NYSDOT_Regions",path:"NYSDOT_Regions.geojson"},{name:"Cities",path:"cities.geojson"},{name:"Railroad",path:"Railroad.geojson"}]
        }

    },

    loadLayer:function(name,url){
        console.log(url);

        var urlBase = "/data/geoJson/";

        var scope = this;

        var layers = {}

        var urlFull = urlBase + url
        d3.json(urlFull,function(err,data){
            console.log("getData",data,err);

            layers[name] = {layer1:{id:name,geo:data,options:{zoomOnLoad:true}}};

                scope.setState({mapLayers:layers[name]})
            })
    },
    
    getPanes:function(){
        return [
            {
                name:'home',
                icon:'fa fa-home',
                content: <LayerList layers={this.state.layers} load = {this.loadLayer} />

            },            
            {
                name:'home2',
                icon:'fa fa-home',
                content: <LayerList layers={this.state.layers} load = {this.loadLayer} />
            }        
        ]
    },

    componentDidMount:function(){




    },

    render: function() {
        
        var nextCoords = this.props.currentHouse ? this.props.currentHouse.geometry.coordinates : null;
        var button = <span />
        
       

        
        //console.log('render checkins',this.state.mapLayers);
        return (
        	
            <div style={{width:'100%',height:'100%'}} >
                <MapSidebar panes={this.getPanes()} />
                            
                <Map layers={this.state.mapLayers} />

            
            </div> 
        	
        );
    
    }
});

module.exports = WalkerDashboard;