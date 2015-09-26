/*
 * grunt-i18npack
 * https://github.com/ekawatani/i18npack
 *
 * Copyright (c) 2015 Ed
 * Licensed under the MIT license.
 */

'use strict';

var i18npack = require('i18npack');

module.exports = function (grunt) {

  grunt.registerMultiTask('i18npack', 'Grunt plugin for i18npack', function () {

    var options = this.options({});

    this.files.forEach(function (file) {
      options.dest = file.dest;

      try {
        i18npack.generate(file.src, options);
      } catch (err) {
        grunt.fail.fatal(err);
      }
    });
  });

};