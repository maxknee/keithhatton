module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-wiredep');
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
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          'source/javascripts/all.js': 'source/javascripts/scripts.js'
        }
      }
    },
    concat: {
      basic_and_extras: {
        files: {
          'source/javascripts/final.js': ['source/javascripts/vendor/masonry.pkgd.js', 'source/javascripts/all.js']
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
        tasks: ['babel:dist', 'concat']
      }
    },
    wiredep: {
      task: {
        src: 'source/layouts/layout.html.haml'
      }
    }
  });
  grunt.loadNpmTasks('grunt-middleman');
  grunt.loadNpmTasks('grunt-contrib-concat');
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['sass', 'babel', 'concat', 'wiredep']);
  grunt.registerTask('watch', ['sass', 'wiredep', 'babel', 'concat', 'watch']);
  grunt.loadNpmTasks('grunt-contrib-watch');
}

