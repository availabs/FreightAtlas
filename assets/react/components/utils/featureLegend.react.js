'use strict';

var React = require('react'),    
	d3 = require('d3');

//featureItem is ONE feature from a layer
//It simply contains the desired details

//featureLayer is ALL features from a layer 
//featureLayer is made up of many featureItems
//It contains a header/button for the name of the layer
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
    	var scope = this,
			style = {
			textAlign:'left',
			paddingLeft:"20px",
			paddingTop:"5px",
			fontSize:"10px"
		}

        return (
        		<div>
	        		<div style={style} dangerouslySetInnerHTML={{__html: scope.props.details}} />
	            	<br/>
            	</div>
        )
    }
})

var FeatureLayer = React.createClass({
	getInitialState: function() {

		return{
			layerName:"",
			featureList:{},
			display:false
		}

    },
    handleClick:function () {
        this.setState({display: !this.state.display})
    },
    render: function(){
    	//Populate featureList
    	var scope = this,
			style,
        	curStyle = this.state.display ? 'layListActive' : 'layListInactive',
            btnStyle = {
                width:'95%',
                textAlign:'left',
				padding:"10px",
                border:'none'
            },

    		allFeatures = Object.keys(scope.props.featureList.featDetails).map(function(key,index){
				style = {
					float:"left",
					height:38,
					width:10,
					backgroundColor:scope.props.featureList.style().color
				}

	    		return(
		    		<FeatureItem details={scope.props.featureList.featDetails[key]}>
		    		</FeatureItem>
	    		)
    		})

    	//Display defaults to false
    	//If False, want to only show header/button
        if(this.state.display === false){
	        return (
		            <div >
		            	<div>
			                <span><button className={curStyle} onClick={this.handleClick} style={btnStyle}>
			                        {this.props.layerName}
			                </button></span>
			                <div style={style}></div>
		                </div>            
		            </div> 
	        )
        }
        //If display is true, want to display the header/button AND the list of features
        else{
	        return (
		            <div >
		            	<div>
			                <span>
				                <button className={curStyle} onClick={this.handleClick} style={btnStyle}>
				                        {this.props.layerName}
				                </button>
			                </span>
			                <div style={style} />
		                </div>
						{allFeatures}	            
		            </div>      
	        )        	
        }
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

		//Create a featureLayer for each activeLayer
		//FeatureLayer is made up of FeatureItems
		var list = Object.keys(this.props.activeLayers).map(function(key,index){

			//Only create a FeatureLayer if it is visible
			if(scope.props.activeLayers[key].options.visible === true){
	            return (
		            	//Return a list of featureLayers.
		            	//Each has a name and a raw list of features
		                <FeatureLayer layerName={key} featureList={scope.props.activeLayers[key].options} />
	                )
        	}
        })
		//List of FeatureLayers
		//Each FeatureLayer is a list of FeatureItems
		return (
				<div className={"featureLegend"} >
					<h3>Layer Details </h3>
					{list}
				</div>
			)
	}
})

module.exports = featureLegend;