
var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["CAN_adm1","Western_Region"])
                 .range(colorbrewer.Paired[9]),

    corridorColorScale = d3.scale.ordinal()
                 .domain([0,15])
                 .range(colorbrewer.Paired[9]),

    trkTonsScale = d3.scale.threshold()
                 .domain([15000,30000,60000,120000])
                 .range(["green","#98FB98","yellow","orange","red"]),

    trkValueScale = d3.scale.threshold()
                 .domain([10000000,50000000,100000000,250000000])
                 .range(["green","#98FB98","yellow","orange","red"]),

    trkVolumeScale = d3.scale.threshold()
                 .domain([500,2500,5000,10000])
                 .range(["green","#98FB98","yellow","orange","red"]),

    counts2014Scale = d3.scale.threshold()
                 .domain([500,2500,5000,10000])
                 .range(["green","#98FB98","yellow","orange","red"]),

    trkParkingScale = d3.scale.threshold()
                 .domain([1,10,25,50,100])
                 .range(["black","green","#98FB98","yellow","orange","red"]),

    bridgeScale = d3.scale.threshold()
                 .domain([4,5,6])
                 .range(["green","#98FB98","yellow","red"]),

    pavementScale = d3.scale.ordinal()
                 .domain(["Poor","Fair","Good","No Score"])
                 .range(["red","orange","green","grey"]),

    comma = d3.format(",");

