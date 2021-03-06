'use strict';

var React = require('react'),
    
    //--Components
    ToolTip = require('./ToolTip.react'),
    LayerLegend = require('./layerLegend.react'),

    //--Utils
    L = require('leaflet'),
    offset = require('leaflet-polylineoffset'),
    MapSidebar = require ('./MapSidebar'),
    d3 = require('d3'),
    topojson = require('topojson');
    

var mapVar = null,
    layers = {},
    markers = {},
    sidebar;

var colorScale = d3.scale.category20();   
// console.log(offset)

var MAPBOX_TOKEN = require('./mapboxToken')

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
                        // console.log('MAP/recieve props/ DEAD END')
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
                        // console.log('MAP/recieve props/ DEAD END')
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
        // console.log(key,layer)
        if(layers[key] && mapVar.hasLayer(layers[key].layer)){
            mapVar.removeLayer(layers[key].layer)
        }
        if(layer.options.visible){
            layers[key] = {
                id:layer.id,
                layer: new L.geoJson({type:'FeatureCollection',features:[]},layer.options)
            }
            if(layer.geo){
                if(layer.options.directional){
                    var curLayer = new L.layerGroup()
                    // console.log("ryanTest",layer)
                    var directionsCross = layer.options.directional
                    var coords = []
                    layer.geo.features.forEach(feature => {
                        if(feature.properties[directionsCross["s"]] != 0 || feature.properties[directionsCross["w"]] != 0){
                            var direction = feature.properties[directionsCross["s"]] ? directionsCross["s"] : directionsCross["w"]
                            var style = layer.options.style(feature,direction)
                            var coords = feature.geometry.coordinates[0]

                            var line = new L.polyline(coords, style)
                            line.setOffset(-3)
                            layer.options.onEachFeature(feature,line)
                            //line.addTo(mapVar)
                            curLayer.addLayer(line)
                        }
                        if(feature.properties[directionsCross["n"]] != 0 || feature.properties[directionsCross["e"]] != 0){
                            var direction = feature.properties[directionsCross["n"]] ? directionsCross["n"] : directionsCross["e"]
                            var style = layer.options.style(feature,direction)
                            var coords = feature.geometry.coordinates[0]

                            var line = new L.polyline(coords, style)
                            line.setOffset(3)
                            layer.options.onEachFeature(feature,line)
                            //line.addTo(mapVar)
                            curLayer.addLayer(line)
                        }
                        layers[key].layer = curLayer;
                        mapVar.addLayer(layers[key].layer);

                        if(layer.options.centerOnLoad){
                            mapVar.setView(L.latLng(layer.geo.features[0].geometry.coordinates.reverse()),15)
                        }
                        if(layer.options.zoomOnLoad){
                            var ezBounds = d3.geo.bounds(layer.geo);

                            mapVar.invalidateSize();
                            mapVar.fitBounds(layers[key].layer.getBounds());
                        }
                    })    
                }
                else{
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
        }
    },

    renderMap:function(){
        // console.log("rendermap")
        var scope = this;
        var mapDiv = document.getElementById('map');
        if(this.props.height === '100%'){
            mapDiv.setAttribute("style",window.innerHeight);
        }else{
        }
        //pencil am3081.kml65fk1
        // NOTE: All of these are broken.
        //       See: https://stackoverflow.com/a/65848716/3970755 
        //            https://docs.mapbox.com/help/troubleshooting/migrate-legacy-static-tiles-api/#how-can-i-tell-if-my-style-is-a-classic-style-or-a-modern-mapbox-style
        // var greyScale = L.tileLayer("https://{s}.tiles.mapbox.com/v3/am3081.nb38hhb7/{z}/{x}/{y}.png"),
        //     tContours = L.tileLayer("https://{s}.tiles.mapbox.com/v3/aj.um7z9lus/{z}/{x}/{y}.png"),
        //     streetMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + MAPBOX_TOKEN),
        //     aImagery = L.tileLayer('http://{s}.tiles.mapbox.com/v3/am3081.h0pml9h7/{z}/{x}/{y}.png'),
        //     aImageStreets = L.tileLayer('http://oatile2.mqcdn.com/tiles/1.0.0/hyb/{z}/{x}/{y}.png'),   //+ http://{s}.tiles.mapbox.com/v3/am3081.h0pml9h7/{z}/{x}/{y}.png              
        //     aImageTerr = L.tileLayer('https://{s}.tiles.mapbox.com/v3/matt.hd0b27jd/{z}/{x}/{y}.png');                    

        var streetMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + MAPBOX_TOKEN)
        var lightMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=' + MAPBOX_TOKEN)
        var aImagery = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=' + MAPBOX_TOKEN)
                                    
        mapVar = L.map(this.getDOMNode(), {
            center: [42.8282, -78.5795],
            zoom: 7,
            layers: [streetMap],
            zoomControl: this.props.zoomControl,
            attributionControl: false
        });

        new L.Control.Zoom({ position: 'topright' }).addTo(mapVar); 

        var baseMaps = {
            "Street Map": streetMap,
            "Light Map": lightMap,
            "Aerial Imagery" : aImagery,
        // The below layers are broken.
            // "Dark Map" : greyScale,
            // "Terrain Countours": tContours,
            // "Aerial Imagery with Terrain" : aImageTerr,
            
        } //,
        // overlayMaps = {
        //     "Street Overlay" : aImageStreets
        // };

        // Remove broken overlayMaps option
        // L.control.layers(baseMaps, overlayMaps).addTo(mapVar);
        L.control.layers(baseMaps).addTo(mapVar);
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
        // console.log(mapVar)
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
