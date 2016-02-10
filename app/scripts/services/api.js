'use strict';

/**
 * @ngdoc service
 * @name flyBuyApp.api
 * @description
 * # api
 * Service in the flyBuyApp.
 */
angular.module('flyBuyApp')
  .service('api', function ($resource, $http, apihost) {

    var airlines = $resource('http://' + apihost + '/airlines');
    var airports = $resource('http://' + apihost + '/airports');
    var Flight = $resource('http://' + apihost + '/flights');


    return {
      getAirlines: airlines,
      getAirports: airports,
      flights: Flight,
      postFlight: function(flightInfo){
        console.log(flightInfo);
        var newFlight = new Flight();
        newFlight.user_id = flightInfo.user || null;
        newFlight.flight_date = flightInfo.flightDate || null;
        newFlight.purchase_date = flightInfo.purchaseDate || null;
        newFlight.flight_number = flightInfo.flightNum || null;
        newFlight.price_paid = flightInfo.pricePaid;
        newFlight.purchase_location = flightInfo.purchaseLocation || null;
        newFlight.departure_airport_id = flightInfo.DepartureAirport.id;
        newFlight.arrival_airport_id = flightInfo.ArrivalAirport.id;
        newFlight.airline_id = flightInfo.Airline.id || null;
        newFlight.suspect = flightInfo.suspect || false;
        newFlight.$save();
      }
    };
  });
