
var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["Class1Rail","ShortLineTrackRights"])
                 .range(colorbrewer.BrBG[4]),
                 
    comma = d3.format(",");  

module.exports = {
"Class 1 Rail":{
        path:"../finalGeoJson/Class1Rail.json",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:'#754210',
                    dashArray: '2,5',
                    opacity:1,
                    weight:2.5,

                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Class 1 Rail</b><br/><b>Rail Owner:</b> " + feature.properties.OWNER_NAME +"<br/><b>Rail Subdivision:</b> " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Rail Owner:</b> " + feature.properties.OWNER_NAME +"<br/><b>Rail Subdivision:</b> " + feature.properties.Subdivisio;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                    
            }
        }
    },
    "Class 1 Track Rights":{
        path:"../finalGeoJson/Class1TrackRights.json",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:"#15537a",
                    dashArray: '2,5',
                    opacity:1,
                    weight:3.5,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Class 1 Track Rights</b><br/><b>Rail Owner:</b> " + feature.properties.OWNER_NAME +"<br/><b>Rail Subdivision:</b> " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Rail Owner:</b> " + feature.properties.OWNER_NAME +"<br/><b>Rail Subdivision:</b> " + feature.properties.Subdivisio;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                 
            }
        }
    },
    "NYS Short Line":{
        path:"../finalGeoJson/ShortLine.json",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:'#a02208',
                    dashArray: '2,5',
                    opacity:1,
                    weight:2.5,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>NYS Short Line</b><br/><b>Rail Owner:</b> " + feature.properties.OWNER_NAME +"<br/><b>Rail Subdivision:</b> " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Rail Owner:</b> " + feature.properties.OWNER_NAME +"<br/><b>Rail Subdivision:</b> " + feature.properties.Subdivisio;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                  
            }
        }
    },
    "NYS Short Line Track Rights":{
        path:"../finalGeoJson/ShortLineTrackRights.json",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:'#da8b0b',
                    dashArray: '2,5',
                    opacity:1,
                    weight:2.5,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>NYS Short Line Track Rights</b><br/><b>Rail Owner: </b> " + feature.properties.OWNER_NAME +"<br/><b>Rail Subdivision: </b> " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Rail Owner:<b/> " + feature.properties.OWNER_NAME +"<br/><b>Rail Subdivision: </b>" + feature.properties.Subdivisio;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }              
            }
        }
    }
}
