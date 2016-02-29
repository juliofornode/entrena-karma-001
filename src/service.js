(function () {

    "use strict";

    angular.module('omdbModule', [])
        .factory('omdbAPI', function () {

            var search = function (query) {
                return movieData;
            };

            return {
                search: search
            }


        })


}());