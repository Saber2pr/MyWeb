require.config({

    baseUrl: '../js',

    paths: {

        sql: 'plugin/sql',

        sqlTool: 'database/sqlTool',

        database : 'database/database',

        progressBar : 'showTools/progressBar'

    },

    shim: {

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