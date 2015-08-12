'use strict';

var React = require('react'),    
	d3 = require('d3'),
	// -- data
    Areas = require('../../data/areas'),
    Facilities = require('../../data/facilities'),
    Rail = require('../../data/rail'),
    Road = require('../../data/road');


//featureItem is ONE feature from a layer
//It simply contains the desired details

//featureLayer is ALL features from a layer 
//featureLayer is made up of many featureItems
//It contains a header row for the name of the layer
//And a row for each feature

//featureLegend is ALL active layers
//featureLegend is made up of many featureLayers

var featureItem = React.createClass({
	getInitialState: function() {

		return{
			details:{}
		}

    },

    render: function(){
        return (
            <div >
            	<tr>{this.props.details}</tr>       
            </div>
        )
    }

})

var featureLayer = React.createClass({
	getInitialState: function() {

		return{
			layerName:"",
			featureList:{}
		}

    },
    render: function(){

    	//Populate featureList


    	var allFeatures = Object.keys(this.props.featureList).map(function(key,index){
    		<featureItem >
    		</featureItem>
    	})

        return (
            <div >
            	<tr>{this.props.layerName}</tr>
            	<tr>{this.props.featureList}</tr> 
            </div>
        )
    }

})



var featureLegend = React.createClass({
    getDefaultProps:function(){
    
        return {
        	activeLayers : {}
        }
    
    },


	render: function() {

		var scope = this;
		console.log("'this' in featureLegend",scope)


		//Create a featureLayer for each activeLayer
		var list = Object.keys(this.props.activeLayers).map(function(key,index){
			console.log(key)
            return (
            	//Return a list of featureLayers.
            	//Each has a name and a raw list of features
                <featureLayer layerName={key}>
                </featureLayer>
                )
        })
		console.log(list)

		return (
				<div className={"featureLegend"} >
					<h4>Layers </h4>
					<table className="table">
					<tbody>
					{list}
					</tbody>
					</table>
				</div>
			)

	}

})

module.exports = featureLegend;