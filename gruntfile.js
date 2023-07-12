module.exports = function(grunt) {
    grunt.initConfig({
        pgk: grunt.file.readJSON('package.json'),

        less: {
            production: {
                options: {
                    compress: true
                },
                files: {
                    './build/main.css': './src/main.less'
                }
            }
        },

        uglify: {
            target: {
                files: {
                    './build/main.js': './src/main.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less:production','uglify']);
}