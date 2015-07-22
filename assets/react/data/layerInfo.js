
var d3 = require('d3');

var colorScale = d3.scale.category20();   

module.exports = {
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
    "All Rail (State Clip)":{
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
    "NYS Canal System":{
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
    },
    "NY Major Border Crossings":{
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
    "Canadian Provinces":{
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
    "Export/Output":{
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
    "MPO Boundaries":{
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
    "MPO Cities":{
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
    "NTAD 2014 NYarea":{
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
    "NY Capital_Region":{
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
    "NY Central Region Dissolve":{
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
    "NY Freight Network":{
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
    "NY Metro Region":{
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
    "NY All Regions":{
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
    "NY RegionsDissolve":{
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
    "NY Major Ports":{
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
    "US Counties with population over 500k":{
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
    "US Cities":{
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
    "Cities with Population Over 20k":{
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
    "Facilities":{
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
    }

}