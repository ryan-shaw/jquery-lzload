module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'src/*.js']
        },
        copy: {
            js: {
                src: 'src/lzload.jquery.js',
                dest: 'build/lzload.jquery.js'
            }
        },
        uglify: {
            js: {
                files: {
                    'build/lzload.jquery.min.js': 'src/*.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify', 'copy']);
};
