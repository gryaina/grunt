
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ['assets/css']
        },
        files: {
          'assets/css/style.css' : 'less/style.less'
        }
      }
    },
    watch : {
      css: {
        files: 'less/style.less',
        tasks: ['less']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'assets/css/style.css',
            '*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    },
    imagemin: {
    dynamic: {
      files: [{
        cwd: 'images/',
        expand: true,
        src: ['**/*.{png,jpg}'],
      }]
    }
  }
   });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default',['browserSync','watch','imagemin']);
};
