
var d3 = require('d3');

var colorScale = d3.scale.category20();   

module.exports = {
"Class1Rail":{
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
                // console.log(feature)
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
                // console.log(feature)
                popupContent = "NY Area Railroad<br/>Rail Owner: " + feature.properties.OWNER_NAME +"<br/>Rail Subdivision: " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);              
                  
            }
        }
    },
    "NYS ShortLine":{
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
                // console.log(feature)
                popupContent = "NY Area ShortLine<br/>Rail Owner: " + feature.properties.OWNER_NAME +"<br/>Rail Subdivision: " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);              
                  
            }
        }
    },
    "NYS ShortLineTrackRights":{
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
                // console.log(feature)
               popupContent = "NY Area ShortLine Track Rights<br/>Rail Owner: " + feature.properties.OWNER_NAME +"<br/>Rail Subdivision: " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);              
                  
            }
        }
    },


}
