var app = angular.module("mboutiqueApp", ["ngRoute"]);

app.config(function($routeProvider){
   $routeProvider
       .when("/", {
           templateUrl: "welcome.html",
           controller: "mainController"
       })
       .when("/our_macarons", {
           templateUrl: "our_macarons.html",
           controller: "macaroonsController"
       })
       .when("/gifts_parties", {
           templateUrl: "gifts_parties.html",
           controller: "giftsController"
       })
       .when("/contact", {
           templateUrl: "contact.html",
           controller: "contactController"
       })
       .otherwise({
           redirectTo: "/"
       });
});

app.controller("mainController", function(){

});
app.controller("macaroonsController", function(){

});
app.controller("giftsController", function(){

});
app.controller("contactController", function(){

});
