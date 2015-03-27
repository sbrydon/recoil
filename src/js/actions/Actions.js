var Constants = require('../constants/Constants');
var Marty = require('marty');

var Actions = Marty.createActionCreators({
    id: 'Actions',

    update: function(coil) {
        this.dispatch(Constants.UPDATE, coil);
    },

    restart: function() {
        this.dispatch(Constants.RESTART);
    }
});

module.exports = Actions;