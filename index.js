////////////// DeleteCompany ///////////////////////
'use strict';

// Added to handle injection
const vandium = require( 'vandium' );
const mysql   = require('mysql');

  var connection = mysql.createConnection({
    host     : '[rds_host]',
    user     : '[rds_user]',
    password : '[rds_password]',
    database : '[rds_database]'
  });

exports.handler = vandium.generic()
    .handler( (event, context, callback) => {

  var sql = "DELETE FROM company WHERE id = " + connection.escape(event.company_id);

  connection.query(sql, function (error, results, fields) {
	console.log('DeleteCompany Results: ${results}');
	let response = {};
  	response['deleted'] = event.company_id;
  	console.log('DeleteCompany Response: ${response}');

	callback( null, response );

  });
})