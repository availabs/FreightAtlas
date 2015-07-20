'use strict';

var React = require('react');
    
  
    

var layerList = React.createClass({
    
    getDefaultProps:function(){
        return {
            layers:{}
        }
    },
    

    render: function() {
        var scope = this;
        var list = Object.keys(this.props.layers).map(function(key,index){
            return (
                <span>
                    <button onClick={scope.props.load.bind(null,key,scope.props.layers[key].path)}>
                        {key}
                    </button>
                    <br/>
                </span>

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