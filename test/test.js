const expect = require('chai').expect;
const { kgToLi, liToKg } = require('..');


describe('#kgToLi()', function() {
	it('convert 10 kg to 4.5360 li', function() {
		expect(kgToLi(10)).to.equal('4.5360');
	});
});

describe('#liToKg()', function() {
	it('covert 10 lb to 22.0460 kg', function() {
		expect(liToKg(10)).to.equal('22.0460');
	});
});