module.exports = {
    "Highway Analysis Corridors":{
        path:"../novUpdateJson/HighwayCorridors.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                if(feat){
                    return{
                        color:corridorColorScale(feat.properties.Corridor),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        color:colorScale("Highway Analysis Corridors"),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
                }

            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Highway Analysis Corridors</b></br> <b>Corridor:</b> " + feature.properties["Corridor"]
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Corridor:</b> " + feature.properties["Corridor"]

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }  
            }
        }
    },
    "Rail Analysis Corridors":{
        path:"../novUpdateJson/RailCorridors.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                if(feat){
                    return{
                        color:corridorColorScale(feat.properties.Corridor),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        color:colorScale("Rail Analysis Corridors"),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
                }

            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Rail Analysis Corridors</b></br> <b>Corridor:</b> " + feature.properties["Corridor"]
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Corridor:</b> " + feature.properties["Corridor"]

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }  
            }
        }
    },
    "Highway Tonnage, 2012 (TRANSEARCH)":{
        path:"../novUpdateJson/HighwayTrans2012.geojson",
        options:{
            featDetails:[],
            directional:{n:"N_TrkTons",s:"S_TrkTons",e:"E_TrkTons",w:"W_TrkTons"},
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat,direction){
                if(feat){
                    var colorValue;
                    colorValue = feat.properties[direction]

                    return{
                        color:trkTonsScale(colorValue),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        color:colorScale("Highway Tonnage, 2012 (TRANSEARCH)"),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Highway Tonnage, 2012 (TRANSEARCH)</b> <br/>"+ "<br/> <b>Route:</b> " + feature.properties.RTESIGN1 + "<br/><b>North Truck Tons:</b> " +  comma(feature.properties.N_TrkTons) + "<br/><b>South Truck Tons:</b> " +  comma(feature.properties.S_TrkTons) + "<br/><b>East Truck Tons:</b> " +  comma(feature.properties.E_TrkTons) +  "<br/><b>West Truck Tons:</b> " +  comma(feature.properties.W_TrkTons)
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Route:</b> " + feature.properties.RTESIGN1 + "<br/> <b>Truck Tonnage:</b> " + "<br/><b>North Truck Tons:</b> " +  comma(feature.properties.N_TrkTons) + "<br/><b>South Truck Tons:</b> " +  comma(feature.properties.S_TrkTons) + "<br/><b>East Truck Tons:</b> " +  comma(feature.properties.E_TrkTons) +  "<br/><b>West Truck tons:</b> " +  comma(feature.properties.W_TrkTons)

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }   
            }
        }
    }, 
    "Highway Tonnage, 2040 (TRANSEARCH)":{
        path:"../novUpdateJson/HighwayTrans2040.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            directional:{n:"N_40_TT",s:"S_40_TT",e:"E_40_TT",w:"W_40_TT"},
            visible:false,
            loaded:false,
            style:function(feat,direction){
                if(feat){
                    var colorValue;
                    colorValue = feat.properties[direction]

                    return{
                        color:trkTonsScale(colorValue),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        color:colorScale("Highway Tonnage, 2040 (TRANSEARCH)"),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Highway Tonnage, 2040 (TRANSEARCH)</b> <br/>"+ "<br/> <b>Route:</b> " + feature.properties.RTESIGN1 + "<br/><b>North Truck Tons:</b> " +  comma(feature.properties.N_40_TT) + "<br/><b>South Truck Tons:</b> " +  comma(feature.properties.S_40_TT) + "<br/><b>East Truck Tons:</b> " +  comma(feature.properties.E_40_TT) +  "<br/><b>West Truck Tons:</b> " +  comma(feature.properties.W_40_TT)
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Route:</b> " + feature.properties.RTESIGN1 + "<br/> <b>Truck Tonnage:</b> " + "<br/><b>North Truck Tons:</b> " +  comma(feature.properties.N_40_TT) + "<br/><b>South Truck Tons:</b> " +  comma(feature.properties.S_40_TT) + "<br/><b>East Truck Tons:</b> " +  comma(feature.properties.E_40_TT) +  "<br/><b>West Truck Tons:</b> " +  comma(feature.properties.W_40_TT)

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }  
            }
        }
    }, 
    "Highway Value, 2012 (TRANSEARCH)":{
        path:"../novUpdateJson/HighwayTrans2012.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            directional:{n:"N_TrkValue",s:"S_TrkValue",e:"E_TrkValue",w:"W_TrkValue"},
            visible:false,
            loaded:false,
            style:function(feat,direction){
                if(feat){
                    var colorValue;
                    colorValue = feat.properties[direction]

                    return{
                        color:trkValueScale(colorValue),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        color:colorScale("Highway Value, 2012 (TRANSEARCH)"),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Highway Value, 2012 (TRANSEARCH)</b> <br/>"+ "<br/> <b>Route:</b> " + feature.properties.RTESIGN1 + "<br/><b>North Truck Value: $</b> " +  comma(feature.properties.N_TrkValue) + "<br/><b>South Truck Value: $</b> " +  comma(feature.properties.S_TrkValue) + "<br/><b>East Truck Value: $</b> " +  comma(feature.properties.E_TrkValue) +  "<br/><b>West Truck Value: $</b> " +  comma(feature.properties.W_TrkValue)
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Route:</b> " + feature.properties.RTESIGN1 + "<br/> <b>Truck Value:</b> " + "<br/><b>North Truck Value: $</b> " +  comma(feature.properties.N_TrkValue) + "<br/><b>South Truck Value: $</b> " +  comma(feature.properties.S_TrkValue) + "<br/><b>East Truck Value: $</b> " +  comma(feature.properties.E_TrkValue) +  "<br/><b>West Truck Value: $</b> " +  comma(feature.properties.W_TrkValue)

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }      
            }
        }
    }, 
    "Highway Value, 2040 (TRANSEARCH)":{
        path:"../novUpdateJson/HighwayTrans2040.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            directional:{n:"N_40_TV",s:"S_40_TV",e:"E_40_TV",w:"W_40_TV"},
            visible:false,
            loaded:false,
            style:function(feat,direction){
                if(feat){
                    var colorValue;
                    colorValue = feat.properties[direction]

                    return{
                        color:trkValueScale(colorValue),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        color:colorScale("Highway Value, 2040 (TRANSEARCH)"),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Highway Value, 2040 (TRANSEARCH)</b> <br/>"+ "<br/> <b>Route:</b> " + feature.properties.RTESIGN1 + "<br/><b>North Truck Value: $</b> " +  comma(feature.properties.N_40_TV) + "<br/><b>South Truck Value: $</b> " +  comma(feature.properties.S_40_TV) + "<br/><b>East Truck Value: $</b> " +  comma(feature.properties.E_40_TV) +  "<br/><b>West Truck Value: $</b> " +  comma(feature.properties.W_40_TV)
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Route:</b> " + feature.properties.RTESIGN1 + "<br/> <b>Truck Value: $</b> " + "<br/><b>North Truck Value: $</b> " +  comma(feature.properties.N_40_TV) + "<br/><b>South Truck Value: $</b> " +  comma(feature.properties.S_40_TV) + "<br/><b>East Truck Value: $</b> " +  comma(feature.properties.E_40_TV) +  "<br/><b>West Truck Value:</b> " +  comma(feature.properties.W_40_TV)

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }  
            }
        }
    }, 
    "Highway Truck Volumes, 2012 (TRANSEARCH)":{
        path:"../novUpdateJson/HighwayTrans2012.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            directional:{n:"N_Trks",s:"S_Trks",e:"E_Trks",w:"W_Trks"},
            visible:false,
            loaded:false,
            style:function(feat,direction){
                if(feat){
                    var colorValue;
                    colorValue = feat.properties[direction]

                    return{
                        color:trkVolumeScale(colorValue),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        color:colorScale("Highway Truck Volumes, 2012 (TRANSEARCH)"),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Highway Truck Volumes, 2012 (TRANSEARCH)</b> <br/>"+ "<br/> <b>Route:</b> " + feature.properties.RTESIGN1 + "<br/><b>Noth Truck Volume: </b> " +  comma(feature.properties.N_Trks) + "<br/><b>South Truck Volume: </b> " +  comma(feature.properties.S_Trks) + "<br/><b>East Truck Volume: </b> " +  comma(feature.properties.E_Trks) +  "<br/><b>West Truck Volume: </b> " +  comma(feature.properties.W_Trks)
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Route:</b> " + feature.properties.RTESIGN1 + "<br/> <b>Truck Volume:</b> " + "<br/><b>Noth Truck Volume: </b> " +  comma(feature.properties.N_Trks) + "<br/><b>South Truck Volume: </b> " +  comma(feature.properties.S_Trks) + "<br/><b>East Truck Volume: </b> " +  comma(feature.properties.E_Trks) +  "<br/><b>West Truck Volume: </b> " +  comma(feature.properties.W_Trks)

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }   
            }
        }
    }, 
    "Highway Truck Volumes, 2040 (TRANSEARCH)":{
        path:"../novUpdateJson/HighwayTrans2040.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            directional:{n:"N_40_Tr",s:"S_40_Tr",e:"E_40_Tr",w:"W_40_Tr"},
            visible:false,
            loaded:false,
            style:function(feat,direction){
                if(feat){
                    var colorValue;
                    colorValue = feat.properties[direction]

                    return{
                        color:trkVolumeScale(colorValue),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        color:colorScale("Highway Truck Volumes, 2040 (TRANSEARCH)"),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>Highway Truck Volumes, 2040 (TRANSEARCH)</b> <br/>"+ "<br/> <b>Route:</b> " + feature.properties.RTESIGN1 + "<br/><b>North Truck Volume: </b> " +  comma(feature.properties.N_40_Tr) + "<br/><b>South Truck Volume: </b> " +  comma(feature.properties.S_40_Tr) + "<br/><b>East Truck Volume: </b> " +  comma(feature.properties.E_40_Tr) +  "<br/><b>West Truck Volume: </b> " +  comma(feature.properties.W_40_Tr)
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Route:</b> " + feature.properties.RTESIGN1 + "<br/> <b>Truck Volume:</b> " + "<br/><b>North Truck Volume: </b> " +  comma(feature.properties.N_40_Tr) + "<br/><b>South Truck Volume: </b> " +  comma(feature.properties.S_40_Tr) + "<br/><b>East Truck Volume: </b> " +  comma(feature.properties.E_40_Tr) +  "<br/><b>West Truck Volume: </b> " +  comma(feature.properties.W_40_Tr)

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }   
            }
        }
    }, 
    "Highway Average Vehicle Tonnage, 2011-2014 WIM (NYSDOT)":{
        path:"../novUpdateJson/WIMData.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Highway Average Vehicle Tonnage, 2011-2014 WIM (NYSDOT)"),
                    fillOpacity:0.55,
                    opacity:0.9,
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

                
                popupContent = "<b>Highway Average Vehicle Tonnage, 2011-2014 WIM (NYSDOT)</b> <br/>"+"<b>Description:</b> " + feature.properties.BEGINDESC + " " + feature.properties.ENDDESC + "<br/> <b>SUCW:</b> " + feature.properties.SUCW + "<br/> <b>MUCW:</b> " + feature.properties.MUCW
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Description:</b> " + feature.properties.BEGINDESC + " " + feature.properties.ENDDESC + "<b>SUCW:</b> " + feature.properties.SUCW + "<br/> <b>MUCW:</b> " + feature.properties.MUCW

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }  
            }
        }
    }, 
    "2014 Counts (NYSTA)":{
        path:"../novUpdateJson/NYSTACounts.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            directional:{n:"F14AADTT_NW",s:"F14AADTT_ES"},
            visible:false,
            loaded:false,
            style:function(feat,direction){
                if(feat){
                    var colorValue;
                    colorValue = feat.properties[direction]

                    return{
                        color:counts2014Scale(colorValue),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        color:colorScale("Highway Truck Volumes, 2040 (TRANSEARCH)"),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
                }
            },
            onEachFeature: function(feature,layer){
                var popupContent;

                popupContent = "<b>2014 Counts (NYSTA)</b> <br/>"+ "<b>Highway:</b> "+feature.properties.COMMON_NAM+"<br/> <b>North/West Truck Volumes:</b> " + comma(feature.properties.F14AADTT_NW) + "<br/><b>South/East Truck Volumes: </b> " +  comma(feature.properties.F14AADTT_ES)
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Highway:</b> "+feature.properties.COMMON_NAM+"<br/><b>North/West Truck Volumes:</b> " + comma(feature.properties.F14AADTT_NW) + "<br/><b>South/East Truck Volumes: </b> " +  comma(feature.properties.F14AADTT_ES)

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }   
            }
        }
    }, 
    "2015 Border Counts (Various Sources)":{
        path:"../novUpdateJson/BorderCounts2015.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("2015 Border Counts (Various Sources)"),
                    fillOpacity:0.55,
                    opacity:0.9,
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
                popupContent = "<b>2015 Border Counts (Various Sources)</b> <br/>"+"<b>Name:</b> " + feature.properties.CP_Name + "<br/> <b>FROM US:</b> " + feature.properties.FROM_US + "<br/> <b>TO_US:</b> " + feature.properties.TO_US
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<br/><b>Name:</b> " + feature.properties.CP_Name + "<b>From US:</b> " + feature.properties.FROM_US + "<br/> <b>TO US:</b> " + feature.properties.TO_US

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }  
            }
        }
    },  
    "Highway Truck Parking, (NYSDOT/Trucker’s Friend)":{
        path:"../novUpdateJson/TruckParking.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                if(feat){
                    return{
                        color:trkParkingScale(feat.properties.Truck_Spac),
                        fillOpacity:0.55,
                        opacity:0.9
                    }
                }
                else{
                    return{
                        color:colorScale("Highway Truck Parking, (NYSDOT/Trucker’s Friend)"),
                        fillOpacity:0.55,
                        opacity:0.9
                    }                    
                }
            },
            pointToLayer: function (d, latlng) {
                var options = {

                }
                var radius = (d.properties.Truck_Spac/10);

                radius = (radius < 1) ? 1 : radius
                var obj = L.circleMarker(latlng, {radius:radius});
                //obj.bindPopup(d.properties.PortName);
                return obj;
            },
            onEachFeature: function(feature,layer){
                var legendContent;
                var popupContent;                

                var restArea = (feature.properties["Rest_Area"] != " ") ? "<b>Rest Area:</b> " + feature.properties["Rest_Area"] + "</br>" : ""

                var legendContent;
                legendContent = restArea + "<b>Truck Space:</b> " + feature.properties.Truck_Spac
              

                popupContent = "<b>Highway Truck Parking, (NYSDOT/Trucker’s Friend)</b> <br/>"+restArea + "<b>Truck Space:</b> " + feature.properties.Truck_Spac

                layer.bindPopup(popupContent);  

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }
            }
        }
    }, 
    "Highway Bridge Data, 2014 (NYSDOT)":{
        path:"../novUpdateJson/Bridges.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                if(feat){
                    return{
                        color:bridgeScale(feat.properties.CONDITION_),
                        fillOpacity:0.4,
                        opacity:0.8
                    }
                }
                else{
                    return{
                        color:colorScale("Highway Bridge Data, 2014 (NYSDOT)"),
                        fillOpacity:0.55,
                        opacity:0.9
                    }                    
                }
            },
            pointToLayer: function (d, latlng) {
                if(d.properties.CONDITION_ == 0){
                    var myIcon = L.icon({
                        iconUrl: './images/triangle.png',
                        iconSize: [14, 14]
                    });
                    var obj = L.marker(latlng, {icon: myIcon});
                }
                else{
                    var obj = L.circleMarker(latlng, {radius:7});                    
                }

                return obj;
            },
            onEachFeature: function(feature,layer){
                var legendContent;
                var popupContent;                

                var carried = (feature.properties["CARRIED"] != " ") ? "<b>Carried:</b> " + feature.properties["CARRIED"] + "</br>" : ""

                var legendContent;
                legendContent = carried + "<b>Condition</b> " + feature.properties.CONDITION_

                popupContent = "<b>Highway Bridge Data, 2014 (NYSDOT)</b> <br/>"+carried + "<b>Condition</b> " + feature.properties.CONDITION_
                layer.bindPopup(popupContent);  

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }
            }
        }
    },                     
    "Highway Pavement Data, 2014 (NYSDOT)":{
        path:"../novUpdateJson/Pavements2014.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                if(feat){
                    var colorValue = feat.properties.Level14
                    if(colorValue == "U"){
                        colorValue = "No Score"        
                    }

                    return{
                        color:pavementScale(feat.properties.Level14),
                        fillOpacity:0.4,
                        opacity:0.8
                    }
                }
                else{
                    return{
                        color:colorScale("Highway Pavement Data, 2014 (NYSDOT)"),
                        fillOpacity:0.55,
                        opacity:0.9
                    }                    
                }
            },
            onEachFeature: function(feature,layer){
                var legendContent;
                var popupContent;                

                var desc = ""
                if(feature.properties.BEGIN_DESC != " " || feature.properties.END_DESCRI != " "){
                    desc = "<b>Description:</b> " + feature.properties.BEGIN_DESC + " " + feature.properties.END_DESCRI + "</br>"                    
                }


                var legendContent;
                legendContent = desc + "<b>Level 14</b> " + feature.properties.Level14

                popupContent = "<b>Highway Pavement Data, 2014 (NYSDOT)</b> <br/>"+desc + "<b>Level 14</b> " + feature.properties.Level14
                layer.bindPopup(popupContent);  

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }
            }
        }
    }, 
    "Seaport Tonnage, 2014 (USACE/Ports)":{
        path:"../novUpdateJson/Major_Ports.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Seaport Tonnage, 2014 (USACE/Ports)"),
                    fillOpacity:0.55,
                    opacity:0.9,
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



                var tonnage = ""
                if(feature.properties.F2014USACE){
                    tonnage =  "<br/><b>Tonnage:</b> " + comma(feature.properties.F2014USACE)                     
                }
                else{
                    tonnage = "<br/><b>Tonnage:</b> The PANYNJ terminals collectively comprise 123.3 million tons, but individual port numbers were not available."
                }
      
                popupContent = "<b>Seaport Tonnage, 2014 (USACE/Ports)</b> <br/>"+"<b>Name:</b> " + feature.properties.PORT_NAME + tonnage
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<br/><b>Name:</b> " + feature.properties.PORT_NAME + tonnage

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }  
            }
        }
    }, 
    "Airport Tonnage, 2015 (ACINA/PANYNJ)":{
        path:"../novUpdateJson/Major_Airport.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Airport Tonnage, 2015 (ACINA/PANYNJ)"),
                    fillOpacity:0.55,
                    opacity:0.9,
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
                var name = "<b>Name: </b>" + feature.properties.FULLNAME
                var tonnage =  "<br/><b>Tonnage:</b> " + comma(feature.properties.Tonnage)
                var source =  "<br/><b>Source:</b> " + feature.properties.Datasource
                var growth =  "<br/><b>Projected Growth to 2040:</b> " + feature.properties.PercGrowth2040 + "%"

                var popupContent = "<b>Airport Tonnage, 2015 (ACINA/PANYNJ)</b> <br/>" + name + tonnage + source + growth
                var legendContent = name + tonnage + source + growth
                layer.bindPopup(popupContent); 

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }
            }
        }
    }, 
    "Pipeline Tonnage/Value, 2012 & 2040 (FAF)":{
        path:"../novUpdateJson/PipelineZones.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("Pipeline Tonnage/Value, 2012 & 2040 (FAF)"),
                    fillOpacity:0.075,
                    opacity:0.85,
                }
            },
            onEachFeature: function(feature,layer){
                var name = "<b>Name: </b>" + feature.properties.LongName
                var tonnage2012 =  "<br/><b>2012 Tonnage:</b> " + comma(feature.properties.F2012Ton)
                var value2012 =  "<br/><b>2012 Value:</b> $" + comma(feature.properties.F2012Val)
                var tonnage2040 =  "<br/><b>2040 Tonnage:</b> " + comma(feature.properties.F2040Ton)
                var value2040 =  "<br/><b>2040 Value:</b> $" + comma(feature.properties.F2040Val)

                var popupContent = "<b>Pipeline Tonnage/Value, 2012 & 2040 (FAF)</b> <br/>" + name + tonnage2012 + value2012 + tonnage2040 + value2040
                var legendContent = name + tonnage2012 + value2012 + tonnage2040 + value2040
                layer.bindPopup(popupContent); 

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }
            }
        }
    }, 
}


