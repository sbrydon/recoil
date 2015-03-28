var assign = require('object-assign');
var Calculator = require('../utils/Calculator');
var Constants = require('../constants/Constants');
var Marty = require('marty');

function getWraps(coil) {
    return Calculator.getWraps({
        coilNumber: +coil.coilNumber,
        wireDiameter: +coil.wireDiameter,
        innerDiameter: +coil.innerDiameter,
        targetResistance: +coil.targetResistance
    });
}

var initialCoil = {
    coilNumber: '1',
    wireDiameter: '0.405',
    innerDiameter: '2.5',
    targetResistance: '1'
};

var initialState = {
    coil: initialCoil,
    wraps: getWraps(initialCoil)
};

var Store = Marty.createStore({
    id: 'Store',

    handlers: {
        updateCoil: Constants.UPDATE_COIL,
        resetCoil: Constants.RESET_COIL
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

    updateCoil: function(coil) {
        this.replaceState({
            coil: coil,
            wraps: getWraps(coil)
        });
    },

    resetCoil: function() {
        this.replaceState(initialState);
    }
});

module.exports = Store;