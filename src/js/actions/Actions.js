var Constants = require('../constants/Constants');
var Marty = require('marty');

var Actions = Marty.createActionCreators({
    id: 'Actions',

    updateCoil: function(coil) {
        this.dispatch(Constants.UPDATE_COIL, coil);
    },

    reloadCoil: function() {
        this.dispatch(Constants.RELOAD_COIL);
    }
});

module.exports = Actions;