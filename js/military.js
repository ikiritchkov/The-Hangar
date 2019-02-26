var militaryData;
var data;

$(document).ready(function() {
    showCurrentTime();
    setInterval(showCurrentTime, 1000);
    data = militaryData;
    var searchResult = data.filter(function (person) {
        createSearchRecord(person);
    });
});

function createSearchRecord(person) {
    var record = document.createElement('li');
    record.className = "lastNamesDisplayLi";
    record.innerText = person.last_name;
    record.addEventListener("click", showNextPage);
    document.getElementById("lastNamesResults").appendChild(record);
}

function showNextPage() {
    var currentlySelected = document.getElementsByClassName("lastNamesDisplaySelected");
    if (currentlySelected.length > 0) {
        currentlySelected[0].classList.remove("lastNamesDisplaySelected");
    }
    this.classList.add("lastNamesDisplaySelected");
    var audio = new Audio('photo/carstartgarage');
    audio.play();
    $("#enterTheHangar").removeClass("enterTheHangarHidden");
    $("#enterTheHangar").addClass("enterTheHangarShow");
}

function lastNameSearch(searchLastName) {
    $("#enterTheHangar").addClass("enterTheHangarHidden");
    $("#enterTheHangar").removeClass("enterTheHangarShow");
    $("#lastNamesResults").empty();
    var searchResult = data.filter(function(person) {
        var lastName = person.last_name;
        if (lastName.toUpperCase().match("^" + searchLastName.value.toUpperCase())) {
            console.log(lastName + " " + searchLastName.value.toUpperCase());
            createSearchRecord(person);
        }
    });
    var audio = new Audio('photo/typewriter-key-1.mp3');
    audio.play();
}

function goToNextPage() {
    var audio = new Audio('photo/cars044');
    audio.play();
    setTimeout(function () {
        window.location.href = "rental.html";
    }, 3500);
}

function showCurrentTime() {
    $("#currentTime").html("Current Time: " + new Date().toLocaleString());
}