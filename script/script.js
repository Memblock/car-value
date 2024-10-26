function msg() {

    //assign input values to an array
    const aIn = [];
    aIn[0] = parseInt(document.getElementById('IDfyear').value);
    aIn[1] = parseInt(document.getElementById('IDayear').value);
    aIn[2] = parseInt(document.getElementById('IDdistance').value);
    aIn[3] = parseInt(document.getElementById('IDold').value);
    aIn[4] = parseInt(document.getElementById('IDvalasnew').value);

    var iPfirst = aIn[0] / 100;
    var iPYearly = aIn[1] / 100;
    //Determine iteration steps by how old the car is
    var end = aIn[3] + 1;

    //iteration
    var decCarPrice;
    for (let i = 1; i < end; i++) {
        if (i == 1) {
            decCarPrice = (1 - iPfirst) * aIn[4];
            //alert(decCarPrice);
        } else {
            decCarPrice = decCarPrice = (1 - iPYearly) * decCarPrice;
            //alert(Math.round(decCarPrice));
        }
    }

    //Determine suggested values depending on travel distance
    var iDisPerYear = aIn[2] / aIn[3];
    //alert("årliga mil är " + Math.round(iDisPerYear));
    var iFactor = iDisPerYear / 2000
    var iSugAdjust;
    if (iDisPerYear > 2000) { iSugAdjust = 15 + Math.round(iFactor); }
    if (iDisPerYear < 2000) { iSugAdjust = 15 - Math.round(iFactor); }
    //alert("förelagen ändring på årlig minskning är " + iSugAdjust)

    document.getElementById("results").innerHTML = "Framräknat slutpris: " + Math.round(decCarPrice);
    document.getElementById("results1").innerHTML = "Mil per år: " + Math.round(iDisPerYear);
    document.getElementById("results2").innerHTML = "Föreslagen minskning per år : " + Math.round(iSugAdjust) + "%";
    
}