var Calculator = require('../utils/Calculator');
var Constants = require('../constants/Constants');
var Marty = require('marty');

var _initialCoil = {
    coilNumber: 1,
    wireDiameter: 0.405,
    innerDiameter: 2.5,
    targetResistance: 1
};

var _initialState = {
    coil: _initialCoil,
    wraps: Calculator.getWraps(_initialCoil)
};

var Store = Marty.createStore({
    id: 'Store',

    handlers: {
        updateCoil: Constants.UPDATE_COIL
    },

    getInitialState: function() {
        return _initialState;
    },

    getCoil: function() {
        return this.state['coil'];
    },

    getWraps: function() {
        return this.state['wraps'];
    },

    updateCoil: function(coil) {
        this.state['coil'] = coil;
        this.state['wraps'] = Calculator.getWraps({
            coilNumber: +coil.coilNumber,
            wireDiameter: +coil.wireDiameter,
            innerDiameter: +coil.innerDiameter,
            targetResistance: +coil.targetResistance
        });
        this.hasChanged();
    }
});

module.exports = Store;