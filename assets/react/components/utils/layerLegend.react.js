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

    //Add hover function

	render: function() {

		var scope = this;


		var list = Object.keys(this.props.activeLayers).map(function(key,index){

			 var style = {height:10,width:10,backgroundColor:colorScale(key)}

			if(scope.props.activeLayers[key].options.visible == true){
	            return (
	            		<div id={key}>
		            		<div style={style}> </div>
		            		{key}
	            		</div>
	                )
        	}
        })

		return (
				<div className={"layerLegend"} >
					
					{list}
				</div>
			)

	}


})

module.exports = layerLegend;