



// function compareUnis() {
//     var uni1 = document.getElementById("uni1").value;
//     var uni2 = document.getElementById("uni2").value;

//     if (uni1 == "Select University" || uni2 == "Select University") {
//         alert("please select a university");
//         return;
//     }

//     var card1 = "";
//     var card2 = "";

//     // ---- CARD 1 ----
//     if (uni1 == "auckland") {
//         card1 = `<article class="result-card">
//             <h3>Auckland Business School</h3>
//             <div class="spec-row"><span class="spec-label">Degree</span><span class="spec-value">Bachelor of Commerce (BCom)</span></div>
//             <div class="spec-row"><span class="spec-label">Duration</span><span class="spec-value">3 years</span></div>
//             <div class="spec-row"><span class="spec-label">Annual Fees</span><span class="spec-value">$8,200</span></div>
//             <div class="spec-row"><span class="spec-label">QS Business Rank</span><span class="spec-value">201-250</span></div>
//             <div class="spec-row"><span class="spec-label">Specialisations</span><span class="spec-value">Accounting, Finance, Marketing, Management, Economics</span></div>
//             <div class="spec-row"><span class="spec-label">Internship Programme</span><span class="spec-value">Yes</span></div>
//             <div class="spec-row"><span class="spec-label">Graduate Employment Rate</span><span class="spec-value win">89%</span></div>
//             <div class="spec-row"><span class="spec-label">Average Graduate Salary</span><span class="spec-value win">$58,000</span></div>
//             <div class="spec-row"><span class="spec-label">Entry Requirement</span><span class="spec-value">NCEA Level 3, UE</span></div>
//             <div class="spec-row"><span class="spec-label">International Students</span><span class="spec-value">Yes</span></div>
//         </article>`;
//     } else {
//         card1 = `<article class="result-card">
//             <h3>Waikato Management School</h3>
//             <div class="spec-row"><span class="spec-label">Degree</span><span class="spec-value">Bachelor of Management Studies (BMS)</span></div>
//             <div class="spec-row"><span class="spec-label">Duration</span><span class="spec-value">3 years</span></div>
//             <div class="spec-row"><span class="spec-label">Annual Fees</span><span class="spec-value win">$7,100</span></div>
//             <div class="spec-row"><span class="spec-label">QS Business Rank</span><span class="spec-value">301-350</span></div>
//             <div class="spec-row"><span class="spec-label">Specialisations</span><span class="spec-value">Management, HR, Marketing, Entrepreneurship</span></div>
//             <div class="spec-row"><span class="spec-label">Internship Programme</span><span class="spec-value">Yes</span></div>
//             <div class="spec-row"><span class="spec-label">Graduate Employment Rate</span><span class="spec-value">85%</span></div>
//             <div class="spec-row"><span class="spec-label">Average Graduate Salary</span><span class="spec-value">$54,000</span></div>
//             <div class="spec-row"><span class="spec-label">Entry Requirement</span><span class="spec-value">NCEA Level 3, UE</span></div>
//             <div class="spec-row"><span class="spec-label">International Students</span><span class="spec-value">Yes</span></div>
//         </article>`;
//     }

//     // ---- CARD 2 ----
//     if (uni2 == "auckland") {
//         card2 = `<article class="result-card">
//             <h3>Auckland Business School</h3>
//             <div class="spec-row"><span class="spec-label">Degree</span><span class="spec-value">Bachelor of Commerce (BCom)</span></div>
//             <div class="spec-row"><span class="spec-label">Duration</span><span class="spec-value">3 years</span></div>
//             <div class="spec-row"><span class="spec-label">Annual Fees</span><span class="spec-value">$8,200</span></div>
//             <div class="spec-row"><span class="spec-label">QS Business Rank</span><span class="spec-value">201-250</span></div>
//             <div class="spec-row"><span class="spec-label">Specialisations</span><span class="spec-value">Accounting, Finance, Marketing, Management, Economics</span></div>
//             <div class="spec-row"><span class="spec-label">Internship Programme</span><span class="spec-value">Yes</span></div>
//             <div class="spec-row"><span class="spec-label">Graduate Employment Rate</span><span class="spec-value win">89%</span></div>
//             <div class="spec-row"><span class="spec-label">Average Graduate Salary</span><span class="spec-value win">$58,000</span></div>
//             <div class="spec-row"><span class="spec-label">Entry Requirement</span><span class="spec-value">NCEA Level 3, UE</span></div>
//             <div class="spec-row"><span class="spec-label">International Students</span><span class="spec-value">Yes</span></div>
//         </article>`;
//     } else {
//         card2 = `<article class="result-card">
//             <h3>Waikato Management School</h3>
//             <div class="spec-row"><span class="spec-label">Degree</span><span class="spec-value">Bachelor of Management Studies (BMS)</span></div>
//             <div class="spec-row"><span class="spec-label">Duration</span><span class="spec-value">3 years</span></div>
//             <div class="spec-row"><span class="spec-label">Annual Fees</span><span class="spec-value win">$7,100</span></div>
//             <div class="spec-row"><span class="spec-label">QS Business Rank</span><span class="spec-value">301-350</span></div>
//             <div class="spec-row"><span class="spec-label">Specialisations</span><span class="spec-value">Management, HR, Marketing, Entrepreneurship</span></div>
//             <div class="spec-row"><span class="spec-label">Internship Programme</span><span class="spec-value">Yes</span></div>
//             <div class="spec-row"><span class="spec-label">Graduate Employment Rate</span><span class="spec-value">85%</span></div>
//             <div class="spec-row"><span class="spec-label">Average Graduate Salary</span><span class="spec-value">$54,000</span></div>
//             <div class="spec-row"><span class="spec-label">Entry Requirement</span><span class="spec-value">NCEA Level 3, UE</span></div>
//             <div class="spec-row"><span class="spec-label">International Students</span><span class="spec-value">Yes</span></div>
//         </article>`;
//     }

