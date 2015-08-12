'use strict';

var React = require('react'),
    Tappable = require('react-tappable');
    
var MapSidebar = React.createClass({
    
    getDefaultProps:function(){
    
        return {
            sidebarId:'sidebar',
            collapsed:false,
            activePane:null,
            panes : [
                {
                    name:'home',
                    icon:'fa fa-bars',
                    content:<div><h1>sidebar-v2</h1><p>A responsive sidebar for mapping libraries like <a href="http://leafletjs.com/">Leaflet</a> or <a href="http://openlayers.org/">OpenLayers</a>.</p></div>

                },
                {
                    name:'profile',
                    icon:'fa fa-user',
                    content:<h1>Profile</h1>

                }
            ]
        }
    
    },

    getInitialState:function(){
        
        return {
            collapsed : this.props.collapsed,
            activePane : this.props.panes[0].name
        }

    },
    _onToggle:function(){

        this.setState({collapsed:!this.state.collapsed});
    },
    

    componentWillReceiveProps:function(nextProps){
        //console.log('set active pane1',nextProps.activePane,this.state.activePane)
        if(nextProps.activePane && nextProps.activePane !== this.state.activePane){
            //console.log('set active pane2',nextProps.activePane)
            this.setState({
                activePane : nextProps.activePane,
                collapsed : false
            })
        }
    },

    setActivePane:function(name){
        
        
        if(!this.props.activePane){
            var setName = name === this.state.activePane ? null : name;
            var newState = this.state;
            newState.activePane = setName;
            if(setName == null && !this.state.collapsed){
                newState.collapsed = true
            }
            if(setName != null && this.state.collapsed){
                newState.collapsed = false
            }
            
            this.setState(newState);
        }
    
    },

    render: function() {
        var scope = this;
        console.log(this)
        var tabs = this.props.panes.map(function(d,i){
        var tabClass = 'sidebar-tabs-li ';
            tabClass += d.name === scope.state.activePane ? 'active' : '';
        var imgSource = d.name === scope.state.activePane ? d.icon+'_active.png' : d.icon+'.png';

  
            return (
                <Tappable onTap={scope.setActivePane.bind(null,d.name)} id={d.name+'_tap'}>
                    <li  key={i} className={tabClass}>
                        <a role="tab">
                            <img title={d.title} src={imgSource} />
                        </a>
                    </li>
                </Tappable>
            )
        })

        var panes = this.props.panes.map(function(d,i){
            var paneClass = d.name === scope.state.activePane ? 'sidebar-pane active' : 'sidebar-pane';
            return (
                <div key={i} className={paneClass}>
                    {d.content}
                </div>
            )
        })
        var sidebarClass = this.state.collapsed ? 'mapsidebar collapsed' : 'mapsidebar';

        return (
            <div id={this.props.sidebarId} className={sidebarClass} style={{color:'#5d5d5d', textAlign:'justify', paddingRight:'30px'}}>
               
                <ul className="sidebar-tabs" role="tablist">
                   {tabs}
                </ul>

                
                <div className="sidebar-content active">
                   {panes}
                </div>
            </div>

        );
    },

});


module.exports = MapSidebar;