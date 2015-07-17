'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/map.react'),
    
    //    -- sidebar components
    MapSidebar = require('../components/utils/MapSidebar.react'),
    
    // -- actions
    
    // -- utils;
    d3 = require('d3');
    
    

var WalkerDashboard = React.createClass({

    getInitialState:function(){

        return {
            mapLayers:{layer1:{id:0,options:{zoomOnLoad:true},geo:{type:"FeatureCollection",features:[]}}}
        }

    },
    
    getPanes:function(){
        return [
            {
                name:'home',
                icon:'fa fa-home',
                content: <h1>Stuff1</h1> 

            }        
        ]
    },

    componentDidMount:function(){

        var url = "/data/geoJson/NYSDOT_Regions.geojson";

        var scope = this;

        d3.json(url,function(err,data){
            console.log("getData",data,err);

            var layers = {layer1:{id:1,geo:data,options:{zoomOnLoad:true}}};

            scope.setState({mapLayers:layers})

        })


    },

    render: function() {
        
        var nextCoords = this.props.currentHouse ? this.props.currentHouse.geometry.coordinates : null;
        var button = <span />
        
       

        
        console.log('render checkins',this.state.mapLayers);
        return (
        	
            <div style={{width:'100%',height:'100%'}} >
                <MapSidebar panes={this.getPanes()} />
                            
                <Map layers={this.state.mapLayers} />

            
            </div> 
        	
        );
    
    }
});

module.exports = WalkerDashboard;