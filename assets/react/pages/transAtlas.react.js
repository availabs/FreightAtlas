'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/transMap.react'),

    
    //    -- sidebar components
    MapSidebar = require('../components/utils/MapSidebar.react'),


    // -- data

    
    // -- utils;
    d3 = require('d3');
    


var TransDashboard = React.createClass({
    getInitialState:function(){

        return {
            mapLayers:{}
        }

    },

    getPanes:function(){
        return [
            {
                name:'home',
                icon:'/images/nyslogo',
                title:'About',
                content:<h3>hello</h3>
            }                                  
        ]
    },

    render: function() {
        var scope = this;
        
        var nextCoords = this.props.currentHouse ? this.props.currentHouse.geometry.coordinates : null,
            imgStyle = {
                position: 'absolute',
                left: '10px',
                height: '41px',
                top: '5px'
            };

        return (
                <div style={{width:'100%',height:'100%'}} >
                    <Map layers={this.state.mapLayers} />
                    <MapSidebar panes={this.getPanes()} /> 
                </div>
        )
    }
});

module.exports = TransDashboard;