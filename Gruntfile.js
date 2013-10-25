module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            minify: {
                expand: true,
                cwd: 'static/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'static/css/',
                ext: '.min.css'
            },
            combine: {
                files: {
                    'static/css/bundle.min.css': [ 
                        'static/css/r*.min.css',
                        'static/css/so*.min.css',
                        'static/css/si*.min.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['cssmin']);
};
