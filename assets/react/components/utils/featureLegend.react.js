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
    	var style;
		style = {
			textAlign:'left',
			paddingLeft:"20px",
			paddingTop:"5px",
			fontSize:"12px"
		}

        return (
        		<div>
	        		<div style={style} dangerouslySetInnerHTML={{__html: scope.props.details}}>
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
			featureList:{},
			display:false
		}

    },
    handleClick:function () {
    	//console.log("handled")
        this.setState({display: !this.state.display})
    },
    render: function(){

    	//Populate featureList
    	var scope = this;
    	var style;
    	var allFeatures = Object.keys(scope.props.featureList.featDetails).map(function(key,index){
    		//console.log(key);
			style = {
				float:"left",
				height:32,
				width:10,
				backgroundColor:scope.props.featureList.style().color
			}

    		return(
	    		<FeatureItem details={scope.props.featureList.featDetails[key]}>
	    		</FeatureItem>
    		)
    	})

        var curStyle = this.state.display ? 'layListActive' : 'layListInactive',
            btnStyle = {
                width:'95%',
                textAlign:'left',
				paddingLeft:"15px",
				fontSize:"20px",
                border:'none'
            }


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
        else{
	        return (
		            <div >
		            	<div>
			                <span><button className={curStyle} onClick={this.handleClick} style={btnStyle}>
			                        {this.props.layerName}
			                </button></span>
			                <div style={style}></div>
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
		//console.log("'this' in featureLegend",scope)


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
					<h1>Layers </h1>

					{list}

				</div>
			)

	}

})

module.exports = featureLegend;