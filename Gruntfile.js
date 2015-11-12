module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    middleman: {
      server: {},
      options: {
        useBundle: false,
        verbose: true,
        clean: false
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
         'source/stylesheets/main.css' : 'source/stylesheets/styles.scss'
        }
      }
    },
    "babel": {
      options: {
        sourceMap: true,
        presets: ['es2015', 'react']
      },
      dist: {
        files: {
          'source/javascripts/scripts.js': 'source/javascripts/main.js'
        }
      }
    },
    watch: {
      options: {
        livereload: true,
        nospawn: true
      },
      styles: {
        files: ['source/stylesheets/*.scss', 'source/stylesheets/base/*.scss'],
        tasks: ['sass:dist']
      },
      scripts: {
        files: ['source/javascripts/*.js', 'source/javascripts/vendor/*.js'],
        tasks: ['babel:dist']
      }
    }
  });
  grunt.loadNpmTasks('grunt-middleman');
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['middleman', 'sass', 'babel']);
  grunt.registerTask('watch', ['sass', 'babel', 'middleman', 'watch']);
  grunt.loadNpmTasks('grunt-contrib-watch');
}

