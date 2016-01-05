'use strict';

var Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
var pseudoid = require('../index.js');

lab.test('returns id string', (done) => {
  let id = pseudoid()
  Code.expect(id).to.match(/\w+/);
  done();
});
