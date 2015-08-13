
var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["Highways","Primary_Freight_Network"])
                 .range(colorbrewer.RdYlBu[3]);  
  

module.exports = {
    "Interstate":{
        path:"../finalGeoJson/Interstate.json",
        options:{
            featDetails:[],
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Interstate"),
                    weight:2,
                    opacity:0.55,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "NY Frieght Network <br/> Route: " + feature.properties.SIGN1 + "<br/> Number of Lanes: " + feature.properties.ThruLanes
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "Route: " + feature.properties.SIGN1 + "<br/> Number of Lanes: " + feature.properties.ThruLanes
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                          
            }
        }
    },
    "NTAD 2014 NYArea":{
        path:"../finalGeoJson/NTAD_2014_NYArea.json",
        options:{
            featDetails:[],
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NTAD_2014_NYArea"),
                    weight:2,
                    opacity:0.55,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "NTAD_2014<br/>Description: " + feature.properties.CONN_DES +"<br/>Number of lanes: " + feature.properties.ThruLanes;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "Description: " + feature.properties.CONN_DES +"<br/>Number of lanes: " + feature.properties.ThruLanes;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                
            }
        }
    }
}
