
//my entries INITIALIZED or declared..not sure.
let myEntries = [];

//I don't know what this is for.
const myEntry = {
    myCharacter: characterName,
    mySong: songName,
    listened: listened
};

//make a table upon loading. 
function makeTable() {
    //associate entries with variable.
    myEntry.myCharacter = document.getElementById("characterName").value; 
    myEntry.mySong = document.getElementById("songName").value;
    myEntry.listened = document.getElementById("listened").checked ? "Yes" : "No";

    //make table element based off div id location in html
    const theTable = document.getElementById("myTable");

    //assign variable to ID touhou table (then test if it exists)
    let aTable = document.getElementById("touhouTable");

    if(!aTable) {
        //create a table to be used
        aTable = document.createElement("table")
        //assign an id to created table
        aTable.id = "touhouTable";

        //create header row
        const headerRow = document.createElement("tr");
    
        //add titles to the header cells
        let header1 = document.createElement("th");
        header1.textContent = "song";

        let header2 = document.createElement("th");
        header2.textContent = "character";

        let header3 = document.createElement("th");
        header3.textContent = "listened?";

        //add the table data to each header
        headerRow.appendChild(header1);
        headerRow.appendChild(header2);
        headerRow.appendChild(header3);

        //add the row to the table
        aTable.appendChild(headerRow);
        theTable.appendChild(aTable);
    }
    //assign entry to row and add row to table. (reference function below)
    let row = addTableRow(myEntry);
    aTable.appendChild(row);


    //theTable.appendChild(aTable);
}

//add a row to table
function addTableRow(myEntry) {
    //when button is clicked, make a row
    const row = document.createElement("tr");

    //add data to row
    let tableData1 = document.createElement("td");
    tableData1.textContent = myEntry.mySong;

    let tableData2 = document.createElement("td");
    tableData2.textContent = myEntry.myCharacter;

    let tableData3 = document.createElement("td");
    tableData3.textContent = myEntry.listened;

    //add the data to each row
    row.appendChild(tableData1);
    row.appendChild(tableData2);
    row.appendChild(tableData3);

    //send this row to makeTable function
    return row;
}

//handle the submit button
document.getElementById("addToTable").onclick = function(){
    makeTable();
};