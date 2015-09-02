'use strict';

var React = require('react'),
    
    // -- componetnts
    Map = require('../components/utils/map.react'),
    LayerLegend = require('../components/utils/layerLegend.react'),
    Comments = require('../components/comments.react'),
    
    //    -- sidebar components
    MapSidebar = require('../components/utils/MapSidebar.react'),
    LayerList = require('../components/layerList.react'),
    FeatureLegend = require('../components/utils/featureLegend.react'),

    // -- data
    Areas = require('../data/areas'),
    Facilities = require('../data/facilities'),
    Rail = require('../data/rail'),
    Road = require('../data/road'),
    // -- actions
    
    // -- utils;
    d3 = require('d3');
    


var WalkerDashboard = React.createClass({
    getInitialState:function(){

        return {
            mapLayers:{},
            areas:Areas,
            facilities:Facilities,
            rail:Rail,
            road:Road
        }

    },
    loadLayer:function(layName,url,datasetName){
        var scope = this,
            newState = scope.state;

        if(!this.state[datasetName][layName].options.loaded){
            var urlBase = "/data/geoJson/";

            var urlFull = urlBase + url;
        
            d3.json(urlFull,function(err,data){
                newState.mapLayers[layName] = {id:layName,geo:data,options:scope.state[datasetName][layName].options};
                newState[datasetName][layName].options.loaded = true;
                newState[datasetName][layName].options.visible = true;
                
                scope.setState(newState);  
            }) 
        }
        else{
            newState.mapLayers[layName].options.visible = !newState.mapLayers[layName].options.visible;
            newState.mapLayers[layName].id += 1;
            scope.setState(newState);
        }


    },
    getPanes:function(){
        return [
            {
                name:'home',
                icon:'/images/nyslogo',
                title:'About',
                content:<span> <h4> New York State Freight Network Atlas <span style={{fontSize:'85%'}}>1.0</span></h4>
                <p className='subText'> Welcome to the New York State Freight Network Atlas, Version 1.0. 
                This interactive, web-based map includes various freight-related transportation facilities that have been identified to date 
                under the current New York State Freight Transportation Plan (FTP) development process.  The 
                Atlas is a work-in-progress that we will update periodically during the course of the FTP process 
                (2015-2016).  We invite you to review and comment on the Atlas so we may be sure to include 
                the most accurate and current information possible.</p>
                <h4>Navigating the Atlas</h4>
                <ul className='subText'><li>We have organized the state’s freight-related transportation facilities into “layers” of 
                map data (e.g., Port, Intermodal, Interstate Highway, Rail, Border Crossing, etc.) to allow 
                you to view the state with one or more categories of freight facilities shown as you 
                desire. To add or remove a facility layer from your current view, simply click on the 
                desired labeled menu icons to the left of the map.</li> 
                <li>To zoom in or out on the map, click the + or – symbols in the upper right corner of the 
                screen, or scroll up and down with your mouse.</li> 
                <li>To hide the menu content, click on the active menu tab.</li>
                <li>To report missing or incorrectly located facilities, or to submit a comment or question, 
                please click on the Comments icon at the bottom of the menu on the left side.</li>
                </ul>
                <h5>Thank you for visiting the New York State Freight Atlas. We appreciate your interest and input.</h5>
                </span>
            },
            {
                name:'home2',
                icon:'/images/geographies',
                title:'New York State Regions',
                content: <LayerList title="New York State Regions" dataset='areas' layers={this.state.areas} onClick = {this.handleClick} />
            },
            {
                name:'home3',
                icon:'/images/facilities',
                title:'Freight Facilities',
                content:<LayerList title="Freight Facilities" dataset='facilities' layers={this.state.facilities} onClick = {this.handleClick} />
            },            
            {
                name:'home4',
                icon:'/images/rail1',
                title:'Rail Network',
                content:<LayerList title="Rail Network" dataset='rail' layers={this.state.rail} onClick = {this.handleClick} />
            },            
            {
                name:'home5',
                icon:'/images/truck1',
                title:'Road Network',
                content:<LayerList title="Road Network" dataset='road' layers={this.state.road} onClick = {this.handleClick} />
            },
            {
                name:'home7',
                icon:'/images/list-icon',
                title:'featureLegend',
                content: <FeatureLegend activeLayers={this.state.mapLayers} />
            },  
            {
                name:'home6',
                icon:'/images/comments',
                title:'Comment',
                content: <Comments />
            }                                    
        ]
    },
    componentDidMount:function(){
        //Loads NYS if no other layers have ever been added
        //Essentially only adds if on initial render
        //Had to place here instead of initial state or render due to synchronicity issues
        if(Object.keys(this.state.mapLayers).length === 0){
            this.loadLayer("New York State", "../finalGeoJson/State.geojson","areas");
        }
    },
    handleClick: function (childComponent) {
        //Child is passed back to parent
        //Comes from layerList
        var curLayerName = childComponent.props.layerName;
        var datasetName = childComponent.props.dataset;
        var curLayerPath = this.state[datasetName][childComponent.props.layerName].path;

        this.loadLayer(curLayerName,curLayerPath,datasetName);
    },
    render: function() {
        var scope = this;
        console.log(scope)
        var nextCoords = this.props.currentHouse ? this.props.currentHouse.geometry.coordinates : null,
            imgStyle = {
                position: 'absolute',
                left: '10px',
                height: '41px',
                top: '5px'
            };

        return (
                <div style={{width:'100%',height:'100%'}} >
                    <LayerLegend />
                    <Map layers={this.state.mapLayers} />
                    <MapSidebar panes={this.getPanes()} /> 
                </div>
        )
    }
});

module.exports = WalkerDashboard;