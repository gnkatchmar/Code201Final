document.getElementById("dropdown").addEventListener("change", getIndex);

function getIndex() {
	// clears table
	var tableContainer = document.getElementById("restaurantListTable");
	tableContainer.innerHTML = "";
	
    var selectDropDown = document.getElementById("dropdown");
	var userSelectTime = selectDropDown.options[selectDropDown.selectedIndex].text;
	
	// check if SE is checked or not, if yes set the variable to "SE"
	var SEboxChecked = document.getElementById("cb0").checked;
	if (SEboxChecked == true){
		var SEboxTrue = "SE";
	}
	// check if NE is checked or not, if yes set the variable to "NE"
	var NEboxChecked = document.getElementById("cb1").checked;
	if (NEboxChecked == true){
		var NEboxTrue = "NE";
	}		
	// check if SW is checked or not, if yes set the variable to "SW"
	var SWboxChecked = document.getElementById("cb2").checked;
	if (SWboxChecked == true){
		var SWboxTrue = "SW";
	}
	// if SE is selected print out se restaurants
	for (var index = 0; index < brunchArr.length; index++) {
	        var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd == SEboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
	
			var currentRestaurant = brunchArr[index];
			currentRestaurant.addInfo();
		}
	}
	// if NE is selected print out ne restaurants
	for (var index = 0; index < brunchArr.length; index++) {
			var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd == NEboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			var currentRestaurant = brunchArr[index];
			currentRestaurant.addInfo();
		}
	}
	// if SW is selected print out sw restaurants
	for (var index = 0; index < brunchArr.length; index++) {
			var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd == SWboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			var currentRestaurant = brunchArr[index];
			currentRestaurant.addInfo();
		}
	}	
}
