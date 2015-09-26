'use strict';

var grunt = require('grunt');
var path = require('path');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.i18ngen = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  basic: function (test) {
    test.expect(2);

    var actual;
    var expected;

    // en.json
    actual = JSON.parse(grunt.file.read('tmp/basic/en.json'));
    expected = JSON.parse(grunt.file.read('test/expected/basic/en.json'));
    test.deepEqual(actual, expected);

    // fr.json
    actual = JSON.parse(grunt.file.read('tmp/basic/fr.json'));
    expected = JSON.parse(grunt.file.read('test/expected/basic/fr.json'));
    test.deepEqual(actual, expected);

    test.done();
  }
};
