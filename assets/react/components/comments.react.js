'use strict';

var React = require('react'),
    
    // -- componetnts
    // -- actions
    
    // -- utils;
    d3 = require('d3');
    
var Comments = React.createClass({
    getInitialState:function(){

      return{
        messageSent:false
      }

    },
    sendMail:function(){
        var scope = this;

        var  data = {
          author:this.refs.author.getDOMNode().value,
          email:this.refs.email.getDOMNode().value,
          content:this.refs.message.getDOMNode().value
        }
        
        d3.json('/sendmail')
        .post(JSON.stringify(data),function(err,data){
            console.log('data sent',err,data)

            if(!err){
                scope.refs.author.getDOMNode().value = "";
                scope.refs.message.getDOMNode().value = "";
            }
            scope.setState({messageSent:!scope.state.messageSent})

        })
    },
    toggleSent:function(){
      this.setState({messageSent:!this.state.messageSent})
    },
    render: function() {
        var scope = this;

        var messageBox = (
          <div className='comments-box'>
               <h3>Comments</h3><p className='subText'>We welcome your comments on the Core Freight Network.</p>
               <p className='subText'>If you would like a reply, please enter your name and email. And please be location specific in 
               regards to missing Core Freight Network assests.</p>
               <input type='text' ref='author' placeholder='From:' />
               <br/>
               <br/>
               <input type='email' ref='email' placeholder='Email address:'/>
               <br/>
               <br/>
               <textArea ref='message' placeholder='Comment:'/>
               <br/>
               <br/>
               <button onClick={this.sendMail}>Submit</button>
          </div>
        );

        var sent = (
          <div className='comments-box'>
            <h3>Thank you for your input in the New York State Freight Planning Process.</h3>
            <p></p>
            <p>We have received your comments.</p>
            <button onClick={this.toggleSent} className='btn'>Send Another Comment</button>
          </div>
        ); 
        return (
            <div style={{width:'100%',height:'100%'}} >
               {this.state.messageSent ? sent : messageBox}
            </div>
        )
    }
});

module.exports = Comments;