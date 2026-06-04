function msg() {

    //assign input values to an array
    const inputValues = [];
    inputValues[0] = parseInt(document.getElementById('IDfyear').value);
    inputValues[1] = parseInt(document.getElementById('IDayear').value);
    inputValues[2] = parseInt(document.getElementById('IDdistance').value);
    inputValues[3] = parseInt(document.getElementById('IDold').value);
    inputValues[4] = parseInt(document.getElementById('IDvalasnew').value);

    var firstYearDeprecationRate = inputValues[0] / 100;
    var yearlyDeprecationRate = inputValues[1] / 100;
    //Determine iteration steps by how old the car is
    var numberOfYears = inputValues[3] + 1;

    //iteration
    var currentValue;
    for (let i = 1; i < numberOfYears; i++) {
        if (i == 1) {
            currentValue = (1 - firstYearDeprecationRate) * inputValues[4];
            //alert(currentValue);
        } else {
            currentValue = (1 - yearlyDeprecationRate) * currentValue;
            //alert(Math.round(currentValue));
        }
    }

    //Determine suggested values depending on travel distance
    var averageMileagePerYear = inputValues[2] / inputValues[3];
    //alert("årliga mil är " + Math.round(averageMileagePerYear));
    var mileageFactor  = (averageMileagePerYear - 2000) / 2000
    var suggestedDeprecationRate = 15 + (mileageFactor * 5);
    
    document.getElementById("results").innerHTML = "Framräknat slutpris: " + Math.round(currentValue);
    document.getElementById("results1").innerHTML = "Mil per år: " + Math.round(averageMileagePerYear);
    document.getElementById("results2").innerHTML = "Föreslagen minskning per år : " + Math.round(suggestedDeprecationRate) + "%";
    
}