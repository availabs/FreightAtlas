
var d3 = require('d3');

var colorScale = d3.scale.category20();   

module.exports = {
	"Capital Region":{
        path:"../finalGeoJson/Capital_Region.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Capital_Region")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "NY Capital Region <br/>" + feature.properties.Region;
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "Central Region":{
        path:"../finalGeoJson/Central_Region.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Central_Region")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "NY Central Region <br/>" + feature.properties.Region;
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "City_Town":{
        path:"../finalGeoJson/City_Town.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("City_Town")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                            popupContent = "NY Cities with Population over 20k <br/> City: " + feature.properties.NAME + "<br/> Population in 2010: " + feature.properties.POP2010
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "County":{
        path:"../finalGeoJson/County.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("County")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                            popupContent = "NY All Regions <br/> County Name: " + feature.properties.NAME
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "MPO_Boundary":{
        path:"../finalGeoJson/MPO_Boundary.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("MPO_Boundary")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "MPO Boundaries <br/>" + feature.properties.MPO_NAME;
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "MPO_Cities":{
        path:"../finalGeoJson/MPO_Cities.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("MPO_Cities")
                }
            },pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});
                //obj.bindPopup(d.properties.PortName);
                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "MPO Citites <br/>" + feature.properties.AREANAME + "<br/> Population in 2000: " + feature.properties.POP2000
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "NYMTC_HudsonValleyRegion":{
        path:"../finalGeoJson/NYMTC_HudsonValleyRegion.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYMTC_HudsonValleyRegion")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "NY Hudson Valley Region <br/>"
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "NYSDOT_Regions and Counties":{
        path:"../finalGeoJson/NYSDOT_Regions.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYSDOT_Regions")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "NY All Regions <br/> Region: " + feature.properties.Region + "<br/> County Name: " + feature.properties.NAME
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "NYS SelectCities_PopOver20k":{
        path:"../finalGeoJson/SelectCities_PopOver20k.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("SelectCities_PopOver20k")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "NY Cities with Population over 20k <br/> City: " + feature.properties.NAME + "<br/> Population in 2010: " + feature.properties.POP2010
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "New York State":{
        path:"../finalGeoJson/State.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("State")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "New York State"
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "Western_Region":{
        path:"../finalGeoJson/Western_Region.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Western_Region")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "NY Hudson Valley Region <br/>"
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    }


}
