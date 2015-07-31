
var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["Highways","Primary_Freight_Network"])
                 .range(colorbrewer.RdPu[9]);  
  

module.exports = {
    // "Highways":{
    //     path:"../finalGeoJson/Highways.json",
    //     options:{
    //         zoomOnLoad:true,
    //         visible:false,
    //         loaded:false,
    //         style:function(feat){
    //             return{
    //                 color:colorScale("Highways"),
    //                 weight:2,
    //             }
    //         },
    //         onEachFeature: function(feature,layer){

    //         }
    //     }
    // },
    "Interstate":{
        path:"../finalGeoJson/Interstate.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Interstate"),
                    weight:3.5,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                                popupContent = "NY Frieght Network <br/> Route: " + feature.properties.SIGN1 + "<br/> Number of Lanes: " + feature.properties.ThruLanes
                layer.bindPopup(popupContent);              
                  
            }
        }
    },
    "NTAD_2014_NYArea":{
        path:"../finalGeoJson/NTAD_2014_NYArea.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NTAD_2014_NYArea"),
                    weight:3.5,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "NTAD_2014<br/>Description: " + feature.properties.CONN_DES +"<br/>Number of lanes: " + feature.properties.ThruLanes;
                layer.bindPopup(popupContent);              
                  
            }
        }
    },    
    "NYS Primary_Freight_Network":{
        path:"../finalGeoJson/Primary_Freight_Network.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Primary_Freight_Network")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "NY Frieght Network <br/> Route: " + feature.properties.SIGN1
                layer.bindPopup(popupContent);              
                  
            }
        }
    }


}
