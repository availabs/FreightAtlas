'use strict';

var React = require('react'),    
	d3 = require('d3');



//featureItem is ONE feature from a layer
//It simply contains the desired details

//featureLayer is ALL features from a layer 
//featureLayer is made up of many featureItems
//It contains a header row for the name of the layer
//And a row for each feature

//featureLegend is ALL active layers
//featureLegend is made up of many featureLayers

var FeatureItem = React.createClass({
	getInitialState: function() {

		return{
			details:{}
		}

    },

    render: function(){
    	//console.log("please",this)
    	var scope = this;
        return (
        		<div>
	        		<div dangerouslySetInnerHTML={{__html: scope.props.details}}>
	            	</div>
	            	<br/>
            	</div>
        )
    }

})

var FeatureLayer = React.createClass({
	getInitialState: function() {

		return{
			layerName:"",
			featureList:{}
		}

    },
    render: function(){

    	//Populate featureList
    	var scope = this;
    	var style;
    	var allFeatures = Object.keys(scope.props.featureList.featDetails).map(function(key,index){
    		//console.log(key);
			style = {height:10,width:10,backgroundColor:scope.props.featureList.style().color}

    		return(
	    		<FeatureItem details={scope.props.featureList.featDetails[key]}>
	    		</FeatureItem>
    		)
    	})

        return (
        		<div>
        			<div>
	        			<div style={style}></div>
		            	<h2 style={{padding:"5px"}}>{this.props.layerName}</h2>
	            	</div>
	            	{allFeatures}
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
			//console.log(scope.props.activeLayers[key].options.featDetails)

			if(scope.props.activeLayers[key].options.visible === true){
	            return (
	            	//Return a list of featureLayers.
	            	//Each has a name and a raw list of features
	                <FeatureLayer layerName={key} featureList={scope.props.activeLayers[key].options}>
	                </FeatureLayer>
	                )
        	}
        })

		return (
				<div className={"featureLegend"} >
					<h4>Layers </h4>

					{list}

				</div>
			)

	}

})

module.exports = featureLegend;