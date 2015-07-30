'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/map.react'),
    
    //    -- sidebar components
    MapSidebar = require('../components/utils/MapSidebar.react'),

    // -- actions
    
    // -- utils;
    d3 = require('d3'),
    Areas = require('../data/areas'),
    Facilities = require('../data/facilities'),
    Rail = require('../data/rail'),
    Road = require('../data/road');


var TransDashboard = React.createClass({

    getInitialState:function(){
        

        return {            
            mapLayers:{},
            areas:Areas,
            facilities:Facilities,
            rail:Rail,
            road:Road
        }

    },
    
    getPanes:function(){
        return [
            {
                name:'home',
                icon:'fa fa-home',
                content: <h3>Hello from Ryan </h3>
            } 
        ]
    },

    componentDidMount:function(){

        console.log("hello");



    },

    render: function() {
        console.log(this);
        var button = <span />
        
       

        

        return (
                <div style={{width:'100%',height:'100%'}} >
                    <MapSidebar panes={this.getPanes()} /> 
                    <Map layers={this.state.mapLayers}  />
                </div>
        )
    
    }
});

module.exports = TransDashboard;