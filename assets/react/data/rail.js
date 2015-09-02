
var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["Class1Rail","ShortLineTrackRights"])
                 .range(colorbrewer.BrBG[4]),
                 
    comma = d3.format(",");  

module.exports = {
    "Class 1 Rail":{
        path:"../finalGeoJson/Railroad_Class1.json",
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

                popupContent = "<b>Class 1 Rail</b><br/><b>Owner: </b> " + feature.properties.OWNER_NAME +"<br/><b>Operator: </b> " + feature.properties.OPERATOR;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Owner: </b> " + feature.properties.OWNER_NAME +"<br/><b>Operator: </b> " + feature.properties.OPERATOR;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                    
            }
        }
    },
    "Class 2 Rail":{
        path:"../finalGeoJson/Railroad_Class2.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:'#15537a',
                    dashArray: '2,5',
                    opacity:1,
                    weight:2.5,

                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Class 2 Rail</b><br/><b>Owner: </b> " + feature.properties.OWNER_NAME +"<br/><b>Operator: </b> " + feature.properties.OPERATOR;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Owner: </b> " + feature.properties.OWNER_NAME +"<br/><b>Operator: </b> " + feature.properties.OPERATOR;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                    
            }
        }
    },
    "Class 3/Short Line Rail":{
        path:"../finalGeoJson/Railroad_Class3SL.json",
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

                popupContent = "<b>Class 3/Short Line Rail</b><br/><b>Owner: </b> " + feature.properties.OWNER_NAME +"<br/><b>Operator: </b> " + feature.properties.OPERATOR;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Owner: </b> " + feature.properties.OWNER_NAME +"<br/><b>Operator: </b> " + feature.properties.OPERATOR;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                    
            }
        }
    }
}