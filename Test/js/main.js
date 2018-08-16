require.config({

    baseUrl: '../js/',
    paths: {

        jquery: 'plugin/jquery-3.3.1.min',

        bootstrap: 'plugin/bootstrap.min',



    },

    shim: {

        bootstrap: {

            deps: ["jquery"]

        }

    },

    map: {



    }

});