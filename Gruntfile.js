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
                    'Dist/FullscreenTheme/Assets/Stylesheet/Theme.min.css': 'Src/FullscreenTheme/Assets/Stylesheet/Theme.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);
};