function compareUnis() {
    var uni1 = document.getElementById("uni1").value;
    var uni2 = document.getElementById("uni2").value;

    if (uni1 == "Select University" || uni2 == "Select University") {
        alert("please select a university");
        return;
    }

    var results = "";

    if (uni1 == "auckland") {
        results += "Auckland - Rank: 65, Fees: $8200 <br>";
    } else {
        results += "Waikato - Rank: 301, Fees: $7100 <br>";
    }

    if (uni2 == "auckland") {
        results += "Auckland - Rank: 65, Fees: $8200 <br>";
    } else {
        results += "Waikato - Rank: 301, Fees: $7100 <br>";
    }

    document.getElementById("resultsBox").innerHTML = results;
}