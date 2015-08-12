
var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["Border_Crossing_Port","NYS_Canal_System"])
                 .range(colorbrewer.RdBu[6]),
                 
    comma = d3.format(",");

module.exports = {
    "Border Crossing/Port of Entry":{
        path:"../finalGeoJson/Border_Crossing_Port.geojson",
        options:{
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

                popupContent = "NYS Major Border Crosssings <br/>" + feature.properties.CP_Name;
                layer.bindPopup(popupContent);                   
            }
        }
    },
    "Intermodal Facilities of NY":{
        path:"../finalGeoJson/Intermodal_Facility.geojson",
        options:{
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

                popupContent = "US Facilities <br/> State: " + feature.properties.STATE + "<br/> City: " + feature.properties.CITY + "<br/> Name: " + feature.properties.NAME + "<br/> Type of Facility: " + feature.properties.MODE_TYPE;
                layer.bindPopup(popupContent);                    
            }
        }
    },
    "Major Airports":{
        path:"../finalGeoJson/Major_Airport.geojson",
        options:{
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
                //obj.bindPopup(d.properties.PortName);
                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                                popupContent = "Export Output <br/>" + feature.properties.FULLNAME;
                layer.bindPopup(popupContent);              
                  
            }
        }
    },
    "Major Ports":{
        path:"../finalGeoJson/Major_Ports.geojson",
        options:{
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

                popupContent = "NY Major Ports <br/> Port Name: "+feature.properties.PORT_NAME;
                layer.bindPopup(popupContent);                   
            }
        }
    },
    "NYS Canal System":{
        path:"../finalGeoJson/NYS_Canal_System.json",
        options:{
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

                popupContent = "NYS Canal System <br/>" + feature.properties.Canal_Name +" Canal";
                layer.bindPopup(popupContent);                  
            }
        }
    }
}
