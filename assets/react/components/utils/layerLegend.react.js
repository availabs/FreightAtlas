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
		console.log(scope.props.activeLayers)
		if(scope.props.activeLayers[Object.keys(scope.props.activeLayers)[1]]){
		console.log(scope.props.activeLayers[Object.keys(scope.props.activeLayers)[1]])			
		console.log(scope.props.activeLayers[Object.keys(scope.props.activeLayers)[1]].options.style().color)

		}
		



		var list = Object.keys(this.props.activeLayers).map(function(key,index){

			 var style = {height:10,width:10,backgroundColor:scope.props.activeLayers[key].options.style().color}

	            return (
        		   		<tr id={key}> 
	            		<td style={style}> </td>
	            		<td style={{padding:"5px"}}> {key} </td>
		           		</tr>
	                )
        	
        })
        //console.log(this.props.activeLayers)
		var legendStyle={display: Object.keys(this.props.activeLayers).filter(function(d){ return scope.props.activeLayers[d].options.visible === true }).length > 0 ? "block" : 'none'};
		return (
				<div className={"layerLegend"} style={legendStyle}>
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

module.exports = layerLegend;