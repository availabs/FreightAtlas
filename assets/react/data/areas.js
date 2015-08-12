
var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["CAN_adm1","Western_Region"])
                 .range(colorbrewer.Paired[9]),

    comma = d3.format(",");

module.exports = {
    "New York State":{
        path:"../finalGeoJson/State.geojson",
        options:{
            featList:[],
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("State"),
                    fillOpacity:0.075,
                    opacity:0.85,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                
                popupContent = "New York State"
                layer.bindPopup(popupContent);  

                this.featList.push(feature);
            }
        }
    },
    "Cities and Towns":{
        path:"../finalGeoJson/City_Town.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("City_Town"),
                    weight:1.5,
                    fillOpacity:0.1,
                    opacity:0.85,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "NY Cities with Population over 20k <br/> City: " + feature.properties.NAME + "<br/> Population in 2010: " + comma(feature.properties.POP2010);
                layer.bindPopup(popupContent);              
            }
        }
    },
    "Counties":{
        path:"../finalGeoJson/County.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("County"),
                    weight:1.5,
                    fillOpacity:0.1,
                    opacity:0.85,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "NY All Regions <br/> County Name: " + feature.properties.NAME
                layer.bindPopup(popupContent);              
            }
        }
    },
    "Non-MPO Cities over 20K Population":{
        path:"../finalGeoJson/SelectCities_PopOver20k.geojson",
        options:{
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("SelectCities_PopOver20k"),
                    fillOpacity:0.35,
                    weight:2,
                    opacity:0.85,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "NY Cities with Population over 20k <br/> City: " + feature.properties.NAME + "<br/> Population in 2010: " + comma(feature.properties.POP2010);
                layer.bindPopup(popupContent);              
            }
        }
    },
    "MPO Cities":{
        path:"../finalGeoJson/MPO_Cities.geojson",
        options:{
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("MPO_Cities"),
                    fillOpacity:0.2,
                    opacity:0.85,
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

                popupContent = "MPO Citites <br/>" + feature.properties.AREANAME + "<br/> Population in 2000: " + comma(feature.properties.POP2000);
                layer.bindPopup(popupContent);              
            }
        }
    },
        "MPO Boundaries":{
        path:"../finalGeoJson/MPO_Boundary.json",
        options:{
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("MPO_Boundary"),
                    fillOpacity:0.2,
                    weight:1.5,
                    opacity:0.85,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "MPO Boundaries <br/>" + feature.properties.MPO_NAME;
                layer.bindPopup(popupContent);              
            }
        }
    },
    "NYSDOT Regions and Counties":{
        path:"../finalGeoJson/NYSDOT_Regions.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYSDOT_Regions"),
                    weight:1.5,
                    fillOpacity:0.2,
                    opacity:0.85,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "NY All Regions <br/> Region: " + feature.properties.Region + "<br/> County Name: " + feature.properties.NAME
                layer.bindPopup(popupContent);              
            }
        }
    },
     "Canadian Provinces":{
        path:"../finalGeoJson/CAN_adm1.json",
        options:{
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("CAN_adm1"),
                    fillOpacity:0.40,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "Canadian Provinces <br/>" + feature.properties.NAME_1;
                layer.bindPopup(popupContent);              
            }
        }
    }


}
