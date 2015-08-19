'use strict';

var React = require('react'),

    AttList2004 = require('../data/attList2004'),
    AttList2012 = require('../data/attList2012');

    // -- utils;
    d3 = require('d3');


var AttributeButton = React.createClass({
    getInitialState:function(){
        return({value:""})
    },
    handleChange:function(event){
        this.setState({value:event.target.value})
        this.props.onChange(event.target.value)
    },
    componentWillRecieveProps:function(newProps){
        this.setState(newProps.value)
    },
    render:function(){

            if(this.props.version == "select"){
                return(
                        <div>
                            <input type="checkbox" name={this.props.name} value={this.props.value} onChange={this.handleChange}/>
                            {this.props.value}
                        </div>
                    )
            }
            else{
                return(
                        <div>
                            <input type="radio" name={this.props.name} value={this.props.value} onChange={this.handleChange}/>
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
    getInitialState:function(){
        return{selected:{}}
    },
    handleChildChange:function(name){
        console.log(name)
        if(!this.state.selected[name]){
            this.state.selected[name] = true;
        }else{
            this.state.selected[name] = false;
        }
        console.log(this.state)
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

    var butName =this.props.group;

    var list = Object.keys(attList).map(function(key,index){

        if(scope.props.version == "select"){
            return(
                    <AttributeButton onChange={scope.handleChildChange} name={butName} version="select" value={key}/>
                )
        }
        else{
            return(
                    <AttributeButton onChange={scope.handleChildChange} name={butName} version="checkbox" value={key}/>
                )                
        }
    })

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
    getDefaultProps:function(){
        return{
            db:"",
            selectAttributes:{},
            where:"false",
            leftWhereAttribute:"",
            conditional:"",
            rightWhereAttribute:""
        }
    },
    getInitialState:function(){


        return {            
            queryData:{}
        }

    },
    handleDb: function(name,event) {
        this.props["db"]=name
        this.setState(this.state);
      },
    executeQuery:function(){
        var data = {}
        console.log("Executing Query")
        console.log(this.props)
        // d3.json('/transQuery')
        // .post(JSON.stringify(data),function(err,dataReturn){
        //     console.log('data sent',err,dataReturn)
        // })
    },
    handleSelect:function(event){

    },
    handleWhere:function(event){
        //console.log(this.refs.whereClause.getDOMNode().checked)
        console.log(this.refs.firstSelect)
    },
    handleLeftWhere:function(event){

    },
    handleConditional:function(event){

    },
    handleRightWhere:function(event){

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
                    <h3>Underlined Headers indicate a mandetory selection </h3>
                    <button onClick={this.executeQuery}>Execute Query </button>
                    <table style={{borderSpacing:"30px"}}>
                        <tr>
                            <td>
                                <h5 style={{textDecoration:"underline"}}> Choose a database to query </h5>
                            </td>
                            <td>
                                <h5 style={{textDecoration:"underline"}}> Choose attributes for SELECT portion of query </h5>
                            </td>
                            <td>
                                <h5>Toggle WHERE clause</h5>
                            </td>
                            <td>
                                <h5> Choose 1 attribute for left side of WHERE portion of query </h5>
                            </td>
                            <td>
                                <h5> Choose a conditional </h5>
                            </td>
                            <td>
                                <h5> Choose 1 attribute for right side of WHERE portion or input your own value </h5>
                            </td>
                        </tr>
                        <tr style={{verticalAlign: "top"}}>
                            <td style={{verticalAlign: top}}>
                                <DbList onClick={this.handleDb} />
                            </td>     
                            <td style={{verticalAlign: "top"}}>
                                <AttributeList ref="firstSelect" db={scope.props.db} group="firstSelect" version="select"/>
                            </td>
                            <td style={{verticalAlign: "top"}}>
                                <input type="checkbox" ref="whereClause" name="whereClause" defaultValue={false} onChange={this.handleWhere}/>
                                <h7>WHERE</h7>
                            </td>
                            <td>
                                <AttributeList db={scope.props.db} group="leftWhere" version="where"/>
                            </td>
                            <td>
                                <input type="radio" ref="greaterThan" name="conditional" value=">" ></input>
                                Greater Than
                                <br/>
                                <input type="radio" ref="lessThan" name="conditional" value="<" ></input>
                                Less Than
                                <br/>
                                <input type="checkbox" ref="equalTo" name="equalTo" value="=" > </input>
                                (Or) Equals To
                            </td>
                            <td>
                                <p style={{fontSize:"12px"}}>Manual Input</p>
                                <input type="text" name="rightWhere" />
                                <br/>
                                <br/>
                                <AttributeList db={scope.props.db} group = "rightWhere" version="where"/>
                            </td>                 
                        </tr>                                                                         
                    </table>
                </span>
        )
    
    }
});

module.exports = TransDashboard;