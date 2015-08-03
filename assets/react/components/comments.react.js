'use strict';

var React = require('react'),
    
    // -- componetnts
    // -- actions
    
    // -- utils;
    d3 = require('d3');
    


var Comments = React.createClass({

    sendMail:function(){
        console.log("SendMail");
        console.log('Author: ',this.refs.author.getDOMNode().value,"Message: ",this.refs.message.getDOMNode().value);

        var scope = this;
        var  data = {author:this.refs.author.getDOMNode().value,content:this.refs.message.getDOMNode().value}
        
        d3.json('/sendmail')
        .post(JSON.stringify(data),function(err,data){
            console.log('data sent',err,data)

            if(!err){
                scope.refs.author.getDOMNode().value = "";
                scope.refs.message.getDOMNode().value = "";
            }

        })
    },
    render: function() {
        var scope = this;
        console.log("render",this.refs.author)
        return (
            <div style={{width:'100%',height:'100%'}} >
               <div className='comments-box'>
               <h3>Comments</h3>
               <input type='text' ref='author' placeholder='From:' />
               <br/>
               <br/>
               <textArea ref='message' placeholder='Comment:'/>
               <br/>
               <br/>
               <button onClick={this.sendMail}>Submit</button>
               </div>
            </div>
        )
    
    }
});

module.exports = Comments;