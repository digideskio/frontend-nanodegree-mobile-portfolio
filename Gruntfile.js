module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');


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
                    
                    {expand: true, cwd: 'src/', src: ['views/**', 'img/**'], dest: 'dist/'},
                   
                ],
            },
        }
    });

    grunt.registerTask('default', [
        'critical',
        'uglify',
        'copy'
    ]);
};