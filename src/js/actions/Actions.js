var Marty = require('marty');
var Constants = require('../constants/Constants');

var Actions = Marty.createActionCreators({
    id: 'Actions',

    updateCoil: function(coil) {
        this.dispatch(Constants.UPDATE_COIL, coil);
    }
});

module.exports = Actions;