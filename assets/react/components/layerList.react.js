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
        var scope = this;
        //curStyle is whether the layer is toggled on or off
        //Changes with the handleclick function
        var curStyle = this.state.selected ? 'layListActive' : 'layListInactive',
            btnStyle = {
                width:'95%',
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
        if(this.props.subClick){
            this.props.subClick(this.props.layerName)            
        }
    }
})
  
    

var layerList = React.createClass({
    getInitialState: function() {
        return {subDisplay: {}};            
    },
    getDefaultProps:function(){
        return {
            layers:{}
        }
    },
    handleClick:function (childComponent) {
        this.props.onClick(childComponent)
    },
    subClick:function(layerName){
        var newState = Object.assign({},this.state)
        if(this.state.subDisplay[layerName] == true){
            newState["subDisplay"][layerName] = false;
            this.setState(newState)            
        }
        else{
            newState["subDisplay"][layerName] = true;
            this.setState(newState)
        }

    },
    render: function() {
        var scope = this;

        var list = Object.keys(this.props.layers).map(function(key,index){

            var style = {
                float:"left",
                height:38,
                width:10,
                backgroundColor:scope.props.layers[key].options.style().color
            }
            if(scope.props.layers[key]["subLevels"]){ 

                var subLevels = scope.props.layers[key]["subLevels"].map(levelName => {
                    return(
                            <li>
                                <LayerItem dataset={scope.props.dataset} layerName={key+"_"+levelName} onClick={scope.handleClick} />
                            </li>
                        )
                })

                return (
                    <div>
                        <div style={style}></div>  
                        <span>
                            <LayerItem dataset={scope.props.dataset} layerName={key} onClick={scope.handleClick} subClick={scope.subClick}/>
                            <ul style={(scope.state.subDisplay[key]) ? {display:"block"} : {display:"none"}}>
                                {subLevels}
                            </ul>
                        </span>              
                    </div>
                    )
            }
            else{
                return (
                    <div>
                        <div style={style}></div>  
                        <span>
                            <LayerItem dataset={scope.props.dataset} layerName={key} onClick={scope.handleClick} />
                        </span>              
                    </div>
                    )                
            }
        })

        return (
                <div className= "layerList" style={{width:'100%',height:'100%'}} >
                    <h3 onClick={this.handleClick}> {this.props.title} </h3>
                    {list}
                </div> 
        );
    }
});

module.exports = layerList;