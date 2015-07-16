
'use strict';

var React = require('react'),
    
    //--Components
    ToolTip = require('./ToolTip.react'),
    
    //--Utils
    L = require('leaflet'),
    MapSidebar = require ('./MapSidebar'),
    d3 = require('d3');
    

var map = null,
    layers = {},
    markers = {},
    sidebar;


var Map = React.createClass({
    
    getDefaultProps:function(){
        return {
            height : '500px',
            ToolTip : {display:'none'},
            zoomControl : false,
            sidebar : false
        }
    },

    componentDidMount: function() {
       
        L.Icon.Default.imagePath = '/img/icons';
        this.renderMap();
        console.log('did mount',map)
        map.invalidateSize()
        setTimeout(function () {
            console.log('invalideate')
            map.invalidateSize()
        }, 50);

    },
    
    componentWillReceiveProps: function(nextProps) {
        var scope = this;
        if(nextProps.layers){
            
            Object.keys(nextProps.layers).forEach(function(key){
                var currLayer = nextProps.layers[key];
                if(layers[key]){
                    //if layer existed previously check version ids
                    //console.log('layer on props exists',key,currLayer.id,layers[key].id);
                    if(currLayer.id !== layers[key].id && currLayer.geo.features.length > 0){
                        scope._updateLayer(key,currLayer)        
                    }
                }else if(currLayer.geo && currLayer.geo.features.length > 0){
                    //layer is new and has features
                    scope._updateLayer(key,currLayer)
                }else{
                    console.log('MAP/recieve props/ DEAD END')
                }
            });
        }
        if(nextProps.markers){
            
            Object.keys(nextProps.markers).forEach(function(key){
                var curMarker = nextProps.markers[key];
                if(markers[key]){

                    if(curMarker.id !== markers[key].id && curMarker.latlng){ 
                    // update existing marker
                        markers[key].marker.setLatLng(L.latLng(curMarker.latlng[1], curMarker.latlng[0]))
                        markers[key].id = curMarker.id
                    }
                }
                else if(curMarker.latlng){ 
                //add new marker
                    var icon = L.divIcon(curMarker.options);
                    markers[key]  = {
                        id: curMarker.id,
                        marker:L.marker([curMarker.latlng[1],curMarker.latlng[0]], { icon: icon })
                    }
                    markers[key].marker.addTo(map);
                }

                

                
            });
        }    
    },
    
    _updateLayer : function(key,layer){
        //console.log('update layer',key)
        if(map.hasLayer(layers[key].layer)){
            map.removeLayer(layers[key].layer)
        }
        layers[key] = {
            id:layer.id,
            layer: new L.geoJson({type:'FeatureCollection',features:[]},layer.options)
        }
        if(layer.geo){
            layers[key].layer.addData(layer.geo); // to get layerAdd event
            map.addLayer(layers[key].layer);
            if(layer.options.centerOnLoad){
                    map.setView(L.latLng(layer.geo.features[0].geometry.coordinates.reverse()),15)
            }
            if(layer.options.zoomOnLoad){
                
                
                    var ezBounds = d3.geo.bounds(layer.geo);
                    map.fitBounds([ezBounds[0].reverse(),ezBounds[1].reverse()]);
                
            }
        }
    },

    renderMap:function(){
        var scope = this;
        var mapDiv = document.getElementById('map');
        if(this.props.height === '100%'){
            mapDiv.setAttribute("style",window.innerHeight);
        }else{
        }
        //pencil am3081.kml65fk1
        var mapquestOSM = L.tileLayer("http://{s}.tiles.mapbox.com/v3/am3081.h0pml9h7/{z}/{x}/{y}.png");
        
        map = L.map(this.getDOMNode(), {
            center: [39.8282, -98.5795],
            zoom: 4,
            layers: [mapquestOSM],
            zoomControl: this.props.zoomControl,
            attributionControl: false
        });
        //map.invalidateSize();
        if(this.props.sidebar){
            sidebar = L.control.sidebar('sidebar').addTo(map);
        }

        if(this.props.layers){
            Object.keys(this.props.layers).forEach(function(key){
                
                var currLayer = scope.props.layers[key]
                layers[key] =  {
                    id:currLayer.id,
                    layer: L.geoJson(currLayer.geo,currLayer.options)
                };  
                map.addLayer(layers[key].layer);
                if(currLayer.geo && currLayer.options.zoomOnLoad && currLayer.geo.features.length > 0){
                    var ezBounds = d3.geo.bounds(currLayer.geo);
                    map.fitBounds([ezBounds[0].reverse(),ezBounds[1].reverse()]);
                }
            
            });
        }

        if(this.props.markers){
            
            Object.keys(this.props.markers).forEach(function(key){

                var curMarker = scope.props.markers[key];
                //console.log('marker on mount',key,curMarker);
                if(curMarker.latlng){
                    var icon = L.divIcon(curMarker.options);
                    markers[key]  = {

                        id: curMarker.id,
                        marker:L.marker([curMarker.latlng[1],curMarker.latlng[0]], { icon: icon })
                    }
                    markers[key].marker.addTo(map);
                }
            });
        }
    },

    render: function() {
        if(map){    
            map.invalidateSize();
        }
        console.log('renderMap',map)
        return (
            <div className="sidebar-map" id="map" style={{height:'100%'}}>
                <ToolTip/>
            </div>

        );
    },

});


module.exports = Map;