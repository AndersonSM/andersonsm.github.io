$(document).ready( function() {
    var end = new Date('08/13/2015 10:0 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var _month = _day * 30;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            $('#contador').text("#Partiu!!!");

            return;
        }
        var months = Math.floor(distance / _month);
        var days = Math.floor((distance / _day) % 30);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        $('#contador').text(months + " meses, " + days + " dias, " + hours + " horas, " + minutes + " minutos, " +
            seconds + " segundos");
    }

    timer = setInterval(showRemaining, 1000);
});
