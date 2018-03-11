module.exports = function(grunt)
{
    grunt.initConfig({
        sass: {
            options: {
                style: 'compressed',
                sourcemap: 'none'
            },

            dist: {
                files: {
                    'Dist/FullscreenTheme/asset/css/theme.min.css': 'Src/FullscreenTheme/asset/css/theme.scss'
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'Dist/FullscreenTheme/asset/js/app.min.js': 'Src/Common/js/*.js'
                }
            }
        },

        copy: {
            dist: {
                files: {
                    'Dist/FullscreenTheme/index.html': 'Src/FullscreenTheme/index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', [
        'sass',
        'uglify',
        'copy'
    ]);
};