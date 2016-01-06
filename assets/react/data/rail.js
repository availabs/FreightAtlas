
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
                    opacity:1,
                    weight:2.5,

                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Class 1 Rail</b><br/><b>Owner: </b> " + feature.properties.OWNER +"<br/><b>Operator: </b> " + feature.properties.OPERATOR + "<br/><b>Use: </b> " + feature.properties.USE + "<br/><b>Weight Limit (in 1000s): </b> " + feature.properties.WEIGHT_LIMIT + "<br/><b>Clearance: </b> " + feature.properties.CLEARANCE;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Owner: </b> " + feature.properties.OWNER +"<br/><b>Operator: </b> " + feature.properties.OPERATOR + "<br/><b>Use: </b> " + feature.properties.USE + "<br/><b>Weight Limit (in 1000s): </b> " + feature.properties.WEIGHT_LIMIT + "<br/><b>Clearance: </b> " + feature.properties.CLEARANCE;
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
                    opacity:1,
                    weight:2.5,

                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;


                popupContent = "<b>Class 2 Rail</b><br/><b>Owner: </b> " + feature.properties.OWNER +"<br/><b>Operator: </b> " + feature.properties.OPERATOR + "<br/><b>Use: </b> " + feature.properties.USE + "<br/><b>Weight Limit (in 1000s): </b> " + feature.properties.WEIGHT_LIMIT + "<br/><b>Clearance: </b> " + feature.properties.CLEARANCE;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Owner: </b> " + feature.properties.OWNER +"<br/><b>Operator: </b> " + feature.properties.OPERATOR + "<br/><b>Use: </b> " + feature.properties.USE + "<br/><b>Weight Limit (in 1000s): </b> " + feature.properties.WEIGHT_LIMIT + "<br/><b>Clearance: </b> " + feature.properties.CLEARANCE;
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
                    opacity:1,
                    weight:2.5,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Class 3/Shortline Rail</b><br/><b>Owner: </b> " + feature.properties.OWNER +"<br/><b>Operator: </b> " + feature.properties.OPERATOR + "<br/><b>Use: </b> " + feature.properties.USE + "<br/><b>Weight Limit (in 1000s): </b> " + feature.properties.WEIGHT_LIMIT + "<br/><b>Clearance: </b> " + feature.properties.CLEARANCE;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Owner: </b> " + feature.properties.OWNER +"<br/><b>Operator: </b> " + feature.properties.OPERATOR + "<br/><b>Use: </b> " + feature.properties.USE + "<br/><b>Weight Limit (in 1000s): </b> " + feature.properties.WEIGHT_LIMIT + "<br/><b>Clearance: </b> " + feature.properties.CLEARANCE;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                    
            }
        }
    },
    "Intercity Passenger/Commuter/Shared Line":{
        path:"../finalGeoJson/CommuterRail.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:'#a02208',
                    opacity:1,
                    weight:2.5,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Intercity Passenger/Commuter/Shared Line</b><br/><b>Owner: </b> " + feature.properties.OWNER +"<br/><b>Operator: </b> " + feature.properties.OPERATOR + "<br/><b>Use: </b> " + feature.properties.USE + "<br/><b>Weight Limit (in 1000s): </b> " + feature.properties.WEIGHT_LIMIT + "<br/><b>Clearance: </b> " + feature.properties.CLEARANCE;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Owner: </b> " + feature.properties.OWNER +"<br/><b>Operator: </b> " + feature.properties.OPERATOR + "<br/><b>Use: </b> " + feature.properties.USE + "<br/><b>Weight Limit (in 1000s): </b> " + feature.properties.WEIGHT_LIMIT + "<br/><b>Clearance: </b> " + feature.properties.CLEARANCE;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                    
            }
        }
    },
    "Terminal Rail":{
        path:"../finalGeoJson/Terminals.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:'#0d280b',
                    opacity:1,
                    weight:2.5,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Terminal Rail</b><br/><b>Owner: </b> " + feature.properties.OWNER +"<br/><b>Operator: </b> " + feature.properties.OPERATOR + "<br/><b>Use: </b> " + feature.properties.USE + "<br/><b>Weight Limit (in 1000s): </b> " + feature.properties.WEIGHT_LIMIT + "<br/><b>Clearance: </b> " + feature.properties.CLEARANCE;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Owner: </b> " + feature.properties.OWNER +"<br/><b>Operator: </b> " + feature.properties.OPERATOR + "<br/><b>Use: </b> " + feature.properties.USE + "<br/><b>Weight Limit (in 1000s): </b> " + feature.properties.WEIGHT_LIMIT + "<br/><b>Clearance: </b> " + feature.properties.CLEARANCE;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                    
            }
        }
    }
}