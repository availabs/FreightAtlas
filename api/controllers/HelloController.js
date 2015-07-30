'use strict';

module.exports = {
    'index': function (req, res) {
        res.view({ devEnv : (process.env.NODE_ENV === 'development') }); 
    },
    'transearch': function (req,res){
        res.view({ devEnv : (process.env.NODE_ENV === 'development') });     	
    }
};
