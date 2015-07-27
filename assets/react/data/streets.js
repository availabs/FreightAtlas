
var d3 = require('d3');

var colorScale = d3.scale.category20();   
//
module.exports = {
    "Border Crossing Port":{
        path:"../finalGeoJson/Border_Crossing_Port.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Border_Crossing_Port")
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
                //console.log(feature)
                popupContent = "NYS Major Border Crosssings <br/>" + feature.properties.CP_Name;
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "Border States":{
        path:"../finalGeoJson/Border_States.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Border_States")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                //console.log(feature)
                popupContent = "US States<br/>" + feature.properties.STATE_NAME
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "Canada":{
        // path:"../finalGeoJson/Canada.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("RaiCanada")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                //popupContent = "NY Area Railroad<br/>Rail Owner: " + feature.properties.OWNER_NAME +"<br/>Rail Subdivision: " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "CAN_adm1":{
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
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
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
    "Cities_PopOver20kAnno":{
        path:"../finalGeoJson/Cities_PopOver20kAnno.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Cities_PopOver20kAnno")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "NY Cities with Population over 20k <br/> City: " + feature.properties.TextString
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
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
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
    "HighwaysAnno":{
        path:"../finalGeoJson/HighwaysAnno.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("HighwaysAnno")
                }
            },
            onEachFeature: function(feature,layer){
 
            }
        }
    },
    "Highways":{
        path:"../finalGeoJson/Highways.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Highways")
                }
            },
            onEachFeature: function(feature,layer){

            }
        }
    },
    "Intermodal Facilities of NY":{
        path:"../finalGeoJson/Intermodal_Facility.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Intermodal_Facility")
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
                popupContent = "US Facilities <br/> State: " + feature.properties.STATE + "<br/> City: " + feature.properties.CITY + "<br/> Type of Facility: " + feature.properties.MODE_TYPE
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "InterstateAnno2":{
        path:"../finalGeoJson/InterstateAnno2.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("InterstateAnno2")
                }
            },
            onEachFeature: function(feature,layer){

            }
        }
    },
    "InterstateAnno3":{
        path:"../finalGeoJson/InterstateAnno3.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("InterstateAnno3")
                }
            },
            onEachFeature: function(feature,layer){
 
            }
        }
    },
    "InterstateAnno4":{
        path:"../finalGeoJson/InterstateAnno4.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("InterstateAnno4")
                }
            },
            onEachFeature: function(feature,layer){
  
            }
        }
    },
    "InterstateAnno":{
        path:"../finalGeoJson/InterstateAnno.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("InterstateAnno")
                }
            },
            onEachFeature: function(feature,layer){
 
            }
        }
    },
    "Interstate":{
        path:"../finalGeoJson/Interstate.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Interstate")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                                popupContent = "NY Frieght Network <br/> Route: " + feature.properties.SIGN1 + "<br/> Number of Lanes: " + feature.properties.ThruLanes
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "Major_Airport":{
        path:"../finalGeoJson/Major_Airport.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Major_Airport")
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
                                popupContent = "Export Output <br/>" + feature.properties.FULLNAME + "<br/> Number of Passengers: " + feature.properties.Passengers
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "Major_Ports":{
        path:"../finalGeoJson/Major_Ports.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Major_Ports")
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
                popupContent = "NY Major Ports <br/> Port Name :"+feature.properties.PORT_NAME+"<br> Imports: " + feature.properties.IMPORTS +"<br/> Exports: "+ feature.properties.EXPORTS
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
    "MPO_Cities_Anno":{
        path:"../finalGeoJson/MPO_Cities_Anno.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("MPO_Cities_Anno")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "MPO Citites <br/>" + feature.properties.TextString;
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
    "MPO_Cities_Resize":{
        path:"../finalGeoJson/MPO_Cities_Resize.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("MPO_Cities_Resize")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "MPO Citites <br/>" + feature.properties.TextString;
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "nhd24kwb_a_ny":{
        //path:"../finalGeoJson/nhd24kwb_a_ny.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Ranhd24kwb_a_ny")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                //popupContent = "NY Area Railroad<br/>Rail Owner: " + feature.properties.OWNER_NAME +"<br/>Rail Subdivision: " + feature.properties.Subdivisio;
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "NTAD_2014_NYArea":{
        path:"../finalGeoJson/NTAD_2014_NYArea.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NTAD_2014_NYArea")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "NTAD_2014<br/>Description: " + feature.properties.CONN_DES +"<br/>Number of lanes: " + feature.properties.ThruLanes;
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
    "NYS_Canal_System":{
        path:"../finalGeoJson/NYS_Canal_System.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("NYS_Canal_System")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "NYS Canal System <br/>" + feature.properties.Canal_Name +" Canal";
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
    "NYS Pop20k_Cities_Resize":{
        path:"../finalGeoJson/Pop20k_Cities_Resize.geojson",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Pop20k_Cities_Resize")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "NY Cities with Population over 20k <br/> City: " + feature.properties.TextString
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "NYS Primary_Freight_Network":{
        path:"../finalGeoJson/Primary_Freight_Network.json",
        options:{
            zoomOnLoad:true,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Primary_Freight_Network")
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;
                // console.log(feature)
                popupContent = "NY Frieght Network <br/> Route: " + feature.properties.SIGN1
                layer.bindPopup(popupContent);              
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
            }
        }
    },
    "NYS SelectCities_PopOver20k":{
        path:"../SelectCities_PopOver20k.geojson",
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
                layer.on({
                    mouseover:function(e){layer.openPopup()},
                    mouseout:function(e){layer.closePopup()}
                })  
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