
var d3 = require('d3');

var colorScale = d3.scale.category20();   

module.exports = {
    "US Counties with population over 500k":{
    	path:"cb_2013_us_county_500k.geojson",
    	options:{
    		zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("cb_2013_us_county_500k")
                }
            }
        }
    },
    "US Cities":{
    	path:"cities.geojson",
    	options:{
    		zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("cities")
                }
            },
            pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});
                //obj.bindPopup(d.properties.PortName);
                return obj;
            }
        }
    },
    "NY Cities with Population Over 20k":{
    	path:"SelectCities_PopOver20k.geojson",
    	options:{
    		zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("SelectCities_PopOver20k")
                }
            },
            pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});
                //obj.bindPopup(d.properties.PortName);
                return obj;
            }
        }
    },
    "Facilities":{
    	path:"facility.geojson",
    	options:{
    		zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("facility")
                }
            },
            pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});
                //obj.bindPopup(d.properties.PortName);
                return obj;
            }
        }
    }

}