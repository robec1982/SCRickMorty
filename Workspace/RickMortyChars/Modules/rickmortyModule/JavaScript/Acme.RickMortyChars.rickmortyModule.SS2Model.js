// Model.js
// -----------------------
// @module Case
define("Acme.RickMortyChars.rickmortyModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/rickmortyModule/SuiteScript2/rickmortyModule.Service.ss"
            ),
            true
        )
});
});
