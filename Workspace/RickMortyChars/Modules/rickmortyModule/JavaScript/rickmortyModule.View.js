// @module Acme.RickMortyChars.rickmortyModule
define('Acme.RickMortyChars.rickmortyModule.View'
,	[
	'acme_rickmortychars_rickmortymodule.tpl'
	
	,	'Acme.RickMortyChars.rickmortyModule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	acme_rickmortychars_rickmortymodule_tpl
	
	,	rickmortyModuleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Acme.RickMortyChars.rickmortyModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: acme_rickmortychars_rickmortymodule_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new rickmortyModuleModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Acme.RickMortyChars.rickmortyModule.View.Context
	,	getContext: function getContext()
		{
			function getAllCharacters() {
				let request = require('request');
				let result = {}
				
				let options = {
					'method': 'GET',
					'url': 'https://tstdrv1941931.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=799&deploy=1&compid=TSTDRV1941931&h=c58fbc13d36ad682282e',
					'headers': {

					}
				};
				
				request(options, function (error, response) {
					if (error) throw new Error(error);
					result = JSON.parse(response.body);
				});

				return result;
			}
			
			//@class Acme.RickMortyChars.rickmortyModule.View.Context
			return getAllCharacters();
		}
	});
});
