require.config({

    paths: {

        jquery: 'https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js',

        bootstrap: 'https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js',

        sql: 'plugin/sql',

        sqlTool: 'plugin/sqlTool',

        database : 'database'

    },

    shim: {

        bootstrap: {

            deps: ['jquery']

        },

        database: {

            init: function () {

                return {

                    'submit': submit,

                    'showAllTables': showAllTables

                }

            }

        }

    }

});