(function () {

    "use script";

    describe('Movie Data Service', function () {

        var movieData = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"349","imdbID":"tt0251413","Type":"game","Response":"True"};

        it('should return the movie searched', function () {

            //create the service as an empty object
            var omdbAPI = {};



            //load module, define the service omdbAPI
            angular.mock.module(function ($provide) {

                $provide.factory('omdbAPI', function () {
                    var search = function (query) {
                        return movieData;
                    };

                    return {
                        search: search
                    }

                })

            });


            /* alternative approach using the anonymous function

                 angular.mock.module({
                 omdbAPI: {
                 search: function (query) {
                 return movieData;}
                 }
                 });

             */








            //inject the service omdbAPI. To avoid name conflict, we use _ for the parameter name
            angular.mock.inject(function (_omdbAPI_) {
                omdbAPI = _omdbAPI_;
            });

            expect(omdbAPI.search('Star Wars')).toBe(movieData);

        })


    })


}());