//     document.getElementById("resultsBox").innerHTML = card1 + card2;
// }

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



function compareUnis() {
    var uni1 = document.getElementById("uni1").value;
    var uni2 = document.getElementById("uni2").value;

    if (uni1 == "Select University" || uni2 == "Select University") {
        alert("please select a university");
        return;
    }

    var card1 = "";
    var card2 = "";

    // ---- CARD 1 ----
    if (uni1 == "auckland") {
        card1 = `<article class="result-card">
            <h3>Auckland Business School</h3>
            <div class="spec-row"><span class="spec-label">Degree</span><span class="spec-value">Bachelor of Commerce (BCom)</span></div>
            <div class="spec-row"><span class="spec-label">Duration</span><span class="spec-value">3 years</span></div>
            <div class="spec-row"><span class="spec-label">Annual Fees</span><span class="spec-value">$8,200</span></div>
            <div class="spec-row"><span class="spec-label">QS Business Rank</span><span class="spec-value">201-250</span></div>
            <div class="spec-row"><span class="spec-label">Specialisations</span><span class="spec-value">Accounting, Finance, Marketing, Management, Economics</span></div>
            <div class="spec-row"><span class="spec-label">Internship Programme</span><span class="spec-value">Yes</span></div>
            <div class="spec-row"><span class="spec-label">Graduate Employment Rate</span><span class="spec-value win">89%</span></div>
            <div class="spec-row"><span class="spec-label">Average Graduate Salary</span><span class="spec-value win">$58,000</span></div>
            <div class="spec-row"><span class="spec-label">Entry Requirement</span><span class="spec-value">NCEA Level 3, UE</span></div>
            <div class="spec-row"><span class="spec-label">International Students</span><span class="spec-value">Yes</span></div>
        </article>`;
    } else if (uni1 == "waikato") {
        card1 = `<article class="result-card">
            <h3>Waikato Management School</h3>
            <div class="spec-row"><span class="spec-label">Degree</span><span class="spec-value">Bachelor of Management Studies (BMS)</span></div>
            <div class="spec-row"><span class="spec-label">Duration</span><span class="spec-value">3 years</span></div>
            <div class="spec-row"><span class="spec-label">Annual Fees</span><span class="spec-value win">$7,100</span></div>
            <div class="spec-row"><span class="spec-label">QS Business Rank</span><span class="spec-value">301-350</span></div>
            <div class="spec-row"><span class="spec-label">Specialisations</span><span class="spec-value">Management, HR, Marketing, Entrepreneurship</span></div>
            <div class="spec-row"><span class="spec-label">Internship Programme</span><span class="spec-value">Yes</span></div>
            <div class="spec-row"><span class="spec-label">Graduate Employment Rate</span><span class="spec-value">85%</span></div>
            <div class="spec-row"><span class="spec-label">Average Graduate Salary</span><span class="spec-value">$54,000</span></div>
            <div class="spec-row"><span class="spec-label">Entry Requirement</span><span class="spec-value">NCEA Level 3, UE</span></div>
            <div class="spec-row"><span class="spec-label">International Students</span><span class="spec-value">Yes</span></div>
        </article>`;
    } else {
        card1 = `<article class="result-card">
            <h3>Otago Business School</h3>
            <div class="spec-row"><span class="spec-label">Degree</span><span class="spec-value">Bachelor of Commerce (BCom)</span></div>
            <div class="spec-row"><span class="spec-label">Duration</span><span class="spec-value">3 years</span></div>
            <div class="spec-row"><span class="spec-label">Annual Fees</span><span class="spec-value">$7,800</span></div>
            <div class="spec-row"><span class="spec-label">QS Business Rank</span><span class="spec-value">251-300</span></div>
            <div class="spec-row"><span class="spec-label">Specialisations</span><span class="spec-value">Accounting, Finance, Marketing, Tourism, Entrepreneurship</span></div>
            <div class="spec-row"><span class="spec-label">Internship Programme</span><span class="spec-value">Yes</span></div>
            <div class="spec-row"><span class="spec-label">Graduate Employment Rate</span><span class="spec-value">87%</span></div>
            <div class="spec-row"><span class="spec-label">Average Graduate Salary</span><span class="spec-value">$56,000</span></div>
            <div class="spec-row"><span class="spec-label">Entry Requirement</span><span class="spec-value">NCEA Level 3, UE</span></div>
            <div class="spec-row"><span class="spec-label">International Students</span><span class="spec-value">Yes</span></div>
        </article>`;
    }

    // ---- CARD 2 ----
    if (uni2 == "auckland") {
        card2 = `<article class="result-card">
            <h3>Auckland Business School</h3>
            <div class="spec-row"><span class="spec-label">Degree</span><span class="spec-value">Bachelor of Commerce (BCom)</span></div>
            <div class="spec-row"><span class="spec-label">Duration</span><span class="spec-value">3 years</span></div>
            <div class="spec-row"><span class="spec-label">Annual Fees</span><span class="spec-value">$8,200</span></div>
            <div class="spec-row"><span class="spec-label">QS Business Rank</span><span class="spec-value">201-250</span></div>
            <div class="spec-row"><span class="spec-label">Specialisations</span><span class="spec-value">Accounting, Finance, Marketing, Management, Economics</span></div>
            <div class="spec-row"><span class="spec-label">Internship Programme</span><span class="spec-value">Yes</span></div>
            <div class="spec-row"><span class="spec-label">Graduate Employment Rate</span><span class="spec-value win">89%</span></div>
            <div class="spec-row"><span class="spec-label">Average Graduate Salary</span><span class="spec-value win">$58,000</span></div>
            <div class="spec-row"><span class="spec-label">Entry Requirement</span><span class="spec-value">NCEA Level 3, UE</span></div>
            <div class="spec-row"><span class="spec-label">International Students</span><span class="spec-value">Yes</span></div>
        </article>`;
    } else if (uni2 == "waikato") {
        card2 = `<article class="result-card">
            <h3>Waikato Management School</h3>
            <div class="spec-row"><span class="spec-label">Degree</span><span class="spec-value">Bachelor of Management Studies (BMS)</span></div>
            <div class="spec-row"><span class="spec-label">Duration</span><span class="spec-value">3 years</span></div>
            <div class="spec-row"><span class="spec-label">Annual Fees</span><span class="spec-value win">$7,100</span></div>
            <div class="spec-row"><span class="spec-label">QS Business Rank</span><span class="spec-value">301-350</span></div>
            <div class="spec-row"><span class="spec-label">Specialisations</span><span class="spec-value">Management, HR, Marketing, Entrepreneurship</span></div>
            <div class="spec-row"><span class="spec-label">Internship Programme</span><span class="spec-value">Yes</span></div>
            <div class="spec-row"><span class="spec-label">Graduate Employment Rate</span><span class="spec-value">85%</span></div>
            <div class="spec-row"><span class="spec-label">Average Graduate Salary</span><span class="spec-value">$54,000</span></div>
            <div class="spec-row"><span class="spec-label">Entry Requirement</span><span class="spec-value">NCEA Level 3, UE</span></div>
            <div class="spec-row"><span class="spec-label">International Students</span><span class="spec-value">Yes</span></div>
        </article>`;
    } else {
        card2 = `<article class="result-card">
            <h3>Otago Business School</h3>
            <div class="spec-row"><span class="spec-label">Degree</span><span class="spec-value">Bachelor of Commerce (BCom)</span></div>
            <div class="spec-row"><span class="spec-label">Duration</span><span class="spec-value">3 years</span></div>
            <div class="spec-row"><span class="spec-label">Annual Fees</span><span class="spec-value">$7,800</span></div>
            <div class="spec-row"><span class="spec-label">QS Business Rank</span><span class="spec-value">251-300</span></div>
            <div class="spec-row"><span class="spec-label">Specialisations</span><span class="spec-value">Accounting, Finance, Marketing, Tourism, Entrepreneurship</span></div>
            <div class="spec-row"><span class="spec-label">Internship Programme</span><span class="spec-value">Yes</span></div>
            <div class="spec-row"><span class="spec-label">Graduate Employment Rate</span><span class="spec-value">87%</span></div>
            <div class="spec-row"><span class="spec-label">Average Graduate Salary</span><span class="spec-value">$56,000</span></div>
            <div class="spec-row"><span class="spec-label">Entry Requirement</span><span class="spec-value">NCEA Level 3, UE</span></div>
            <div class="spec-row"><span class="spec-label">International Students</span><span class="spec-value">Yes</span></div>
        </article>`;
    }

    document.getElementById("resultsBox").innerHTML = card1 + card2;
}