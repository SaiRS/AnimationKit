// var expect = require('expect.js');
import 'babel-polyfill'
import expect from 'expect.js'

import XXActionJSDriver from '../../../../vendor/Action/ActionDriver/XXActionJSDriver.js';
import xxvJSDriver from '../../../../vendor/Action/ActionDriver/XXActionDriver.js';

// let jsDriverObject = new XXActionJSDriver();

xxvJSDriver.startMainLoop();

describe('XXActionJSDriver测试', function() {

  before(function() {
  // runs before all tests in this block
  console.log('before');
});

after(function() {
  // runs after all tests in this block
  console.log('after');

});

beforeEach(function() {
  // runs before each test in this block
  console.log('before each');
});

afterEach(function() {
  // runs after each test in this block
  console.log('after each');
});

  it('每一帧都应该调用play方法', function() {
    expect([1,2,3]).to.have.length(3);

    expect([1,2,3]).to.not.be.empty();
  })
});
