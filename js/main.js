require.config({

    baseUrl: '../js',

    paths: {

        jquery: 'https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js',

        bootstrap: 'https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js',

        sql: 'plugin/sql',

        sqlTool: 'database/sqlTool',

        database : 'database/database',

        progressBar : 'showTools/progressBar'

    },

    shim: {

        bootstrap: {

            deps: ['jquery']

        },

        database: {

            init: function () {

                return {

                    submit: 'submit',

                    showAllTables: 'showAllTables'

                }

            }

        },

        progressBar: {

            export : 'proStart'

        }

    }

});