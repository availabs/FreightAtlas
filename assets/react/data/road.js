
var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["Highways","Primary_Freight_Network"])
                 .range(colorbrewer.BrBG[3]);  
  

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
                    weight:2.5,
                    opacity:0.65,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                var legendContent = "";
                if(feature.properties.SIGN1 != " "){
                    legendContent += "<b>Name:</b> " + feature.properties.SIGN1 + "<br/>";
                }
                if(feature.properties.CONN_DES != " "){
                    legendContent += "<b>Description:</b> " + feature.properties.CONN_DES + "<br/>";
                }
                if(feature.properties.ThruLanes != " "){
                    legendContent += "<b>Number of Lanes:</b> " + feature.properties.ThruLanes + "<br/>";                    
                }

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }

                popupContent = "<b>Interstate</b><br/>" + legendContent;
                layer.bindPopup(popupContent);                            
            }
        }
    },
    // "NTAD 2014 NYArea":{
    //     path:"../finalGeoJson/NTAD_2014_NYArea.json",
    //     options:{
    //         featDetails:[],
    //         zoomOnLoad:true,
    //         visible:false,
    //         loaded:false,
    //         style:function(feat){
    //             return{
    //                 color:colorScale("NTAD_2014_NYArea"),
    //                 weight:2,
    //                 opacity:0.55,
    //             }
    //         },
    //         onEachFeature: function(feature,layer){
    //             var popupContent;

    //             var legendContent = "";
    //             if(feature.properties.SIGN1 != " "){
    //                 legendContent += "<b>Name:</b> " + feature.properties.SIGN1 + "<br/>";
    //             }
    //             if(feature.properties.CONN_DES != " "){
    //                 legendContent += "<b>Description:</b> " + feature.properties.CONN_DES + "<br/>";
    //             }
    //             if(feature.properties.ThruLanes != " "){
    //                 legendContent += "<b>Number of Lanes:</b> " + feature.properties.ThruLanes + "<br/>";                    
    //             }

    //             if(this.featDetails.indexOf(legendContent) === -1){
    //                 this.featDetails.push(legendContent);                   
    //             }

    //             popupContent = "<b>NTAD 2014 NYArea</b><br/>" + legendContent;
    //             layer.bindPopup(popupContent);
    //         }
    //     }
    // }
}
