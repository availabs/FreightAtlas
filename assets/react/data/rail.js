
var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["Class1Rail","ShortLineTrackRights"])
                 .range(colorbrewer.PRGn[4]),
                 
    comma = d3.format(",");  

module.exports = {
"Class 1 Rail":{
        path:"../finalGeoJson/Class1Rail.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Class1Rail")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "NY Area Railroad<br/>Rail Owner: " + feature.properties.OWNER_NAME +"<br/>Rail Subdivision: " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);                
            }
        }
    },
    "Class 1 Track Rights":{
        path:"../finalGeoJson/Class1TrackRights.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Class1TrackRights")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "NY Area Railroad<br/>Rail Owner: " + feature.properties.OWNER_NAME +"<br/>Rail Subdivision: " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);                 
            }
        }
    },
    "NYS Short Line":{
        path:"../finalGeoJson/ShortLine.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("ShortLine")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "NY Area ShortLine<br/>Rail Owner: " + feature.properties.OWNER_NAME +"<br/>Rail Subdivision: " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);                  
            }
        }
    },
    "NYS Short Line Track Rights":{
        path:"../finalGeoJson/ShortLineTrackRights.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("ShortLineTrackRights")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "NY Area ShortLine Track Rights<br/>Rail Owner: " + feature.properties.OWNER_NAME +"<br/>Rail Subdivision: " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);              
            }
        }
    },


}
