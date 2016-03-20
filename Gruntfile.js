module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    var mozjpeg = require('imagemin');

    grunt.initConfig({
        critical: {
            test: {
                options: {
                    base: './',
                    css: [
                        'src/css/style.css'
                    ],
                    width: 1220,
                    height: 800
                },
                src: 'src/index.html',
                dest: 'dist/index.html'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/js/output.min.js': ['src/js/ga.js', 'src/js/perfmatters.js']
                }
            }
        },
        copy: {
            main: {
                files: [

                    { expand: true, cwd: 'src/', src: ['views/**'], dest: 'dist/' },

                ],
            },
        },
        imagemin: { // Task 
            dynamic: { // Another target 
                files: [{
                    expand: true, // Enable dynamic expansion 
                    cwd: 'src/', // Src matches are relative to this path 
                    src: ['**/*.{png,jpg,gif}'], // Actual patterns to match 
                    dest: 'dist/' // Destination path prefix 
                }]
            }
        },
        htmlmin: { // Task 
            dist: { // Target 
                options: { // Target options 
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files 
                    'dist/index.html': 'src/index.html', // 'destination': 'source' 
                }
            }
        }
    });

    grunt.registerTask('default', [
        'critical',
        'uglify',
        'copy',
        'imagemin',
        'htmlmin'
    ]);
};