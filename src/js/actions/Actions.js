var Constants = require('../constants/Constants');
var Marty = require('marty');

var Actions = Marty.createActionCreators({
    id: 'Actions',

    updateCoil: function(coil) {
        this.dispatch(Constants.UPDATE_COIL, coil);
    },

    resetCoil: function() {
        this.dispatch(Constants.RESET_COIL);
    }
});

module.exports = Actions;