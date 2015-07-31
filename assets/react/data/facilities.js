
var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["Border_Crossing_Port","NYS_Canal_System"])
                 .range(colorbrewer.YlOrBr[6]),
                 
    comma = d3.format(",");

module.exports = {
    "Border Crossing Port":{
        path:"../finalGeoJson/Border_Crossing_Port.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Border_Crossing_Port"),
                    fillOpacity:0.55,
                }
            },pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});

                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "NYS Major Border Crosssings <br/>" + feature.properties.CP_Name + "<br/>Bus Passengers (2013): "+comma(feature.properties.Bus_Passen);
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
                    color:colorScale("Intermodal_Facility")
                }
            },pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});

                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "US Facilities <br/> State: " + feature.properties.STATE + "<br/> City: " + feature.properties.CITY + "<br/> Type of Facility: " + feature.properties.MODE_TYPE
                layer.bindPopup(popupContent);                    
            }
        }
    },
    "Major Airports1":{
        path:"../finalGeoJson/Major_Airport.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Major_Airport"),
                    fillOpacity:0.55,
                }
            },pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});

                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "Major Airports1 <br/>" + feature.properties.FULLNAME + "<br/> Number of Passengers: " + comma(feature.properties.Passengers);
                layer.bindPopup(popupContent);                  
            }
        }
    },
    "Major Airports2":{
        path:"Export_Output.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Export_Output"),
                    fillOpacity:0.55,
                }
            },
            pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});

                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "Major Airports2 <br/>" + feature.properties.FULLNAME + "<br/> Number of Passengers: " + comma(feature.properties.Passengers);
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
                }
            },pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});

                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "NY Major Ports <br/> Port Name: "+feature.properties.PORT_NAME+"<br> Imports: " + comma(feature.properties.IMPORTS) +"<br/> Exports: "+ comma(feature.properties.EXPORTS)
                layer.bindPopup(popupContent);                   
            }
        }
    },
    "NYS Canal System":{
        path:"../finalGeoJson/NYS_Canal_System.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYS_Canal_System")
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
