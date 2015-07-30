'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/map.react'),
    
    //    -- sidebar components
    MapSidebar = require('../components/utils/MapSidebar.react'),

    // -- actions
    
    // -- utils;
    d3 = require('d3');
    


var TransDashboard = React.createClass({

    getInitialState:function(){
        //var geoLayerInfo = geoLayer;
        return {}

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
        
        var button = <span />
        
       

        

        return (
                <div style={{width:'100%',height:'100%'}} >
                    <MapSidebar panes={this.getPanes()} /> 
                </div>
        )
    
    }
});

module.exports = TransDashboard;