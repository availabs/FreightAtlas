'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/map.react'),
    
    //    -- sidebar components
    MapSidebar = require('../components/utils/MapSidebar.react');
    
    // -- actions
    
    // -- utils;
    
    
    

var WalkerDashboard = React.createClass({

    
    
    getPanes:function(){
        return [
            {
                name:'home',
                icon:'fa fa-home',
                content: <h1>Stuff</h1> 

            }        
        ]
    },

    

    render: function() {
        
        var nextCoords = this.props.currentHouse ? this.props.currentHouse.geometry.coordinates : null;
        var button = <span />
        
       

        
        console.log('render checkins',this.props.checkins);
        return (
        	
            <div style={{width:'100%',height:'100%'}} >
                <MapSidebar panes={this.getPanes()} />
                            
                <Map />

            
            </div> 
        	
        );
    
    }
});

module.exports = WalkerDashboard;