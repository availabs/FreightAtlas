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
        //var geoLayerInfo = geoLayer;

        var allLayers = {
                "Railroads":{path:"AllRail_StateClip.geojson"},
                "Border Crossing":{path:"BorderCrossingsMajor.geojson"},
                "Canada":{path:"CAN_adm1.geojson"},
                "Export_Output":{path:"Export_Output.geojson"},
                "MPOBoundaries":{path:"MPOBoundaries.geojson"},
                "MPO Locations":{path:"MPO_Cities.geojson"},
                "NTAD_2014_NYarea":{path:"NTAD_2014_NYarea.geojson"},
                "Capital Region":{path:"NYSDOT_Capital_Region_Dissolve.geojson"},
                "Central Region":{path:"NYSDOT_Central_Region_Dissolve.geojson"},
                "NYSDOT_FreightNetwork_Draft":{path:"NYSDOT_FreightNetwork_Draft.geojson"},
                "NYMTC":{path:"NYSDOT_NYMTC_Region_Dissolve.geojson"},
                "NYSDOT_Regions":{path:"NYSDOT_Regions.geojson"},
                "West Region":{path:"NYSDOT_Regions_Dissolve.geojson"},
                "Major Ports":{path:"NY_MajorPorts.geojson"},
                "Railroad":{path:"Railroad.geojson"},
                "SelectCities_PopOver20k":{path:"SelectCities_PopOver20k.geojson"},
                "cb_2013_us_county_500k":{path:"cb_2013_us_county_500k.geojson"},
                "cities":{path:"cities.geojson"},
                "facility":{path:"facility.geojson"},
                "nys_canal_system":{path:"nys_canal_system.geojson"}
        }

        for (var i in allLayers){
            allLayers[i].visible = false;
            allLayers[i].loaded = false;               
        }


        return {
            mapLayers:{},
            layersInfo: allLayers
        }

    },

    loadLayer:function(layName,url){
        console.log(url);
        var scope = this,
            newState = scope.state;
        if(!this.state.layersInfo[layName].loaded){
            var urlBase = "/data/geoJson/";

            var urlFull = urlBase + url;
        
            d3.json(urlFull,function(err,data){


                newState.mapLayers[layName] = {id:layName,geo:data,options:{zoomOnLoad:true,visible:true,
                    pointToLayer: function (d, latlng) {

                      var options = {

                       },
                       obj = L.circleMarker(latlng, options);
                       
                       obj.bindPopup(d.properties.PortName);


                       return obj;
                    },
                    onEachFeature:function(d,latlng){
                        //console.log(d);
                    }}};
                newState.layersInfo[layName].loaded = true;
                newState.layersInfo[layName].visible = true;

                scope.setState(newState)
                
            }) 
        }else{
            newState.mapLayers[layName].options.visible = !newState.mapLayers[layName].options.visible;
            newState.mapLayers[layName].id++;
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