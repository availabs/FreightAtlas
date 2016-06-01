var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["CAN_adm1","Western_Region"])
                 .range(colorbrewer.Paired[9]),

    comma = d3.format(",");

module.exports = {
    "Major Ports":{
	    path:"../finalGeoJson/Major_Ports.geojson",
	    options:{
	        featDetails:[],
	        zoomOnLoad:false,
	        visible:false,
	        loaded:false,
	        style:function(feat){
	            return{
	                color:'#89caf5',
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

	            popupContent = "<b>Major Ports</b> <br/> <b>Port Name:</b> "+feature.properties.PORT_NAME;
	            layer.bindPopup(popupContent);

	            var legendContent;
	            legendContent = "<b>Port Name:</b> "+feature.properties.PORT_NAME;
	            if(this.featDetails.indexOf(legendContent) === -1){
	                this.featDetails.push(legendContent);                   
	            }                                       
	        }
    	}
	},
    "Marine Highways":{
        path:"../finalGeoJson/MarineHighways.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:"#347fb2",
                    opacity:0.65,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Marine Highways</b> <br/>" + feature.properties.Name;
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = feature.properties.Name;
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                                      
            }
        }
    },
    "NYS Canal System":{
        path:"../finalGeoJson/NYS_Canal_System.json",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:"#006d2c",
                    opacity:0.65,
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>NYS Canal System</b> <br/>" + feature.properties.Canal_Name +" Canal";
                layer.bindPopup(popupContent);

                var legendContent;
                legendContent = feature.properties.Canal_Name +" Canal";
                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }                                      
            }
        }
    },
}