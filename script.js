// Student Grade Generator
function getGrade(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid marks. Please enter a number between 0 and 100.";
    } else if (marks > 79) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}

function showGrade() {
    let marks = document.getElementById("marksInput").value;
    document.getElementById("gradeOutput").innerText = `Grade: ${getGrade(marks)}`;
}

// Speed Detector
function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if (speed < speedLimit) {
        return "Ok";
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
        return demeritPoints > 12 ? "License suspended" : `Points: ${demeritPoints}`;
    }
}

function showSpeedResult() {
    let speed = document.getElementById("speedInput").value;
    document.getElementById("speedOutput").innerText = speedDetector(speed);
}

// Net Salary Calculator
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = Number(basicSalary) + Number(benefits);

    let tax = grossSalary <= 24000 ? grossSalary * 0.1 :
              grossSalary <= 32333 ? grossSalary * 0.25 :
              grossSalary * 0.3;

    let nhif = grossSalary <= 5999 ? 150 :
               grossSalary <= 7999 ? 300 :
               grossSalary <= 11999 ? 400 :
               grossSalary <= 14999 ? 500 :
               grossSalary <= 19999 ? 600 :
               grossSalary <= 24999 ? 750 :
               grossSalary <= 29999 ? 850 :
               grossSalary <= 34999 ? 900 :
               grossSalary <= 39999 ? 950 :
               grossSalary <= 44999 ? 1000 :
               grossSalary <= 49999 ? 1100 :
               grossSalary <= 59999 ? 1200 :
               grossSalary <= 69999 ? 1300 :
               grossSalary <= 79999 ? 1400 :
               grossSalary <= 89999 ? 1500 :
               grossSalary <= 99999 ? 1600 : 1700;

    let nssf = grossSalary * 0.06;

    let netSalary = grossSalary - (tax + nhif + nssf);

    return { grossSalary, tax, nhif, nssf, netSalary };
}

function showNetSalary() {
    let basicSalary = document.getElementById("salaryInput").value;
    let benefits = document.getElementById("benefitsInput").value;

    let salaryDetails = calculateNetSalary(basicSalary, benefits);
    
    document.getElementById("salaryOutput").innerText = 
        `Gross Salary: ${salaryDetails.grossSalary} | Tax: ${salaryDetails.tax} | NHIF: ${salaryDetails.nhif} | NSSF: ${salaryDetails.nssf} | Net Salary: ${salaryDetails.netSalary}`;
}