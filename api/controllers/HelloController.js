'use strict';

var nodemailer = require('nodemailer'),
	mg = require('nodemailer-mailgun-transport'),

	auth = {
	  auth: {
	    api_key: 'key-9390c0dd227468f4612c121cf175e131',
	    domain: 'sandbox0f10bb9630af4b038b9b4aa63278e4d9.mailgun.org'
	  }
	},

	// create reusable transporter object using SMTP transport
	transporter = nodemailer.createTransport(mg(auth));

module.exports = {
    'index': function (req, res) {
        res.view({ devEnv : (process.env.NODE_ENV === 'development') }); 
    },
    'transearch': function (req,res){
        res.view({ devEnv : (process.env.NODE_ENV === 'development') });     	
    },
    'sendmail': function (req,res){

		var author = req.param('author'),
			email = req.param('email'),
			content = req.param('content');
			
		console.log("mail",author,email,content);	
		//MAIL TIME


		// setup e-mail data with unicode symbols
		var mailOptions = {
		    from: '<nys.freight.network@gmail.com>', // sender address
		    to: 'nys.freight.network@gmail.com', // list of receivers
		    subject: 'Comment From ' + author, // Subject line
		    text: email+'/n/n/n'+content, // plaintext body
		    html: '<b>'+email+'<br/><br/>'+content+'</b>' // html body
		};



		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		       	res.json({responseText:error})
				console.log('ERROR');
		    }else{
		    	res.json({responseText:'success'})
		        console.log('Message sent: ' + info.response);
		    }
		});


    },
    transQuery: function(req,res){
    	console.log("hello");

		var source = req.param('source'),
			STCC2 = req.param('STCC2'),
			STCC3 = req.param('STCC3');

			console.log(source, STCC2, STCC3);
    


		var query= 'SELECT ';

		if(source === "origin"){
			query += '"Origin_County_FIPS_Code",';
		}
		else{
			query += '"Destination_County_FIPS_Code",';
		}

		query += 'sum("Total_Annual_tons") as total_tons FROM "2012_Transearch" ';




		if(STCC2 === 'all'){

		}
		else{
			query += 'WHERE "STCC2" = "' + STCC2 + '"'
		}

		if(STCC3 === 'all'){

		}
		else{
			query += 'AND "STCC3" = "' + STCC3 + '"'
		}

		if(source === "origin"){
			query+= 'group by "Origin_County_FIPS_Code"'
		}
		else{
			query+= 'group by "Destination_County_FIPS_Code"'
		}


    	//var finalQuery = 'SELECT  "Origin_County_FIPS_Code",sum("Total_Annual_tons") as total_tons FROM "2012_Transearch" group by "Origin_County_FIPS_Code" ';
    	console.log(query)
		Transearch_2012.query(query,function(err,data){

				res.json({'success' : data});
			})


    }
};
