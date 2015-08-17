
var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["Border_Crossing_Port","NYS_Canal_System"])
                 .range(colorbrewer.RdYlBu[6]),
                 
    comma = d3.format(",");

module.exports = {
    "Border Crossing/Port of Entry":{
        path:"../finalGeoJson/Border_Crossing_Port.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Border_Crossing_Port"),
                    fillOpacity:0.55,
                    opacity:0.9,
                }
            },pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});

                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Border Crossing/Port of Entry</b> <br/><b>Name:</b> " + feature.properties.CP_Name;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = feature.properties.CP_Name;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                    
            }
        }
    },
    "Intermodal Facilities of NY":{
        path:"../finalGeoJson/Intermodal_Facility2.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Intermodal_Facility"),
                    fillOpacity:0.55,
                    opacity:0.9,
                }
            },pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});

                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Intermodal Facilities of NY</b> <br/><b>City:</b> " + feature.properties.CITY + "<br/> <b>Name:</b> " + feature.properties.NAME + "<br/> <b>Type of Facility:</b> " + feature.properties.MODE_TYPE;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>State:</b> " + feature.properties.STATE + "<br/> <b>City:</b> " + feature.properties.CITY + "<br/> <b>Name:</b> " + feature.properties.NAME + "<br/> <b>Type of Facility:</b> " + feature.properties.MODE_TYPE;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                                        
            }
        }
    },
    "Major Airports":{
        path:"../finalGeoJson/Major_Airport.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Major_Airport"),
                    fillOpacity:0.55,
                    opacity:0.9,
                }
            },pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});
                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Major Airports</b> <br/><b>Name: </b>" + feature.properties.FULLNAME;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Name: </b>" + feature.properties.FULLNAME
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                                  
                  
            }
        }
    },
    "Major Ports":{
        path:"../finalGeoJson/Major_Ports2.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Major_Ports"),
                    fillOpacity:0.55,
                    opacity:0.9,
                }
            },pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});

                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Major Ports</b> <br/> <b>Port Name:</b> "+feature.properties.PORT_NAME;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Port Name:</b> "+feature.properties.PORT_NAME;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                                       
            }
        }
    },
    "NYS Canal System":{
        path:"../finalGeoJson/NYS_Canal_System.json",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYS_Canal_System"),
                    opacity:0.65,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>NYS Canal System</b> <br/>" + feature.properties.Canal_Name +" Canal";
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = feature.properties.Canal_Name +" Canal";
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                                      
            }
        }
    }
}
