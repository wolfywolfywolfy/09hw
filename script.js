let position = 0; 

//display first item in list (first equation)
//window.onload = function() {
    //displayEquation(0);
    //document.getElementById("clickPrev").disabled = true;
//}

//my entries INITIALIZED or declared..not sure.
let myEntries = [];

const myEquation = document.getElementById("equationName").value; 
const subject = document.getElementById("subjectName").value;
const studied = document.getElementById("studied").checked;

const myEntry = {
    myEquation: equation,
    subject: subject,
    studied: studied
};

//display table
function displayTable() {
    //make new row after each button click
    
}

//make a table
function makeTable() {
    //make table element based off id in html
    const theTable = document.getElementById("myTable");
}

//add a row to table
function addTableRow() {
    //when button is clicked, make a row
    const row = document.createElement("tr");
}

//display the table


//handle the submit button