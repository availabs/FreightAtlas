'use strict';

var React = require('react');
    
  
    

var layerList = React.createClass({


    render: function() {
        var scope = this;
        var list = this.props.layers.map(function(layer,index){
            return (
                <span><button onClick={scope.props.load.bind(null,layer.name,layer.path)}>{layer.name}</button><br/></span>

                )
        })
              

        return (
        	
            <div style={{width:'100%',height:'100%'}} >

                <h3>Layer List</h3>
                {list}




            
            </div> 
        	
        );
    
    }
});

module.exports = layerList;