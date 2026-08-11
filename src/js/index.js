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


// Block of code is commented out to the test the new version of the code 

function compareUnis() {
    var uni1 = document.getElementById("uni1").value;
    var uni2 = document.getElementById("uni2").value;

    if (uni1 == "Select University" || uni2 == "Select University") {      // (A clause for when the User does a invalid input the Alert is baked intro vanilla js)
        alert("please select a university");
        return;
    }
                                                               // This block of code is just pretty much hard coded data 
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
        results += "Bede score 1 MILLION (ALEX LAM ATTENDS) (ULTRA GAY) ";
        results += "International Students: Yes <br>";
    }

    document.getElementById("resultsBox").innerHTML = results;
}



 const sliderImgs = document.querySelectorAll('.hero img'); // Takes all of the IMG elements from the html in side of the hero 
 
 
 //MUST BE HERO IMAGE DO NOT JUST PUT IMAGE HERE 

const sliderDots = document.querySelectorAll('.dot');    // This block sends a timer and counts eaach image inside of the carosell 
let currentSlide = 0;

setInterval(() => {                                   // this block adds and removes the active class which changes the opascity of the images, adding plus one to the conter 
                                                        // in realtion to the timer as well
    sliderImgs[currentSlide].classList.remove('active');
    sliderDots[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % sliderImgs.length;

    sliderImgs[currentSlide].classList.add('active');
    sliderDots[currentSlide].classList.add('active');
}, 3000);


// Followed js turoial cCo
// const universities = {
//     auckland: {
//         name: "University of Auckland",
//         degree: "Bachelor of Commerce (BCom)",
//         fees: 8200,
//         feesWin: false,
//         employmentRate: 89,
//         employmentRateWin: true,
//         avgSalary: 58000,
//         avgSalaryWin: true
//     },
//     waikato: {
//         name: "University of Waikato",
//         degree: "Bachelor of Management Studies (BMS)",
//         fees: 7100,
//         feesWin: true,
//         employmentRate: 85,
//         employmentRateWin: false,
//         avgSalary: 54000,
//         avgSalaryWin: false
//     }
// };


// const fields = [
//     { key: "degree", label: "Degree" },
//     { key: "fees", label: "Annual Fees", format: v => "$" + v.toLocaleString() },
//     { key: "employmentRate", label: "Employment Rate", format: v => v + "%" },
//     { key: "avgSalary", label: "Avg. Graduate Salary", format: v => "$" + v.toLocaleString() }
// ];

// function buildCard(self) {
//     let rows = "";

//     fields.forEach(field => {
//         const displayVal = field.format ? field.format(self[field.key]) : self[field.key];
//         const isWinner = self[field.key + "Win"] === true;

//         rows += `<div class="spec-row">
//             <span class="spec-label">${field.label}</span>
//             <span class="spec-value ${isWinner ? 'win' : ''}">${displayVal}</span>
//         </div>`;
//     });

//     return `<article class="university-box">
//         <h3>${self.name}</h3>
//         ${rows}
//     </article>`;
// }
