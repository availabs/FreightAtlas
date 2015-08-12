
'use strict';

var React = require('react'),
    
    //--Components
    ToolTip = require('./ToolTip.react'),
    LayerLegend = require('./layerLegend.react'),

    //--Utils
    L = require('leaflet'),
    MapSidebar = require ('./MapSidebar'),
    d3 = require('d3'),
    topojson = require('topojson');
    

var mapVar = null,
    layers = {},
    markers = {},
    sidebar;

var colorScale = d3.scale.category20();   




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

        mapVar.invalidateSize()
        setTimeout(function () {
            //onsole.log('invalideate')
            mapVar.invalidateSize()
        }, 50);

    },
    
    componentWillReceiveProps: function(nextProps) {
        var scope = this;

        if(nextProps.layers){
      
            Object.keys(nextProps.layers).forEach(function(key){

                var currLayer = nextProps.layers[key];
                
                if(currLayer.geo.type == "Topology"){
                    for(var key in currLayer.geo.objects){
                        currLayer.geojson = topojson.feature(currLayer.geo,currLayer.geo.objects[key])
                    } 
                       
                
                   if(layers[key]){
                        //if layer existed previously check version ids

                        if(currLayer.id !== layers[key].id && currLayer.geojson.features.length > 0){

                            scope._updateLayer(key,currLayer)        
                        }
                    }else if(currLayer.geojson && currLayer.geojson.features.length > 0){
                        //layer is new and has features

                        scope._updateLayer(key,currLayer)
                    }else{
                        console.log('MAP/recieve props/ DEAD END')
                    }
                }
                else{
                    if(layers[key]){
                        //if layer existed previously check version ids

                        if(currLayer.id !== layers[key].id && currLayer.geo.features.length > 0){

                            scope._updateLayer(key,currLayer)        
                        }
                    }else if(currLayer.geo && currLayer.geo.features.length > 0){
                        //layer is new and has features

                        scope._updateLayer(key,currLayer)
                    }else{
                        console.log('MAP/recieve props/ DEAD END')
                    }
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
                    markers[key].marker.addTo(mapVar);
                }

                

                
            });
        }    
    },
    
    _updateLayer : function(key,layer){
        if(layers[key] && mapVar.hasLayer(layers[key].layer)){
            mapVar.removeLayer(layers[key].layer)
        }
        if(layer.options.visible){
            layers[key] = {
                id:layer.id,
                layer: new L.geoJson({type:'FeatureCollection',features:[]},layer.options)
            }
            if(layer.geo){

                if(layer.geo.type == "Topology"){
                    layers[key].layer.addData(layer.geojson); // to get layerAdd event
                    mapVar.addLayer(layers[key].layer);
                    if(layer.options.centerOnLoad){
                            mapVar.setView(L.latLng(layer.geo.features[0].geometry.coordinates.reverse()),15)
                    }
                    if(layer.options.zoomOnLoad){
                        
                        
                            var ezBounds = d3.geo.bounds(layer.geo);

                            mapVar.invalidateSize();

                            mapVar.fitBounds(layers[key].layer.getBounds());
                        
                    }
                }
                else{
                    layers[key].layer.addData(layer.geo); // to get layerAdd event
                    mapVar.addLayer(layers[key].layer);
                    if(layer.options.centerOnLoad){
                            mapVar.setView(L.latLng(layer.geo.features[0].geometry.coordinates.reverse()),15)
                    }
                    if(layer.options.zoomOnLoad){
                        
                        
                            var ezBounds = d3.geo.bounds(layer.geo);

                            mapVar.invalidateSize();

                            mapVar.fitBounds(layers[key].layer.getBounds());
                        
                    }
                }
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
        var tContours = L.tileLayer("https://c.tiles.mapbox.com/v3/aj.um7z9lus/{z}/{x}/{y}.png"),
            streetMap = L.tileLayer("http://a.tiles.mapbox.com/v3/am3081.h0po4e8k/{z}/{x}/{y}.png"),
            aImagery = L.tileLayer('http://{s}.tiles.mapbox.com/v3/am3081.h0pml9h7/{z}/{x}/{y}.png'),
            aImageStreets = L.tileLayer('http://oatile2.mqcdn.com/tiles/1.0.0/hyb/{z}/{x}/{y}.png'),   //+ http://{s}.tiles.mapbox.com/v3/am3081.h0pml9h7/{z}/{x}/{y}.png              
            aImageTerr = L.tileLayer('https://a.tiles.mapbox.com/v3/matt.hd0b27jd/{z}/{x}/{y}.png'),
            greyScale = L.tileLayer("http://{s}.tiles.mapbox.com/v3/erickrans.4f9126ad/{z}/{x}/{y}.png");                    
                                    
                                    
                                    
        mapVar = L.map(this.getDOMNode(), {
            center: [42.8282, -78.5795],
            zoom: 7,
            layers: [greyScale],
            zoomControl: this.props.zoomControl,
            attributionControl: false
        });

        new L.Control.Zoom({ position: 'topright' }).addTo(mapVar); 

        var baseMaps = {
            "Greyscale" : greyScale,
            "Terrain Countours": tContours,
            "Street Map": streetMap,
            "Aerial Imagery" : aImagery,
            "Aerial Imagery with Terrain" : aImageTerr,
            
        },
        overlayMaps = {
            "Street Overlay" : aImageStreets
        };

        L.control.layers(baseMaps, overlayMaps).addTo(mapVar);
        //mapVar.invalidateSize();
        if(this.props.sidebar){
            sidebar = L.control.sidebar('sidebar').addTo(mapVar);
        }

        if(this.props.layers){
            Object.keys(this.props.layers).forEach(function(key){
                
                var currLayer = scope.props.layers[key]
                layers[key] =  {
                    id:currLayer.id,
                    layer: L.geoJson(currLayer.geo,layer.options)
                };  
                mapVar.addLayer(layers[key].layer);
                if(currLayer.geo && currLayer.options.zoomOnLoad && currLayer.geo.features.length > 0){
                    var ezBounds = d3.geo.bounds(currLayer.geo);

                    mapVar.fitBounds(layers[key].layer.getBounds());
                }
            
            });
        }
        if(this.props.markers){
            
            Object.keys(this.props.markers).forEach(function(key){

                var curMarker = scope.props.markers[key];

                if(curMarker.latlng){
                    var icon = L.divIcon(curMarker.options);
                    markers[key]  = {

                        id: curMarker.id,
                        marker:L.marker([curMarker.latlng[1],curMarker.latlng[0]], { icon: icon })
                    }
                    markers[key].marker.addTo(mapVar);
                }
            });
        }


    },

    render: function() {

        if(mapVar){    
            mapVar.invalidateSize();
        }
        return (
            <div style={{height:'100%'}}>
                <LayerLegend activeLayers={this.props.layers} />
                <div className="sidebar-map" id="map" >
                    <ToolTip/>
                </div>


            </div>
        );
    },

});


module.exports = Map;