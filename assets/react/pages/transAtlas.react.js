'use strict';

var React = require('react');


// Will be a list of attributes passed as a property
// If called by select portion, will be checkboxes
// If called by where portion, will be radio button
var AttributeList = React.createClass({


    render: function(){

//Will eventually pass a list of attributes

            
            //Will either be select or where
            if(this.props.version == "select"){

                return(
                    <div>
                        <input type="radio" name="column" value="id"/>
                        <br/>
                        <input type="radio" name="column" value="name"/>
                    </div>
                    )
            }
            else{

                return(
                    <div>
                        <input type="checkbox" name="column" value="id">id</input>
                        <br/>
                        <input type="checkbox" name="column" value="name">name</input>
                    </div>
                    )

            }

    
    }
})

var DbList = React.createClass({

    getInitialState:function(){
        return {
            db:""
        }
    },
    onChange:function(e){
        console.log("changing");
        this.setState({
            db: e.currentTarget.value
        });

    },
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
    render: function() {
        console.log(this.state);
//Want a checkbox button list of attributes that can be selected.
//Want Where clause which, when checked opens up radio buttons for attributes, a radio for <,>,=
//Some way to finish the where clause

//Display the Data
//Prob need to limit displayed rows, essentially forces user to choose "order by"
//Want to make the data sortable by column
        return (
                <span style={{width:'100%',height:'100%'}} >
                    <h4>Transearch API </h4>
                    <h5>Now Testing Git </h5>
                    <DbList onClick={this.handleChildClick} />
                    <AttributeList />
                </span>
        )
    
    }
});

module.exports = TransDashboard;