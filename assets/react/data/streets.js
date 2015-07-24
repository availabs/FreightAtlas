
var d3 = require('d3');

var colorScale = d3.scale.category20();   

module.exports = {
    "NY Area Railroad":{
        path:"../finalGeoJson/Railroad.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Railroad")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "NY Area Railroad<br/>Rail Owner: " + feature.properties.OWNER_NAME +"<br/>Rail Subdivision: " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "NY Area Railroad (State Clip)":{
        path:"../finalGeoJson/AllRail_StateClip.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("AllRail_StateClip")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "NY Area Railroad<br/>Rail Owner: " + feature.properties.OWNER_NAME +"<br/>Rail Subdivision: " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })              
            }
        }
    },
    "NYS Canal System":{
        path:"../finalGeoJson/nys_canal_system.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("nys_canal_system")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "NYS Canal System <br/>" + feature.properties.Canal_Name +" Canal";
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){e.layer.closePopup()}
                })  
            }
        }
    },
    "NY Major Border Crossings":{
        path:"../finalGeoJson/BorderCrossingsMajor.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("BorderCrossingsMajor")
                }
            },
            pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});
                //obj.bindPopup(d.properties.PortName);
                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                console.log(feature)
                popupContent = "NYS Major Border Crosssings <br/>" + feature.properties.CP_Name;
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })            
            }
        }
    },
    "Canadian Provinces":{
        path:"../finalGeoJson/CAN_adm1.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("CAN_adm1")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "Canadian Provinces <br/>" + feature.properties.NAME_1;
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){e.layer.closePopup()}
                })
            }
        }
    },
    "Export Output":{
        path:"../finalGeoJson/Export_Output.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Export_Output")
                }
            },
            pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});
                //obj.bindPopup(d.properties.PortName);
                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "Export Output <br/>" + feature.properties.FULLNAME;
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })
            }
        }
    },
    "MPO Boundaries":{
        path:"../finalGeoJson/MPOBoundaries.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("MPOBoundaries")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "MPO Boundaries <br/>" + feature.properties.MPO_NAME;
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })
            }
        }
    },
    "MPO Cities":{
        path:"../finalGeoJson/MPO_Cities.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("MPO_Cities")
                }
            },
            pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});
                //obj.bindPopup(d.properties.PortName);
                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "MPO Citites <br/>" + feature.properties.AREANAME;
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })
            }
        }
    },
    "NTAD 2014 NYarea":{
        path:"../finalGeoJson/NTAD_2014_NYarea.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NTAD_2014_NYarea")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "NTAD 2014 NY area";
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })
            }
        }
    },
    "NY Capital Region":{
        path:"../finalGeoJson/NYSDOT_Capital_Region_Dissolve.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYSDOT_Capital_Region_Dissolve")
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
    "NY Central Region":{
        path:"../finalGeoJson/NYSDOT_Central_Region_Dissolve.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYSDOT_Central_Region_Dissolve")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "NY Central Region <br/>" + feature.properties.Region;
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){e.layer.closePopup()}
                })
            }
        }
    },
    "NY Metro Region":{
        path:"../finalGeoJson/NYSDOT_NYMTC_Region_Dissolve.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYSDOT_NYMTC_Region_Dissolve")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "NY Metro Region <br/>" + feature.properties.Region;
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){e.layer.closePopup()}
                })
            }
        }
    },
    "NY Western Region":{
        path:"../finalGeoJson/NYSDOT_Regions_Dissolve.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYSDOT_Regions_Dissolve")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "NY Western Region <br/>" + feature.properties.Region;
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })
            }
        }
    },
    "NY All Regions With County Lines":{
        path:"../finalGeoJson/../finalGeoJson/NYSDOT_Regions.geojson",
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
                //console.log(feature)
                popupContent = "NY All Regions <br/> Region: " + feature.properties.Region + "<br/> County Name: " + feature.properties.NAME
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){e.layer.closePopup()}
                })
            }
        }
    },
    "NY Freight Network":{
        path:"../finalGeoJson/NYSDOT_FreightNetwork_Draft.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYSDOT_FreightNetwork_Draft")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "NY Frieght Network <br/> Route: " + feature.properties.SIGN1
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })
            }
        }
    },
    "NY Major Ports":{
        path:"../finalGeoJson/NY_MajorPorts.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NY_MajorPorts")
                }
            },
            pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});
                //obj.bindPopup(d.properties.PortName);
                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "NY Major Ports <br/> Port Name :"+feature.properties.PORT_NAME+"<br> Imports: " + feature.properties.IMPORTS +"<br/> Exports: "+ feature.properties.EXPORTS
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })
            }
        }
    },
    "US Counties":{
        path:"../finalGeoJson/cb_2013_us_county_500k.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("cb_2013_us_county_500k")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "US Counties<br/> State FIPS: " + feature.properties.STATEFP + "<br/> County Name: " + feature.properties.NAME
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){e.layer.closePopup()}
                })
            }
        }
    },
    "US Cities":{
        path:"../finalGeoJson/cities.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("cities")
                }
            },
            pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});
                //obj.bindPopup(d.properties.PortName);
                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "US Cities <br/> State: " + feature.properties.ST + "<br/> City: " + feature.properties.AREANAME
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })
            }
        }
    },
    "NY Cities with Population Over 20k":{
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
            pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});
                //obj.bindPopup(d.properties.PortName);
                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "NY Cities with Population over 20k <br/> City: " + feature.properties.NAME + "<br/> Population in 2010: " + feature.properties.POP2010
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })
            }
        }
    },
    "Facilities":{
        path:"../finalGeoJson/facility.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("facility")
                }
            },
            pointToLayer: function (d, latlng) {
                var options = {

                }
                var obj = L.circleMarker(latlng, {});
                //obj.bindPopup(d.properties.PortName);
                return obj;
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "US Facilities <br/> State: " + feature.properties.STATE + "<br/> City: " + feature.properties.CITY + "<br/> Type of Facility: " + feature.properties.MODE_TYPE
                layer.bindPopup(popupContent);
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })
            }
        }
    }

}