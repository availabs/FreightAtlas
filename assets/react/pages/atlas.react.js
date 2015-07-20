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

        return {
            mapLayers:{},
            layersInfo:{
                "AllRail_StateClip":{path:"AllRail_StateClip.geojson",loaded:false,visible:false},
                "BorderCrossingsMajor":{path:"BorderCrossingsMajor.geojson",loaded:false,visible:false},
                "CAN_adm1":{path:"CAN_adm1.geojson",loaded:false,visible:false},
                "Export_Output":{path:"Export_Output.geojson",loaded:false,visible:false},
                "MPOBoundaries":{path:"MPOBoundaries.geojson",loaded:false,visible:false},
                "MPO_Cities":{path:"MPO_Cities.geojson",loaded:false,visible:false},
                "NTAD_2014_NYarea":{path:"NTAD_2014_NYarea.geojson",loaded:false,visible:false},
                "NYSDOT_Capital_Region_Dissolve":{path:"NYSDOT_Capital_Region_Dissolve.geojson",loaded:false,visible:false},
                "NYSDOT_Central_Region_Dissolve":{path:"NYSDOT_Central_Region_Dissolve.geojson",loaded:false,visible:false},
                "NYSDOT_FreightNetwork_Draft":{path:"NYSDOT_FreightNetwork_Draft.geojson",loaded:false,visible:false},
                "NYSDOT_NYMTC_Region_Dissolve":{path:"NYSDOT_NYMTC_Region_Dissolve.geojson",loaded:false,visible:false},
                "NYSDOT_Regions":{path:"NYSDOT_Regions.geojson",loaded:false,visible:false},
                "NYSDOT_Regions_Dissolve":{path:"NYSDOT_Regions_Dissolve.geojson",loaded:false,visible:false},
                "NY_MajorPorts":{path:"NY_MajorPorts.geojson",loaded:false,visible:false},
                "Railroad":{path:"Railroad.geojson",loaded:false,visible:false},
                "SelectCities_PopOver20k":{path:"SelectCities_PopOver20k.geojson",loaded:false,visible:false},
                "cb_2013_us_county_500k":{path:"cb_2013_us_county_500k.geojson",loaded:false,visible:false},
                "cities":{path:"cities.geojson",loaded:false,visible:false},
                "facility":{path:"facility.geojson",loaded:false,visible:false},
                "nys_canal_system":{path:"nys_canal_system.geojson",loaded:false,visible:false}
            }
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
                console.log("getData in loadLayer",data,err);

                newState.mapLayers[layName] = {id:layName,geo:data,options:{zoomOnLoad:true,visible:true,
                    pointToLayer: function (d, latlng) {

                      var options = {

                       },
                       obj = L.circleMarker(latlng, options);
                       
                       obj.bindPopup(d.properties.PortName);


                       return obj;
                    },
                    onEachFeature:function(d,latlng){
                        console.log(d);
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
                content: <LayerList layers={this.state.layersInfo} load = {this.loadLayer} />

            },            
            {
                name:'home2',
                icon:'fa fa-home',
                content: <LayerList layers={this.state.layersInfo} load = {this.loadLayer} />
            }        
        ]
    },

    componentDidMount:function(){

        console.log("hello");



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