'use strict';

var React = require('react');

var LayerItem = React.createClass({
    getInitialState: function() {
        return {selected: false};
      },

    render: function(){
        var curStyle = this.state.selected ? 'layListActive' : 'layListInactive';
        return <div >
                        <button id={curStyle} ref={this.props.key} onClick={this.handleClick}>
                                {this.props.layerName}
                        </button>
                    
                </div> 
    },
    handleClick:function () {
        this.setState({selected: !this.state.selected})
        //console.log(this)
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
        //console.log(childComponent)
        this.props.onClick(childComponent)
    },

    render: function() {
        var scope = this;

        var list = Object.keys(this.props.layers).map(function(key,index){
            return (
                <LayerItem layerName={key} onClick={scope.handleClick} >
                </LayerItem>
                )
        })
              

        return (
        	
            <div className = "layerList" style={{width:'100%',height:'100%'}}   >
                <h3 onClick={this.handleClick}>Layer List</h3>
                {list}
            </div> 
        	
        );
    
    }
});

module.exports = layerList;