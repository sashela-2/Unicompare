// function compareUnis() {
//     var uni1 = document.getElementById("uni1").value;
//     var uni2 = document.getElementById("uni2").value;

//     if (uni1 == "Select University" || uni2 == "Select University") {
//         alert("please select a university");
//         return;
//     }

//     var results = "";

//     if (uni1 == "auckland") {
//         results += "Auckland - Rank: 65, Fees: $8200 <br>";
//     } else {
//         results += "Waikato - Rank: 301, Fees: $7100 <br>";
//     }

//     if (uni2 == "auckland") {
//         results += "Auckland - Rank: 65, Fees: $8200 <br>";
//     } else {
//         results += "Waikato - Rank: 301, Fees: $7100 <br>";
//     }

//     document.getElementById("resultsBox").innerHTML = results;
// }

function compareUnis() {
    var uni1 = document.getElementById("uni1").value;
    var uni2 = document.getElementById("uni2").value;

    if (uni1 == "Select University" || uni2 == "Select University") {
        alert("please select a university");
        return;
    }

    var results = "";

    if (uni1 == "auckland") {
        results += "Auckland Business School <br>";
        results += "Degree: Bachelor of Commerce (BCom) <br>";
        results += "Duration: 3 years <br>";
        results += "Annual Fees: $8,200 <br>";
        results += "QS Business Rank: 201-250 <br>";
        results += "Specialisations: Accounting, Finance, Marketing, Management, Economics <br>";
        results += "Internship Programme: Yes <br>";
        results += "Graduate Employment Rate: 89% <br>";
        results += "Average Graduate Salary: $58,000 <br>";
        results += "Entry Requirement: NCEA Level 3, UE <br>";
        results += "International Students: Yes <br>";
        results += "<br>";
    } else {
        results += "Waikato Management School <br>";
        results += "Degree: Bachelor of Management Studies (BMS) <br>";
        results += "Duration: 3 years <br>";
        results += "Annual Fees: $7,100 <br>";
        results += "QS Business Rank: 301-350 <br>";
        results += "Specialisations: Management, HR, Marketing, Entrepreneurship <br>";
        results += "Internship Programme: Yes <br>";
        results += "Graduate Employment Rate: 85% <br>";
        results += "Average Graduate Salary: $54,000 <br>";
        results += "Entry Requirement: NCEA Level 3, UE <br>";
        results += "International Students: Yes <br>";
        results += "<br>";
    }

    if (uni2 == "auckland") {
        results += "Auckland Business School <br>";
        results += "Degree: Bachelor of Commerce (BCom) <br>";
        results += "Duration: 3 years <br>";
        results += "Annual Fees: $8,200 <br>";
        results += "QS Business Rank: 201-250 <br>";
        results += "Specialisations: Accounting, Finance, Marketing, Management, Economics <br>";
        results += "Internship Programme: Yes <br>";
        results += "Graduate Employment Rate: 89% <br>";
        results += "Average Graduate Salary: $58,000 <br>";
        results += "Entry Requirement: NCEA Level 3, UE <br>";
        results += "International Students: Yes <br>";
    } else {
        results += "Waikato Management School <br>";
        results += "Degree: Bachelor of Management Studies (BMS) <br>";
        results += "Duration: 3 years <br>";
        results += "Annual Fees: $7,100 <br>";
        results += "QS Business Rank: 301-350 <br>";
        results += "Specialisations: Management, HR, Marketing, Entrepreneurship <br>";
        results += "Internship Programme: Yes <br>";
        results += "Graduate Employment Rate: 85% <br>";
        results += "Average Graduate Salary: $54,000 <br>";
        results += "Entry Requirement: NCEA Level 3, UE <br>";
        results += "International Students: Yes <br>";
    }

    document.getElementById("resultsBox").innerHTML = results;
}


const sliderImgs = document.querySelectorAll(src/Images/Waikato-Photos/University_of_Waikato_village_green.jpg);
const sliderDots = document.querySelectorAll('.dot');
let currentSlide = 0;

setInterval(() => {
    sliderImgs[currentSlide].classList.remove('active');
    sliderDots[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % sliderImgs.length;

    sliderImgs[currentSlide].classList.add('active');
    sliderDots[currentSlide].classList.add('active');
}, 3000);