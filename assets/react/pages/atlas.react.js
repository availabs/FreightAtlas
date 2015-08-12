'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/map.react'),
    LayerLegend = require('../components/utils/layerLegend.react'),
    Comments = require('../components/comments.react'),
    
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
                icon:'/images/nyslogo.png',
                content: <span> <h3> NYS Freight Atlas </h3><p>Welcome to the New York State Freight Atlas. This web-based map includes a selection
                of the GIS layers generated during the Freight Plan process.</p><p>Click on the menu icons at left to access various layer types, all of which 
                can be added to or removed from the map by clicking on the layer title.</p><p>As the Freight Plan progresses, new analytical layers will be
                added, including freight flows and traffic volumes.</p>
                <p>If you have any questions or comments please click on the
                comments menu icon in the lower left corner.</p></span>
            },
            {
                name:'home2',
                icon:'/images/areas.png',
                content: <LayerList title="New York State Regions" dataset='areas' layers={this.state.areas} onClick = {this.handleClick} />
            },
            {
                name:'home3',
                icon:'/images/facilities2.png',
                content:<LayerList title="Freight Facilities" dataset='facilities' layers={this.state.facilities} onClick = {this.handleClick} />
            },            
            {
                name:'home4',
                icon:'/images/rail2.png',
                content:<LayerList title="Rail Network" dataset='rail' layers={this.state.rail} onClick = {this.handleClick} />
            },            
            {
                name:'home5',
                icon:'/images/truck2.png',
                content:<LayerList title="Road Network" dataset='road' layers={this.state.road} onClick = {this.handleClick} />
            },
            {
                name:'home6',
                icon:'/images/comments.png',
                content: <Comments />
            }                            
        ]
    },

    componentDidMount:function(){

        if(Object.keys(this.state.mapLayers).length === 0){
            this.loadLayer("New York State", "../finalGeoJson/State.geojson","areas");
        }


    },
    handleClick: function (childComponent) {

        var curLayerName = childComponent.props.layerName;
        var datasetName = childComponent.props.dataset;
        var curLayerPath = this.state[datasetName][childComponent.props.layerName].path;

        this.loadLayer(curLayerName,curLayerPath,datasetName)
    },

    render: function() {
        var scope = this;

        var nextCoords = this.props.currentHouse ? this.props.currentHouse.geometry.coordinates : null;
        var button = <span />;
        var imgStyle = {
                position: 'absolute',
                left: '10px',
                height: '41px',
                top: '5px'
        }

        

        return (
                <div style={{width:'100%',height:'100%'}} >
                    <LayerLegend />
                    <MapSidebar panes={this.getPanes()} /> 


                    <Map layers={this.state.mapLayers} zoomControl={true}  />


                </div>
        )
    
    }
});

module.exports = WalkerDashboard;