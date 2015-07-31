'use strict';

var React = require('react');

var LayerItem = React.createClass({
    getInitialState: function() {


        if(this.props.layerName == "New York State"){
            return {selected: true};  
        }
        else{
            return {selected: false};            
        }

      },

    render: function(){
        var curStyle = this.state.selected ? 'layListActive' : 'layListInactive',
            btnStyle = {
                width:'100%',
                textAlign:'left',
                padding:'10px',
                border:'none'
            }
        return (
            <div >
                <button className={curStyle} ref={this.props.key} onClick={this.handleClick} style={btnStyle}>
                        {this.props.layerName}
                </button>
            
            </div>
        )
    },
    handleClick:function () {
        this.setState({selected: !this.state.selected})
        this.props.onClick(this)
    },



})
  
    

var layerList = React.createClass({

    
    getDefaultProps:function(){

        return {
            layers:{}
        }
    },
    handleClick:function (childComponent) {
        this.props.onClick(childComponent)
    },

    render: function() {
        var scope = this;

        var list = Object.keys(this.props.layers).map(function(key,index){
            return (
                <LayerItem dataset={scope.props.dataset} layerName={key} onClick={scope.handleClick} >
                </LayerItem>
                )
        })
              

        return (
        	

                <div className= "layerList" style={{width:'100%',height:'100%'}}   >
                    <h3 onClick={this.handleClick}>{this.props.title}</h3>
                    {list}
                    
                </div> 

        	
        );
    
    }
});

module.exports = layerList;