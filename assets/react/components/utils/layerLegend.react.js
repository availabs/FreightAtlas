'use strict';

var React = require('react'),    
	d3 = require('d3');

var layerLegend = React.createClass({
	getInitialState:function(){
		return{display:true}
	},
    getDefaultProps:function(){
        return {
        	activeLayers : {}
        }
    },
    toggleTable:function(){
    	var scope=this;
    	if(this.state.display){
    		this.setState({display:false})
    	}
    	else{
    		this.setState({display:true})
    	}

    },
	render: function() {
		var scope = this;

		var list = Object.keys(this.props.activeLayers).map(function(key,index){

			var style = {
				height:10,
				width:10,
				backgroundColor:scope.props.activeLayers[key].options.style().color
			}

			var lineStyle={}

			if(scope.props.activeLayers[key].options.style().dashArray){
				console.log(scope.props.activeLayers[key].options.style().dashArray)
				lineStyle={
					height:10,
					width:1,
					stroke:scope.props.activeLayers[key].options.style().color,
					strokeDashArray:scope.props.activeLayers[key].options.style().dashArray
				}	
			}

			if(scope.props.activeLayers[key].options.visible == true){
				if(lineStyle.height){
		            return (
	        		   		<tr id={key}> 
		            		<td style={style}> </td>
		            		<td style={{padding:"5px"}}> {key} </td>
		            		<td><svg height="30px" width="1px"><line x1='0' y1='0' x2='0' y2='30' strokeDasharray={lineStyle.strokeDashArray} style={{stroke:lineStyle.stroke, strokeWidth:20}}></line></svg></td>
			           		</tr>
		                )
				}
				else{
		            return (
	        		   		<tr id={key}> 
		            		<td style={style}> </td>
		            		<td style={{padding:"5px"}}> {key} </td>
			           		</tr>
		                )					
				}

        	}
        })

		var legendStyle = {display: Object.keys(this.props.activeLayers).filter(function(d){ return scope.props.activeLayers[d].options.visible === true }).length > 0 ? "block" : 'none'};
		var btnStyle = {
                width:'5%',
                textAlign:'center',
				padding:"10px",
                border:'none',
                float:"right"
            }

        if(scope.state.display){
			return (
					<div className={"layerLegend"} style={legendStyle}>
						<button onClick={this.toggleTable} className={"layListInactive"} style={btnStyle}>x</button>
						<span>
						<h4 >Layers </h4> 
						</span>
						<table className="table">
							<tbody>
								{list}
							</tbody>
						</table>
					</div>
				)        	
        }
        else{
			return (
					<div className={"layerLegend"} style={legendStyle}>
						<button onClick={this.toggleTable }className={"layListInactive"} style={btnStyle}>x</button>
											<span>
						<h4 >Layers </h4> 
						</span>
					</div>
				)        	
        }

	}
})

module.exports = layerLegend;