'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/transMap.react'),

    
    //    -- sidebar components
    MapSidebar = require('../components/utils/MapSidebar.react'),


    // -- data

    
    // -- utils;
    d3 = require('d3'),
        colorbrewer = require('colorbrewer');

function getColor(d) {
return d > 100000000000 ? '#800026' :
       d > 50000000000  ? '#BD0026' :
       d > 2000000000  ? '#E31A1C' :
       d > 100000000  ? '#FC4E2A' :
       d > 50000000   ? '#FD8D3C' :
       d > 2000000   ? '#FEB24C' :
       d > 100000   ? '#FED976' :
                  '#FFEDA0';
}

var colorScale = d3.scale.ordinal()
                 .domain(["CAN_adm1","Western_Region"])
                 .range(colorbrewer.Paired[9]);


var TransDashboard = React.createClass({
    getInitialState:function(){

        return {
            mapLayers:{},
            source:"origin",
            STCC2:"all",
            STCC3:"all"
        }

    },    
    loadLayer:function(layName,url,countyData){
        var scope = this,
            newState = scope.state,


            urlFull = url;

        
            d3.json(urlFull,function(err,data){
                console.log(countyData);
                    newState.mapLayers[layName] = {id:layName,geo:data,options:{
                        zoomOnLoad:false,
                        tons:0,
                        centerOnLoad:false,
                        visible:true,
                        loaded:true,
                        onEachFeature: function(feature,layer){
                            //console.log(feature.properties.GEO_ID.substring(9,14))
                            var geoID = feature.properties.GEO_ID.substring(9,14)
                            //console.log(geoID)
                            this.tons = countyData[geoID]
                            var scope = this
                            this.style = function(feature){
                                return {
                                        fillColor: getColor(scope.tons),
                                        weight: 2,
                                        opacity: 1,
                                        color: 'white',
                                        dashArray: '3',
                                        fillOpacity: 0.7
                                    }
                            }
                            //console.log(this)
                            // var popupContent = feature.tons;
                            // layer.bindPopup(feature);  
                        }
                    }
                }

                scope.setState(newState);  
            }) 



    },
    componentDidMount:function(){
        var data = {
            source:this.state.source,
            STCC2:this.state.STCC2,
            STCC3:this.state.STCC3
        }

        this.getLayer(data);
    },
    getLayer:function(params){
        var scope = this;
        var countyObject = {}
        d3.json('/transquery')
        .post(JSON.stringify(params),function(err,dataReturned){
            console.log('data sent',err,dataReturned.success.rows)

            dataReturned.success.rows.forEach(function(curCounty){

                if(scope.state.source === "origin"){
                    countyObject[curCounty.Origin_County_FIPS_Code] = curCounty.total_tons;
                }
                else{
                    countyObject[curCounty.Destination_County_FIPS_Code] = curCounty.total_tons;
                }
            })

            scope.loadLayer("usCounties","/data/finalGeoJson/usCounties.geojson",countyObject);


        })       
    },
    getPanes:function(){
        return [
            {
                name:'home',
                icon:'/images/nyslogo',
                title:'About',
                content:<h3>hello</h3>
            },
                        {
                name:'home2',
                icon:'/images/nyslogo',
                title:'Origin/Destination',
                content:<div><br/><div>Origin</div><br/><div>Destination</div></div>
            }, 
            {
                name:'home3',
                icon:'/images/nyslogo',
                title:'STCC Codes',
                content:<h3>Filter by STCC Code</h3>
            }                                  
        ]
    },

    render: function() {
        var scope = this;
        console.log("This in atlas render",this);


        return (
                <div style={{width:'100%',height:'100%'}} >
                    <Map layers={this.state.mapLayers} />
                    <MapSidebar panes={this.getPanes()} /> 
                </div>
        )
    }
});

module.exports = TransDashboard;