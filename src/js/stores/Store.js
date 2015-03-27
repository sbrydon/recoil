var assign = require('object-assign');
var Calculator = require('../utils/Calculator');
var Constants = require('../constants/Constants');
var Marty = require('marty');

var initialCoil = {
    coilNumber: 1,
    wireDiameter: 0.405,
    innerDiameter: 2.5,
    targetResistance: 1
};

var initialState = {
    coil: initialCoil,
    wraps: Calculator.getWraps(initialCoil)
};

var Store = Marty.createStore({
    id: 'Store',

    handlers: {
        update: Constants.UPDATE,
        restart: Constants.RESTART
    },

    getInitialState: function() {
        return initialState;
    },

    getCoil: function() {
        return assign({}, this.state['coil']);
    },

    getWraps: function() {
        return assign({}, this.state['wraps']);
    },

    update: function(coil) {
        this.replaceState({
            coil: coil,
            wraps: Calculator.getWraps(coil)
        });
    },

    restart: function() {
        this.replaceState(initialState);
    }
});

module.exports = Store;