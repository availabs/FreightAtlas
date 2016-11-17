
var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["CAN_adm1","Western_Region"])
                 .range(colorbrewer.Paired[9]),

    corridorColorScale = d3.scale.ordinal()
                 .domain([0,15])
                 .range(colorbrewer.Paired[9]),

    trkTonsScale = d3.scale.linear()
                 .domain([0,120000])
                 .range(["blue","red"]),

    trkValueScale = d3.scale.linear()
                 .domain([0,250000000])
                 .range(["blue","red"]),

    trkVolumeScale = d3.scale.linear()
                 .domain([0,10000])
                 .range(["blue","red"]),

    counts2014Scale = d3.scale.linear()
                 .domain([500,10000])
                 .range(["blue","red"]),

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

                popupContent = "<b>Highway Tonnage, 2012 (TRANSEARCH)</b> <br/>"+ "<br/> <b>Route:</b> " + feature.properties.RTESIGN1 + "<br/><b>N_TrkTons:</b> " +  comma(feature.properties.N_TrkTons) + "<br/><b>S_TrkTons:</b> " +  comma(feature.properties.S_TrkTons) + "<br/><b>E_TrkTons:</b> " +  comma(feature.properties.E_TrkTons) +  "<br/><b>W_TrkTons:</b> " +  comma(feature.properties.W_TrkTons)
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Route:</b> " + feature.properties.RTESIGN1 + "<br/> <b>Truck Tonnage:</b> " + "<br/><b>N_TrkTons:</b> " +  comma(feature.properties.N_TrkTons) + "<br/><b>S_TrkTons:</b> " +  comma(feature.properties.S_TrkTons) + "<br/><b>E_TrkTons:</b> " +  comma(feature.properties.E_TrkTons) +  "<br/><b>W_TrkTons:</b> " +  comma(feature.properties.W_TrkTons)

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

                popupContent = "<b>Highway Tonnage, 2040 (TRANSEARCH)</b> <br/>"+ "<br/> <b>Route:</b> " + feature.properties.RTESIGN1 + "<br/><b>N_40_TT:</b> " +  comma(feature.properties.N_40_TT) + "<br/><b>S_40_TT:</b> " +  comma(feature.properties.S_40_TT) + "<br/><b>E_40_TT:</b> " +  comma(feature.properties.E_40_TT) +  "<br/><b>W_40_TT:</b> " +  comma(feature.properties.W_40_TT)
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Route:</b> " + feature.properties.RTESIGN1 + "<br/> <b>Truck Tonnage:</b> " + "<br/><b>N_40_TT:</b> " +  comma(feature.properties.N_40_TT) + "<br/><b>S_40_TT:</b> " +  comma(feature.properties.S_40_TT) + "<br/><b>E_40_TT:</b> " +  comma(feature.properties.E_40_TT) +  "<br/><b>W_40_TT:</b> " +  comma(feature.properties.W_40_TT)

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

                popupContent = "<b>Highway Value, 2012 (TRANSEARCH)</b> <br/>"+ "<br/> <b>Route:</b> " + feature.properties.RTESIGN1 + "<br/><b>N_TrkValue: $</b> " +  comma(feature.properties.N_TrkValue) + "<br/><b>S_TrkValue: $</b> " +  comma(feature.properties.S_TrkValue) + "<br/><b>E_TrkValue: $</b> " +  comma(feature.properties.E_TrkValue) +  "<br/><b>W_TrkValue: $</b> " +  comma(feature.properties.W_TrkValue)
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Route:</b> " + feature.properties.RTESIGN1 + "<br/> <b>Truck Tonnage:</b> " + "<br/><b>N_TrkValue: $</b> " +  comma(feature.properties.N_TrkValue) + "<br/><b>S_TrkValue: $</b> " +  comma(feature.properties.S_TrkValue) + "<br/><b>E_TrkValue: $</b> " +  comma(feature.properties.E_TrkValue) +  "<br/><b>W_TrkValue: $</b> " +  comma(feature.properties.W_TrkValue)

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

                popupContent = "<b>Highway Value, 2040 (TRANSEARCH)</b> <br/>"+ "<br/> <b>Route:</b> " + feature.properties.RTESIGN1 + "<br/><b>N_40_TV:</b> " +  comma(feature.properties.N_40_TV) + "<br/><b>S_40_TV:</b> " +  comma(feature.properties.S_40_TV) + "<br/><b>E_40_TV:</b> " +  comma(feature.properties.E_40_TV) +  "<br/><b>W_40_TV:</b> " +  comma(feature.properties.W_40_TV)
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Route:</b> " + feature.properties.RTESIGN1 + "<br/> <b>Truck Tonnage:</b> " + "<br/><b>N_40_TV:</b> " +  comma(feature.properties.N_40_TV) + "<br/><b>S_40_TV:</b> " +  comma(feature.properties.S_40_TV) + "<br/><b>E_40_TV:</b> " +  comma(feature.properties.E_40_TV) +  "<br/><b>W_40_TV:</b> " +  comma(feature.properties.W_40_TV)

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

                popupContent = "<b>Highway Truck Volumes, 2012 (TRANSEARCH)</b> <br/>"+ "<br/> <b>Route:</b> " + feature.properties.RTESIGN1 + "<br/><b>N_Trks: $</b> " +  comma(feature.properties.N_Trks) + "<br/><b>S_Trks: $</b> " +  comma(feature.properties.S_Trks) + "<br/><b>E_Trks: $</b> " +  comma(feature.properties.E_Trks) +  "<br/><b>W_Trks: $</b> " +  comma(feature.properties.W_Trks)
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Route:</b> " + feature.properties.RTESIGN1 + "<br/> <b>Truck Volume:</b> " + "<br/><b>N_Trks: $</b> " +  comma(feature.properties.N_Trks) + "<br/><b>S_Trks: $</b> " +  comma(feature.properties.S_Trks) + "<br/><b>E_Trks: $</b> " +  comma(feature.properties.E_Trks) +  "<br/><b>W_Trks: $</b> " +  comma(feature.properties.W_Trks)

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

                popupContent = "<b>Highway Truck Volumes, 2040 (TRANSEARCH)</b> <br/>"+ "<br/> <b>Route:</b> " + feature.properties.RTESIGN1 + "<br/><b>N_Tr: $</b> " +  comma(feature.properties.N_Tr) + "<br/><b>S_Tr: $</b> " +  comma(feature.properties.S_Tr) + "<br/><b>E_Tr: $</b> " +  comma(feature.properties.E_Tr) +  "<br/><b>W_Tr: $</b> " +  comma(feature.properties.W_Tr)
                layer.bindPopup(popupContent);    

                var legendContent;
                legendContent = "<b>Route:</b> " + feature.properties.RTESIGN1 + "<br/> <b>Truck Volume:</b> " + "<br/><b>N_Tr: $</b> " +  comma(feature.properties.N_Tr) + "<br/><b>S_Tr: $</b> " +  comma(feature.properties.S_Tr) + "<br/><b>E_Tr: $</b> " +  comma(feature.properties.E_Tr) +  "<br/><b>W_Tr: $</b> " +  comma(feature.properties.W_Tr)

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
                return{
                    color:colorScale("Highway Truck Parking, (NYSDOT/Trucker’s Friend)"),
                    fillOpacity:0.075,
                    opacity:0.85,
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
                var legendContent;
                
                legendContent = "New York State"

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
                return{
                    color:colorScale("Highway Bridge Data, 2014 (NYSDOT)"),
                    fillOpacity:0.075,
                    opacity:0.85,
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
                var legendContent;
                
                legendContent = "New York State"

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
                return{
                    color:colorScale("Highway Pavement Data, 2014 (NYSDOT)"),
                    fillOpacity:0.075,
                    opacity:0.85,
                }
            },
            onEachFeature: function(feature,layer){
                var legendContent;
                
                legendContent = "New York State"

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
                    fillOpacity:0.075,
                    opacity:0.85,
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
                var legendContent;
                
                legendContent = "New York State"

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
                    fillOpacity:0.075,
                    opacity:0.85,
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
                var legendContent;
                
                legendContent = "New York State"

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
                var legendContent;
                
                legendContent = "New York State"

                if(this.featDetails.indexOf(legendContent) === -1){
                    this.featDetails.push(legendContent);                   
                }
            }
        }
    }, 
}


