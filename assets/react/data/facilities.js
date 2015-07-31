
var d3 = require('d3');

var colorScale = d3.scale.category20();   

module.exports = {
    "Border Crossing Port":{
        path:"../finalGeoJson/Border_Crossing_Port.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Border_Crossing_Port")
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
                //console.log(feature)
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
                    color:colorScale("Intermodal_Facility")
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
                    color:colorScale("Major_Airport")
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
                                popupContent = "Export Output <br/>" + feature.properties.FULLNAME + "<br/> Number of Passengers: " + feature.properties.Passengers
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
                    color:colorScale("Export_Output")
                }
            },
            pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});
                //obj.bindPopup(d.properties.PortName);
                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "Major Airports <br/>" + feature.properties.FULLNAME;
                layer.bindPopup(popupContent);
                
            }
        }
    },
    "Major_Ports":{
        path:"../finalGeoJson/Major_Ports.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Major_Ports")
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
                popupContent = "NY Major Ports <br/> Port Name :"+feature.properties.PORT_NAME+"<br> Imports: " + feature.properties.IMPORTS +"<br/> Exports: "+ feature.properties.EXPORTS
                layer.bindPopup(popupContent);              
                  
            }
        }
    },
    "NYS_Canal_System":{
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
                // console.log(feature)
                popupContent = "NYS Canal System <br/>" + feature.properties.Canal_Name +" Canal";
                layer.bindPopup(popupContent);              
                  
            }
        }
    }
}
