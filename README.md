# grunt-i18npack

> Grunt plugin for i18npack

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-i18npack --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-i18npack');
```

## The "i18npack" task

### Usage Example

```js
grunt.initConfig({
  i18npack: {
    options: {
      languages: ['en','fr'],
      schemaDir: './data/schemas'
    },
    your_target: {
      files: {
        'dest/': ['data/*/**.yml']
      }
    },
  },
})
```

### Options

See [i18npack](https://github.com/ekawatani/i18npack) README.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2015 Eigo Kawatani. Licensed under the MIT license.
