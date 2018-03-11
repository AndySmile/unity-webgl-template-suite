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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);
};