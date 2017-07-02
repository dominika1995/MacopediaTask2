var modal = document.getElementById('box');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("map__box--content--close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    getLocation();
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var lat=position.coords.latitude
    var lng = position.coords.longitude;

    var posit = {lat: lat, lng:lng};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: posit
    });

    var marker = new google.maps.Marker({
        position: posit,
        map: map,
    });

}