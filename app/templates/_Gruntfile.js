'use strict';

// borrowed from Angular generator
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

  // load grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    connect: {
      options: {
        hostname: 'localhost',
        port: 9000,
        base: '<%= filename %>'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, '<%= filename %>')
            ];
          }
        }
      },
    },
    watch: {
      mdpress: {
        files: [
          '<%= filename %>.md',
          'themes/{,*/}*.html',
          'themes/{,*/}*.css'
        ],
        tasks: ['shell:compile']
      },
      livereload: {
        files: [
          '<%= filename %>/index.html',
          '<%= filename %>/css/{,*/}*.css'
        ],
        tasks: ['livereload']
      }
    },
    open: {
      server: {
        url: 'http://localhost:9000'
      }
    },
    shell: {
      compile: {
        command : 'mdpress <%= filename %>.md -s <%= theme %>'
      }
    }
  });

  // For livereload
  grunt.renameTask('regarde', 'watch');
  grunt.registerTask('compile', ['shell:compile']);
  grunt.registerTask('default', ['compile']);
  grunt.registerTask('server', [
    'shell:compile',
    'livereload-start',
    'connect:livereload',
    'open',
    'watch',
  ]);

};
