function getWraps(coil) {
    var coilNumber = coil.coilNumber;
    var wireDiameter = coil.wireDiameter;
    var innerDiameter = coil.innerDiameter;
    var targetResistance = coil.targetResistance;
    var wrapSpacing = 0.01;
    var wireResistance = 1.45;
    var legLength = 5;

    var a = innerDiameter + (wireDiameter * 2);
    var b = a * Math.PI;
    var c = wireDiameter + wrapSpacing;
    var d = Math.sqrt((b * b) + (c * c));
    var e = wireResistance / 1000;
    var f = e / (Math.PI * (wireDiameter / 2) * (wireDiameter / 2));
    var g = 1 / coilNumber;
    var h = (targetResistance / f) / g;
    var i = h - legLength;

    var total = Math.floor((i / d) * 100) / 100;
    var full = Math.round(total);
    var half = parseInt(total + 1, 10) + '/' + parseInt(total, 10);
    var wireLength = Math.round(h);

    return {
        total: total,
        full: full,
        half: half,
        wireLength: wireLength
    };
}

module.exports = {
    getWraps: getWraps
};