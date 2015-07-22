
var d3 = require('d3');

var colorScale = d3.scale.category20();   

module.exports = {
    "AllRail_StateClip":{
        path:"AllRail_StateClip.geojson",
        options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("AllRail_StateClip")
                }
            }
        }
    },
    "BorderCrossingsMajor":{
        path:"BorderCrossingsMajor.geojson",
        options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("BorderCrossingsMajor")
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
    "CAN_adm1":{
    	path:"CAN_adm1.geojson",
    	options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("CAN_adm1")
                }
            }
        }
    },
    "Export_Output":{
    	path:"Export_Output.geojson",
    	options:{
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
            }
        }
    },
    "MPOBoundaries":{
    	path:"MPOBoundaries.geojson",
    	options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("MPOBoundaries")
                }
            }
        }
    },
    "MPO_Cities":{
    	path:"MPO_Cities.geojson",
    	options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("MPO_Cities")
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
    "NTAD_2014_NYarea":{
    	path:"NTAD_2014_NYarea.geojson",
    	options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NTAD_2014_NYarea")
                }
            }
        }
    },
    "NYSDOT_Capital_Region_Dissolve":{
    	path:"NYSDOT_Capital_Region_Dissolve.geojson",
    	options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYSDOT_Capital_Region_Dissolve")
                }
            }
        }
    },
    "NYSDOT_Central_Region_Dissolve":{
    	path:"NYSDOT_Central_Region_Dissolve.geojson",
    	options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYSDOT_Central_Region_Dissolve")
                }
            }
        }
    },
    "NYSDOT_FreightNetwork_Draft":{
    	path:"NYSDOT_FreightNetwork_Draft.geojson",
    	options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYSDOT_FreightNetwork_Draft")
                }
            }
        }
    },
    "NYSDOT_NYMTC_Region_Dissolve":{
    	path:"NYSDOT_NYMTC_Region_Dissolve.geojson",
    	options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYSDOT_NYMTC_Region_Dissolve")
                }
            }
        }
    },
    "NYSDOT_Regions":{
    	path:"NYSDOT_Regions.geojson",
    	options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYSDOT_Regions")
                }
            }
        }
    },
    "NYSDOT_Regions_Dissolve":{
    	path:"NYSDOT_Regions_Dissolve.geojson",
    	options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYSDOT_Regions_Dissolve")
                }
            }
        }
    },
    "NY_MajorPorts":{
    	path:"NY_MajorPorts.geojson",
    	options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NY_MajorPorts")
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
    "Railroad":{
    	path:"Railroad.geojson",
    	options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Railroad")
                }
            }
        }
    },
    "SelectCities_PopOver20k":{
    	path:"SelectCities_PopOver20k.geojson",
    	options:{
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
    "cb_2013_us_county_500k":{
    	path:"cb_2013_us_county_500k.geojson",
    	options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("cb_2013_us_county_500k")
                }
            }
        }
    },
    "cities":{
    	path:"cities.geojson",
    	options:{
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
    "facility":{
    	path:"facility.geojson",
    	options:{
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
    },
    "nys_canal_system":{
    	path:"nys_canal_system.geojson",
    	options:{
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("nys_canal_system")
                }
            }
        }
    }
}