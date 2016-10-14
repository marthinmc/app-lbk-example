module.exports = function(grunt) {
  grunt.initConfig({
    karma: {
      options: {
        configFile: 'test/karma.conf.js',
        reporters: [
          'progress',
          'coverage',
        ],
        coverageReporter: {
          type: 'html',
          dir: 'la1/test/coverage/'
        }
      },
      continuous: {
        browsers: ['PhantomJS'],
        singleRun: true,
        logLevel: 'ERROR'
      },
      dev: {}
    },
    jshint: {
      all: [
        'components/**/*.js',
        '!components/**/*spec.js',
        'config/**/*.js',
        '!config/**/*spec.js',
        'shared/**/*.js',
        '!shared/**/*spec.js',
        '*.js'
      ],
      options: {
        jshintrc: 'C:/LBKIT/lbk-front-config/sublime/linters-config/.jshintrc',
        reporter: require('jshint-stylish')
      }
    },
    ts: {
      compile: {
        tsconfig: {
          tsconfig: './tsconfig.json',
          overwriteFilesGlob: true,
        },
        src: ['**/*.ts']
      },
      options: {
        //compiler: 'C:/LBKIT/npm/node_modules/typescript/bin/tsc',
        compiler: './node_modules/typescript/bin/tsc',
        // To recompile all the files each time for NodeJS
        fast: 'never',
        verbose: false
      }
    },
    tslint: {
      options: {
          configuration: 'C:/LBKIT/lbk-front-config/sublime/linters-config/tslint.json'
      },
      local: {
          src: ['**/*.ts', '!node_modules/**/*.ts', '!typings/**/*.ts']
      }
    },
    watch: {
      scripts: {
          files: ['**/*.ts', '!node_modules/**/*.ts', '!typings/**/*.ts'],
          tasks: ['ts:compile'],
          options: {
              spawn: false,
              atBegin: true
          }
      }
    }
  });
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-tslint');

  grunt.registerTask('test', ['karma:dev']);
  grunt.registerTask('tscompile', ['ts:compile']);
  grunt.registerTask('tslinting', ['tslint:local']);
};
