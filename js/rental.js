var apcDailyPrice = 15.00;
var tankDailyPrice = 20.00;
var helicopterDailyPrice = 35.00;
var saucerDailyPrice = 40.00;
var dailyVehiclePrice = 0.00;
var numberOfDays = 5;
var optionsPrice = 0;
var selectedOnce = 0;
var totalPrice = 0;

function vehicleSelected(vehicle) {
    switch (vehicle.id) {
        case "apc":
            dailyVehiclePrice = apcDailyPrice;
            break;
        case "helicopter":
            dailyVehiclePrice = helicopterDailyPrice;
            break;
        case "tank":
            dailyVehiclePrice = tankDailyPrice;
            break;
        case "saucer":
            dailyVehiclePrice = saucerDailyPrice;
            break;
    }

    if (selectedOnce === 0) {
        selectedOnce++;

        var optionsListTitle = document.createElement('h4');
        var optionsList = document.createElement('li');
        optionsList.className = ("rentalCostsOptionsList");

        var roofRackLabel = document.createElement('label');
        roofRackLabel.innerText = "Roof Rack";
        var roofRackCheck = document.createElement('input');
        roofRackCheck.type = "checkbox";
        roofRackCheck.name = "roofRackCheck";
        roofRackCheck.addEventListener("click", optionSelected);
        roofRackCheck.id = "roofRackCheck";

        var gpsLabel = document.createElement('label');
        gpsLabel.innerText = "GPS";
        var gpsCheck = document.createElement('input');
        gpsCheck.type = "checkbox";
        gpsCheck.name = "gpsCheck";
        gpsCheck.addEventListener("click", optionSelected);
        gpsCheck.id = "roofRackCheck";

        var seatLabel = document.createElement('label');
        seatLabel.innerText = "Extra Seat";
        var seatCheck = document.createElement('input');
        seatCheck.type = "checkbox";
        seatCheck.name = "seatCheck";
        seatCheck.addEventListener("click", optionSelected);
        seatCheck.id = "seatCheck";

        roofRackLabel.appendChild(roofRackCheck);
        gpsLabel.appendChild(gpsCheck);
        seatLabel.appendChild(seatCheck);

        optionsList.appendChild(roofRackLabel);
        optionsList.appendChild(gpsLabel);
        optionsList.appendChild(seatLabel);

        var numberOfDaysLabel = document.createElement('label');
        numberOfDaysLabel.innerText = "Days to Rent:";
        var numberOfDaysInput = document.createElement('input');
        numberOfDaysInput.id = "numberOfDays";
        numberOfDaysInput.type = "number";
        numberOfDaysInput.value = 5;
        numberOfDaysInput.min = "1";
        numberOfDaysInput.max = "30";

        numberOfDaysLabel.appendChild(numberOfDaysInput);
        optionsList.appendChild(numberOfDaysLabel);

        totalPrice = document.createElement('h3');
        totalPrice.id = "totalPrice";

        totalPrice.innerText = "Total Rental Cost = $" + ((dailyVehiclePrice + optionsPrice) * numberOfDays);
        optionsList.appendChild(totalPrice);

        document.getElementById("rentalCostDiv").appendChild(optionsList);
        document.getElementById("numberOfDays").addEventListener("click", updateRentalDays);
    }
    totalPrice.innerText = "Total Rental Cost = $" + ((dailyVehiclePrice + optionsPrice) * numberOfDays);
}

function optionSelected() {
    optionsPrice = 0;
    if ($('input[name="roofRackCheck"]').filter(':checked').length > 0) {
        optionsPrice += 5;
    }
    if ($('input[name="gpsCheck"]').filter(':checked').length > 0) {
        optionsPrice += 10;
    }
    updatePrice();
}

function updateRentalDays(){
    numberOfDays = document.getElementById("numberOfDays").value;
    console.log(document.getElementById("numberOfDays").value);
    updatePrice();
}

function updatePrice() {
    totalPrice.innerText = "Total Rental Cost = $" + ((dailyVehiclePrice + optionsPrice) * numberOfDays);
}