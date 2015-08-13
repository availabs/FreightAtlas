
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
            featDetails:[],
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
                var legendContent;
                
                legendContent = "New York State"

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }
            }
        }
    },
    "Cities and Towns":{
        path:"../finalGeoJson/City_Town.json",
        options:{
            featDetails:[],
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

                popupContent = "<b>NY Cities with Population over 20k</b> <br/> <b>City:</b> " + feature.properties.NAME + "<br/> <b>Population in 2010:</b> " + comma(feature.properties.POP2010);
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>City:</b> " + feature.properties.NAME + "<br/> <b>Population in 2010:</b> " + comma(feature.properties.POP2010)

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }          
            }
        }
    },
    "Counties":{
        path:"../finalGeoJson/County.geojson",
        options:{
            featDetails:[],
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
                console.log(feature)
                popupContent = "<b>Counties</b> <br/> <b>County Name:</b> " + feature.properties.NAME
                layer.bindPopup(popupContent);  

                var legendContent;
                legendContent = "<b>Name:</b> " + feature.properties.NAME
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }             
            }
        }
    },
    "Non-MPO Cities over 20K Population":{
        path:"../finalGeoJson/SelectCities_PopOver20k.geojson",
        options:{
            featDetails:[],
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

                popupContent = "<b>Non-MPO Cities over 20K Population</b> <br/> <b>City:</b> " + feature.properties.NAME + "<br/> <b>Population in 2010:</b> " + comma(feature.properties.POP2010);
                layer.bindPopup(popupContent);   

                var legendContent;
                legendContent = "<b>City:</b> " + feature.properties.NAME + "<br/> <b>Population in 2010:</b> " + comma(feature.properties.POP2010);
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }             
            }
        }
    },
    "MPO Cities":{
        path:"../finalGeoJson/MPO_Cities.geojson",
        options:{
            featDetails:[],
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

                popupContent = "<b>MPO Citites</b> <br/>" + feature.properties.AREANAME + "<br/> <b>Population in 2000:</b> " + comma(feature.properties.POP2000);
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = feature.properties.AREANAME + "<br/> <b>Population in 2000:</b> " + comma(feature.properties.POP2000);
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }            
            }
        }
    },
        "MPO Boundaries":{
        path:"../finalGeoJson/MPO_Boundary.json",
        options:{
            featDetails:[],
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
                console.log(feature)
                popupContent = "<b>MPO Boundaries</b> <br/> <b>Name:</b>" + feature.properties.MPO_NAME;
                layer.bindPopup(popupContent);     

                var legendContent;
                legendContent = "<b>Name: </b>" + feature.properties.MPO_NAME;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }           
            }
        }
    },
    "NYSDOT Regions and Counties":{
        path:"../finalGeoJson/NYSDOT_Regions.geojson",
        options:{
            featDetails:[],
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

                popupContent = "<b>NYSDOT Regions and Counties</b> <br/> <b>Region:</b> " + feature.properties.Region + "<br/> <b>County Name:</b> " + feature.properties.NAME
                layer.bindPopup(popupContent);      

                var legendContent;
                legendContent = "<b>Region:</b>" + feature.properties.Region + "<br/> <b>County Name:</b> " + feature.properties.NAME
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }          
            }
        }
    },
     "Canadian Provinces":{
        path:"../finalGeoJson/CAN_adm1.json",
        options:{
            featDetails:[],
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

                popupContent = "<b>Canadian Provinces</b> <br/>" + feature.properties.NAME_1;
                layer.bindPopup(popupContent);     

                var legendContent;
                legendContent = feature.properties.NAME_1;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }           
            }
        }
    }
}
