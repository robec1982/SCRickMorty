
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.RickMortyChars.rickmortyModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.RickMortyChars.rickmortyModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}