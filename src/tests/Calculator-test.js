jest.dontMock('../js/utils/Calculator');

var getCoil = function(coilNum, wireDia, innerDia, targetRes) {
    return {
        coilNumber: coilNum,
        wireDiameter: wireDia,
        innerDiameter: innerDia,
        targetResistance: targetRes
    };
};

describe('calculator', function() {
    var Calculator;

    beforeEach(function() {
        Calculator = require('../js/utils/Calculator');
    });

    it('calculates single coil wraps', function() {
        var coil = getCoil(1, 0.405, 2.5, 1);
        var wraps = Calculator.getWraps(coil);

        expect(wraps).toEqual({
            total: '8.05',
            full: '8',
            half: '9/8',
            wireLength: '89'
        });
    });

    it('calculates dual coil wraps', function() {
        var coil = getCoil(2, 0.321, 2, 0.5);
        var wraps = Calculator.getWraps(coil);

        expect(wraps).toEqual({
            total: '6.11',
            full: '6',
            half: '7/6',
            wireLength: '56'
        });
    });

    it('calculates triple coil wraps', function() {
        var coil = getCoil(3, 0.511, 2.75, 0.25);
        var wraps = Calculator.getWraps(coil);

        expect(wraps).toEqual({
            total: '8.52',
            full: '9',
            half: '9/8',
            wireLength: '106'
        });
    });

    it('calculates quadruple coil wraps', function() {
        var coil = getCoil(4, 0.644, 3, 0.125);
        var wraps = Calculator.getWraps(coil);

        expect(wraps).toEqual({
            total: '7.95',
            full: '8',
            half: '8/7',
            wireLength: '112'
        });
    });
});