(function () {

    "use script";

    describe('Movie Data Service', function () {

        var idData = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"349","imdbID":"tt0251413","Type":"game","Response":"True"};
        var movieData = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"349","imdbID":"tt0251413","Type":"game","Response":"True"};
        var omdbAPI = {};

        beforeEach(module('omdb'));

        //we use _underscores_ to avoid name conflict
        beforeEach(inject(function (_omdbAPI_) {
            omdbAPI = _omdbAPI_;
        }));

        it('should return the movie searched', function () {
            //testing angular.mock.dump
            console.log(angular.mock.dump(movieData));
            expect(omdbAPI.search('Star Wars')).toEqual(movieData);
            /* alternative approach defining the module and the component using an anonymous function

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

             */
            /* alternative approach using the anonymous function

                 angular.mock.module({
                 omdbAPI: {
                 search: function (query) {
                 return movieData;}
                 }
                 });

             */
        });

        it('should return the id searched', function () {
            //testing dump function (same as console.log)
            dump('---------- This is printed by the dump function -----------');
            expect(omdbAPI.searchID('Star Wars')).toEqual(idData);
        })


    })


}());