
var d3 = require('d3'),
    colorbrewer = require('colorbrewer');

var colorScale = d3.scale.ordinal()
                 .domain(["CAN_adm1","Western_Region"])
                 .range(colorbrewer.Paired[9]),

    corridorColorScale = d3.scale.ordinal()
                 .domain([0,15])
                 .range(colorbrewer.Paired[9]),

    trkTonsScale = d3.scale.ordinal()
                 .domain([15000,30000,60000,12000])
                 .range(["green","#2ca25f","yellow","orange","red"]),

    trkValueScale = d3.scale.ordinal()
                 .domain([10000000,50000000,100000000,250000000])
                 .range(["green","#2ca25f","yellow","orange","red"]),

    trkVolumeScale = d3.scale.ordinal()
                 .domain([500,2500,5000,10000])
                 .range(["green","#2ca25f","yellow","orange","red"]),

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
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
                }

            },
            onEachFeature: function(feature,layer){
                var legendContent;
                
                legendContent = "New York State"
                var popupContent = "<b>Properies</b></br>"

                    popupContent += "</br> Corridor: " + feature.properties["Corridor"]

                layer.bindPopup(popupContent);
                if(this.featDetails.indexOf(popupContent) === -1){
                    this.featDetails.push(popupContent);                   
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
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
                }

            },
            onEachFeature: function(feature,layer){
                var legendContent;
                
                legendContent = "New York State"
                var popupContent = "<b>Properies</b></br>"

                    popupContent += "</br> Corridor: " + feature.properties["Corridor"]

                layer.bindPopup(popupContent);
                if(this.featDetails.indexOf(popupContent) === -1){
                    this.featDetails.push(popupContent);                   
                }
            }
        }
    },
    "Highway Tonnage, 2012 (TRANSEARCH)":{
        path:"../novUpdateJson/HighwayTrans2012.geojson",
        subLevels:["ns","ew"],
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                if(feat){
                    return{
                        color:trkTonsScale(feat.properties.TrkTons),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
                }

            },
            onEachFeature: function(feature,layer){
                var legendContent;
                
                legendContent = "New York State"

                var popupContent;

                popupContent = "<b>Properies</b></br>"
                Object.keys(feature.properties).forEach(element => {
                    popupContent += "</br>" + element + ": " + feature.properties[element]
                })
                layer.bindPopup(popupContent);
                
                if(this.featDetails.indexOf(popupContent) === -1){
                    this.featDetails.push(popupContent);                   
                }
            }
        }
    }, 
    "Highway Tonnage, 2040 (TRANSEARCH)":{
        path:"../novUpdateJson/HighwayTrans2040.geojson",
        subLevels:["ns","ew"],
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                if(feat){
                    return{
                        color:trkTonsScale(feat.properties.TrkTons),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
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
    "Highway Value, 2012 (TRANSEARCH)":{
        path:"../novUpdateJson/HighwayTrans2012.geojson",
        subLevels:["ns","ew"],
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                if(feat){
                    return{
                        color:trkValueScale(feat.properties.TruckValue),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
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
    "Highway Value, 2040 (TRANSEARCH)":{
        path:"../novUpdateJson/HighwayTrans2040.geojson",
        subLevels:["ns","ew"],
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                if(feat){
                    return{
                        color:trkValueScale(feat.properties.TruckValue),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
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
    "Highway Truck Volumes, 2012 (TRANSEARCH)":{
        path:"../novUpdateJson/HighwayTrans2012.geojson",
        subLevels:["ns","ew"],
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                if(feat){
                    return{
                        color:trkVolumeScale(feat.properties.Trucks),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
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
    "Highway Truck Volumes, 2040 (TRANSEARCH)":{
        path:"../novUpdateJson/HighwayTrans2040.geojson",
        subLevels:["ns","ew"],
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                if(feat){
                    return{
                        color:trkVolumeScale(feat.properties.Trucks),
                        fillOpacity:0.075,
                        opacity:0.85,
                    }
                }
                else{
                    return{
                        fillOpacity:0.075,
                        opacity:0.85,
                    }                    
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
    "Highway Average Vehicle Tonnage, 2011-2014 WIM (NYSDOT)":{
        path:"../novUpdateJson/WIMData.geojson",
        subLevels:["SUCW","MUCW"],
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("State"),
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
                var popupContent = "<b>Properies</b></br>"
                Object.keys(feature.properties).forEach(element => {
                    popupContent += "</br>" + element + ": " + feature.properties[element]
                })
                layer.bindPopup(popupContent);
                if(this.featDetails.indexOf(popupContent) === -1){
                    this.featDetails.push(popupContent);                   
                }
            }
        }
    }, 
    "2014 Counts (NYSTA)":{
        path:"../novUpdateJson/NYSTACounts.geojson",
        subLevels:["F14AADTT_ES","F14AADTT_NW"],
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("State"),
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
    "2015 Border Counts (Various Sources)":{
        path:"../novUpdateJson/BorderCounts2015.geojson",
        subLevels:["TO_US","FROM_US"],
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("State"),
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
    "Highway Truck Parking, (NYSDOT/Trucker’s Friend)":{
        path:"../novUpdateJson/TruckParking.geojson",
        options:{
            featDetails:[],
            zoomOnLoad:false,
            visible:false,
            loaded:false,
            style:function(feat){
                return{
                    color:colorScale("State"),
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
                    color:colorScale("State"),
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
                    color:colorScale("State"),
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
                    color:colorScale("State"),
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
                    color:colorScale("State"),
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
                    color:colorScale("State"),
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


