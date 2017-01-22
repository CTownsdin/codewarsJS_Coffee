const chai = require('chai');
const should = chai.should();
const whatIsTheTime = require('../clockInMirror');

describe('clockInMirror', () => {
  it('03:25 => 09:35', () => {
    whatIsTheTime('03:25').should.equal('08:35');
  });

  it('07:35 => 05:25', () => {
    whatIsTheTime('07:35').should.equal('04:25');
  });

  it('12:00 => 12:00', () => {
    whatIsTheTime('12:00').should.equal('12:00');
  });

  it('11:59 => 12:01', () => {
    whatIsTheTime('11:59').should.equal('12:01');
  });

  it('10:30 => 01:30', () => {
    whatIsTheTime('10:30').should.equal('01:30');
  });
});
