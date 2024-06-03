angular.module('SilverCountdownApp', [])
.controller('CountdownController', function($scope, $interval) {
    var countdownCtrl = this;

    var countdownDate = new Date('March 8, 2025 07:30:00').getTime();

    var updateCountdown = function() {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownCtrl.countdown = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    };

    updateCountdown();
    $interval(updateCountdown, 1000);
});
