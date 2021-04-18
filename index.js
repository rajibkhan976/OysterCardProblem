document.onreadystatechange = function () {
	if (document.readyState === "complete") {
		var balance = 0;
		const maximumFare = 3.20;
		var load = Number.parseFloat(window.prompt("How much do you want to load in your card?", 0).trim(), 2);
		if (load) {
			balance = load;
		}
		var passedInwardBarrier = false;
		var checkInwardBarrier = window.prompt("Do you want to travel by train and pass inward barrier?", "No")?.trim()?.toLowerCase();
		if (checkInwardBarrier && checkInwardBarrier === 'yes') {
			passedInwardBarrier = true;
			balance = balance > 0  && balance >= maximumFare ? balance - maximumFare : balance;
		} else {
			passedInwardBarrier = false;
		}
		var trainFare = 0;
		var busFare = 0;
		var destinations = [];
		var swipeOut = "no";
		while(passedInwardBarrier) {
			var destination = window.prompt("What is your destination?")?.trim()?.toLowerCase();
			if (destination) {
				if (destination !== "earl’s court") {
					destinations.push(destination);
				} else {
					let zone = window.prompt("Please specify the zone:", 1)?.trim()?.toLowerCase();
					if (zone && zone == 1) {
						destinations.push("earl’s court 1");
					}
					if (zone && zone == 2) {
						destinations.push("earl’s court 2");
					}
				}
			}
			var checkBusJourney = window.prompt("Will you journey by bus?", "No")?.trim()?.toLowerCase();
			if (checkBusJourney && checkBusJourney === "yes") {
				busFare += 1.8;
			}
			var checkTravelFrequency = window.prompt("Do you want to go anywhere else?", "No")?.trim()?.toLowerCase();
			if (checkTravelFrequency && checkTravelFrequency === "no") {
				swipeOut = window.prompt("Did you swipe out?",  "No")?.trim()?.toLowerCase();
				passedInwardBarrier = false;
			}
		}
		if (swipeOut === "yes" && destinations.length !== 0) {
				if (destinations.includes("holborn") || 
					destinations.includes("earl’s court 1") &&
					destinations.length === 1) {
						trainFare += 2.5;
					} else if (destinations.length === 1 && 
						!destinations.includes("holborn") && 
						!destinations.includes("earl’s court 1")) {
						trainFare += 2;
					} else if (destinations.includes("holborn") || 
						destinations.includes("earl’s court 1") &&
						destinations.length === 2) {
						trainFare += 3;
					} else if (destinations.length === 2 && 
						!destinations.includes("holborn") && 
						!destinations.includes("earl’s court 1")) {
						trainFare += 2.25;
					} else if (destinations.length === 3) {
						trainFare += 3.20;
					}
				balance = balance - trainFare - busFare + maximumFare;
			} else {
				balance = balance - busFare;
			}
		alert(`Your balance is ${balance.toFixed(2)}`);
	} 
}