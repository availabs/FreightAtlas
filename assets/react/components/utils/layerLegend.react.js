'use strict';

var React = require('react'),    
	d3 = require('d3'),
	colorScale = d3.scale.category20();   

var layerLegend = React.createClass({
    getDefaultProps:function(){
    
        return {
        	activeLayers : {}
        }
    
    },

	render: function() {
		console.log("legend",this.props.activeLayers)
		var scope = this;


		var list = Object.keys(this.props.activeLayers).map(function(key,index){
			 console.log(scope)
			 var style = {height:5,width:5,backgroundColor:colorScale(key),display:"block"}

			if(scope.props.activeLayers[key].options.visible == true){
	            return (
	            		<div id={key}>
		            		<div style={style}> 
		            		</div>
		            		<h3>{key}</h3>
	            		</div>
	                )
        	}
        })

		return (
				<div id = "layerLegend" className={"layerLegend"} >
					{list}
				</div>
			)

	}


})

module.exports = layerLegend;