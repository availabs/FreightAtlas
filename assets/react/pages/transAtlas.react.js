'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/transMap.react'),
  
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
                content:  <h3>Hello from Ryan</h3>
            } 
        ]
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

    componentDidMount:function(){

        console.log("hello");
        if(Object.keys(this.state.mapLayers).length === 0){
            this.loadLayer("County", "../finalGeoJson/County.geojson","areas");
            console.log("Add NYS");
        }


    },


    render: function() {


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