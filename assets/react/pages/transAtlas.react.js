'use strict';

var React = require('react'),

    AttList2004 = require('../data/attList2004'),
    AttList2012 = require('../data/attList2012');




var AttributeButton = React.createClass({
    getInitialState:function(){
        return({value:""})
    },
    handleChange:function(event){
        this.setState({value:event.target.value})
    },
    componentWillRecieveProps:function(newProps){
        this.setState(newProps.value)
    },
    render:function(){
            if(this.props.version == "select"){
                return(
                        <div>
                            <input type="radio" name="column" value={this.props.value} onChange={this.handleChange}/>
                            {this.props.value}
                        </div>
                    )
            }
            else{
                return(
                        <div>
                            <input type="checkbox" name="column" value={this.props.value} onChange={this.handleChange}/>
                            {this.props.value}
                        </div>
                    )                
            }       
    }
})


// Will be a list of attributes passed as a property
// If called by select portion, will be checkboxes
// If called by where portion, will be radio button
var AttributeList = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
      return this.props.db !== nextProps.db;
    },
    render: function(){

//Will eventually pass a list of attributes
    var scope = this;

        if(!this.props.db){
            var attList = [];
        }
        else if(this.props.db == "2004"){
            var attList = AttList2004
        }
        else{
            var attList = AttList2012            
        }



        var list = Object.keys(attList).map(function(key,index){

            if(scope.props.version == "select"){
                return(
                        <AttributeButton version="select" value={key}/>
                    )
            }
            else{
                return(
                        <AttributeButton version="checkbox" value={key}/>
                    )                
            }
        })

        console.log("list of buttons",list)
                return(
                    <div>
                        {list}
                    </div>
                    )

            

    
    }
})

var DbList = React.createClass({

    render: function(){
        return(
            <div>
                <input type="radio" name="dbYear" value="2004" onClick={this.props.onClick.bind(null,"2004")}>2004</input>
                <br/>
                <input type="radio" name="dbYear" value="2012" onClick={this.props.onClick.bind(null,"2012")}>2012</input>
            </div>
            )
    }

})


var TransDashboard = React.createClass({

    getInitialState:function(){


        return {            
            queryData:{},
            db:""
        }

    },
    handleChildClick: function(name,event) {
        this.setState(
            {
                queryData:{},
                db:name
            })
      },
    onWhereClick: function(event){
        this.getDOMNode.checked = !this.getDOMNode.checked
    },
    render: function() {

        var scope = this;
//Want a checkbox button list of attributes that can be selected.
//Want Where clause which, when checked opens up radio buttons for attributes, a radio for <,>,=
//Some way to finish the where clause

//Display the Data
//Prob need to limit displayed rows, essentially forces user to choose "order by"
//Want to make the data sortable by column
        return (
                <span style={{width:'100%',height:'100%'}} >
                    <h2>Transearch API </h2>
                    <table style={{borderSpacing:"30px"}}>
                        <tr>
                            <td>
                                <h5> Choose a database to query </h5>
                            </td>
                            <td>
                                <h5> Choose 1 attribute for SELECT portion of query </h5>
                            </td>
                            <td>
                                <h5>Toggle WHERE clause</h5>
                            </td>
                        </tr>
                        <tr style={{verticalAlign: "top"}}>
                            <td style={{verticalAlign: top}}>
                                <DbList onClick={this.handleChildClick} />
                            </td>     
                            <td style={{verticalAlign: "top"}}>
                                <AttributeList db={scope.state.db} version="select"/>
                            </td>
                            <td style={{verticalAlign: "top"}}>
                                <input type="checkbox" name="whereClause" defaultChecked={false} onChange={this.onWhereClick}/>
                                <h7>WHERE</h7>
                            </td>                 
                        </tr>                         
                                                                              
                    </table>
                </span>
        )
    
    }
});

module.exports = TransDashboard;