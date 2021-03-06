
var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["Border_Crossing_Port","NYS_Canal_System"])
                 .range(colorbrewer.RdYlBu[6]),
                 
    comma = d3.format(",");

module.exports = {
    "Border Crossings":{
        path:"../finalGeoJson/Border_Crossing_Port.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Border_Crossing_Port"),
                    fillOpacity:0.55,
                    opacity:0.9,
                }
            },pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});

                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                popupContent = "<b>Border Crossing</b> <br/><b>Name:</b> " + feature.properties.PortName;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = feature.properties.PortName;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                    
            }
        }
    },
    "Intermodal Facilities (Excluding Airports/Ports)":{
        path:"../finalGeoJson/Intermodal_Facility2.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Intermodal_Facility"),
                    fillOpacity:0.55,
                    opacity:0.9,
                }
            },pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});

                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Intermodal Facilities of NY</b> <br/><b>City:</b> " + feature.properties.CITY + "<br/> <b>Name:</b> " + feature.properties.NAME + "<br/> <b>Type of Facility:</b> " + feature.properties.MODE_TYPE;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>State:</b> " + feature.properties.STATE + "<br/> <b>City:</b> " + feature.properties.CITY + "<br/> <b>Name:</b> " + feature.properties.NAME + "<br/> <b>Type of Facility:</b> " + feature.properties.MODE_TYPE;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                                        
            }
        }
    },
    "Major Freight Airports":{
        path:"../novUpdateJson/Major_Airport.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:'#347fb2',
                    fillOpacity:0.55,
                    opacity:0.9,
                }
            },pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});
                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Major Airports</b> <br/><b>Name: </b>" + feature.properties.FULLNAME;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Name: </b>" + feature.properties.FULLNAME
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                                  
                  
            }
        }
    },
    "Pipelines":{
        path:"../finalGeoJson/Pipelines.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:'#006d2c',
                    opacity:0.65,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Pipelines <br/>Type: </b>" + feature.properties.Type +" <br/><b>Operator: </b>" + feature.properties.Operator;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = "<b>Type: </b>" + feature.properties.Type + " <br/><b>Operator: </b>" + feature.properties.Operator;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                                      
            }
        }
    },
    "Pipeline Terminals":{
        path:"../finalGeoJson/PipelineTerminals.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:'#66c2a4',
                    opacity:0.65,
                }
            },
            pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});

                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Pipeline Terminals <br/>Type: </b>" + feature.properties.Type +"<br/><b>Site Name: </b>"+feature.properties.Site_Name+" <br/><b>Operator: </b>" + feature.properties.Operator;
                layer.bindPopup(popupContent);
                console.log(feature)
                var legendContent;
                legendContent = "<b>Type: </b>" + feature.properties.Type +"<br/><b>Site Name: </b>"+feature.properties.Site_Name+" <br/><b>Operator: </b>" + feature.properties.Operator;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                                      
            }
        }
    }
}
