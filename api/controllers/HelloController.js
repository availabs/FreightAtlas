'use strict';

var nodemailer = require('nodemailer'),
	mg = require('nodemailer-mailgun-transport'),
	fs = require('fs'),
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
    
		fileCache.checkCache({source:source,STCC2:STCC2,STCC3:STCC3},function(data){

			if(data){
 				console.log('cache sucess');
 				console.time('send cache');
 				res.send(data)
 				console.timeEnd('send cache');
			}
			else{
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
					query += 'WHERE '
						for(var i=0;i<STCC2.length;i++){
							if(i != STCC2.length-1){
								query += '"STCC2" != \'' + STCC2[i] + '\' AND '
							}
							else{
								query += '"STCC2" != \'' + STCC2[i] + '\' '
							}
						}
				}

				if(STCC3 === 'all'){

				}
				else{
					query += 'AND "STCC3" != "' + STCC3 + '"'
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
					console.time('send Data');
					res.json(data);
					console.timeEnd('send Data');
					console.log('caching');
					fileCache.addData({source:source,STCC2:STCC2,STCC3:STCC3},data);
				})
			}
		})
	}
};

var fileCache = {
	
	cache : {},

	checkCache : function(request,callback){
		console.log('------------checkCache----'+request.source+'---'+request.STCC2+request.STCC3+'----------------')
		var file = __dirname.substring(0,__dirname.length-15) + 'assets/cache/'+request.source+'/'+request.STCC2+request.STCC3+'.json';
		
		//console.log(file,callback);
		console.time('file Read')
		fs.readFile(file, 'utf8', function (err, data) {
		  if (err) {
		    console.log('Error: ' + err);
		    return callback(false);
		  }
		 		 
		  console.timeEnd('file Read');
		  data = JSON.parse(data);
		  return callback(data);
		
		});

	},

	addData : function(request,data){
		var dir = __dirname.substring(0,__dirname.length-15) + 'assets/cache/'+request.source+'/';

		ensureExists(dir, '0744', function(err) {
		    if (err){
		    	console.log('ensure exists error')
		    } // handle folder creation error
		    var file = dir+request.STCC2+request.STCC3+'.json';
		    
		    fs.writeFile(file,JSON.stringify(data), function(err) {
			    if(err) {
			        console.log('file write error',err);
			    } else {
			        console.log("The file was saved!",file);
			    }
			});
		
		});

	}

}

function ensureExists(path, mask, cb) {
    if (typeof mask == 'function') { // allow the `mask` parameter to be optional
        cb = mask;
        mask = '0777';
    }
    fs.mkdir(path, mask, function(err) {
        if (err) {
            if (err.code == 'EEXIST') cb(null); // ignore the error if the folder already exists
            else cb(err); // something else went wrong
        } else cb(null); // successfully created folder
    });
}