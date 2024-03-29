module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    mochaTest: {
      run: {
        src: ['spec/spec_helper.js', 'spec/**/*_spec.js']
      },
      options: {
        clearRequiredCache: true
      }
    },

    watch: {
      test: {
        options: {
          atBegin: true
        },
        files: ['lib/**/[a-z]*.js', 'spec/**/[a-z]*.js'],
        tasks: ['mochaTest:run']
      }
    }
  });

  grunt.registerTask('default', 'watch')
}
