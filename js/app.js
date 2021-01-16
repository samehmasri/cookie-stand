'use strict';

var hours = ["6:00am", "7:00am", "8:00am", " 9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm"];
var locationArray = [];





function Location(min, max, average, name) {
    this.minCustomers = min;
    this.maxCustomers = max;
    this.averageCookiesSold = average;
    this.locationName = name;
    this.cookiesPerHour = [];
    this.total = 0;
    locationArray.push(this);
}
function randomNumOfCustomers(minimum, maximum) {
    return Math.floor((Math.random() * (maximum - minimum) + minimum));
    
}
// function to generate a reandom number of customers each hour
Location.prototype.numOfCustomers = function () {
   // return randomNumOfCustomers(this.minCustomers, this.maxCustomers);
   console.log((Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
   return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;

}
// function for creating an array of cookies sold per hour
Location.prototype.calAverCookiePerHour = function () {
    //var cookiesPerHour = [];
    for (var i = 0; i < hours.length; i++) {
        this.cookiesPerHour.push(Math.floor(this.numOfCustomers() * this.averageCookiesSold));
    }

    // this.cookiesPerHour= cookiesPerHour;
}
//creating table of data as a method of the object
Location.prototype.renderLocationInTable = function () {
    var parentElement = document.getElementsByTagName('table');
    //console.log(parentElement);

    var tableSecondRow = document.createElement('tr');
    parentElement[0].appendChild(tableSecondRow);
    var nameOfLoction = document.createElement('td');
    nameOfLoction.textContent = this.locationName;
    tableSecondRow.appendChild(nameOfLoction);

    this.calAverCookiePerHour();

    for (var i = 0; i < hours.length; i++) {
        var tableData = document.createElement('td');
        tableData.textContent = this.cookiesPerHour[i]; // here is the problem
        tableSecondRow.appendChild(tableData);
        this.total += this.cookiesPerHour[i];
    }

    var dailyTotal = document.createElement('td');
    dailyTotal.textContent = this.total;
    tableSecondRow.appendChild(dailyTotal);
}
//=====================================================================================================
//creating an object for each location from the constructor
var seattle = new Location(23, 65, 6.3, 'Seattle')
//console.log(seattle);
var tokyo = new Location(3, 24, 1.2, 'Tokyo');
//console.log(tokyo);
var dubai = new Location(11, 38, 3.7, 'Dubai');
//console.log(dubai);
var paris = new Location(20, 38, 2.3, 'Paris');
//console.log(paris);
var lima = new Location(2, 16, 4.9, 'Lima');
//console.log(lima);

//========================================================================================================================
//Calling the functions to create the table:
createTable();
firstHeaderRender();
for (var index = 0; index < locationArray.length; index++) {
    locationArray[index].renderLocationInTable();
}
lastRender();
//====================================================================================================
//Functions:

//Writing HTML code
//creating a table
function createTable() {
    var parentElement = document.getElementById("TableOfData");
    //console.log(parentElement);
    var article = document.createElement('article');
    parentElement.appendChild(article);
    var h2 = document.createElement('h2');
    h2.textContent = "Locations: ";
    article.appendChild(h2);
    // start of the table
    var table = document.createElement('table');
    table.setAttribute("id", "salamonCookieTable")
    article.appendChild(table);
}
//Header Row:
function firstHeaderRender() {
    // adding headings (first row)
    var parentElement = document.getElementsByTagName('table');
    var tableFirstRow = document.createElement('tr');
    parentElement[0].appendChild(tableFirstRow);

    var headerEmpty = document.createElement('th');
    headerEmpty.textContent = 'Location';
    tableFirstRow.appendChild(headerEmpty);

    for (var i = 0; i < hours.length; i++) {
        var header = document.createElement('th');
        header.textContent = hours[i];
        tableFirstRow.appendChild(header);
    }
    var headerDailyTotal = document.createElement('th');
    headerDailyTotal.textContent = 'Daily Location Total';
    tableFirstRow.appendChild(headerDailyTotal);
}
// creating the final row
function lastRender() {
    var parentElement = document.getElementsByTagName('table');
    var tableFinalRow = document.createElement('tr');

    
    parentElement[0].appendChild(tableFinalRow);
    var dataCell = document.createElement('td');
    dataCell.textContent = 'Totals';
    tableFinalRow.appendChild(dataCell);

    var finalTotal = 0;

    for (var i = 0; i < hours.length; i++) { 
        var totalLocationPerHour = 0;
        var hourDataCell = document.createElement('td');
        for (var j = 0; j < locationArray.length; j++) {
            totalLocationPerHour += locationArray[j].cookiesPerHour[i];
        }

        
        hourDataCell.textContent = totalLocationPerHour;
        tableFinalRow.appendChild(hourDataCell);
        finalTotal += totalLocationPerHour;
    }
    var totalDataCell = document.createElement('td');
    totalDataCell.textContent = finalTotal;
    tableFinalRow.appendChild(totalDataCell);
}

//Creating a listener
var addLocationInfo = document.getElementById("eventid")
eventid.addEventListener('submit', function (event) {
    event.preventDefault();
    var locationNameNew = event.target.locationNamename.value;
    var minCustomersNew = event.target.minCustomerName.value;
    var maxCustomersNew = event.target.maxCustomerName.value;
    var averageCookiesSoldNew = event.target.AvrCookiesidName.value;

    var addingLocation = new Location(minCustomersNew, maxCustomersNew, averageCookiesSoldNew, locationNameNew);
    console.log(addingLocation);

    deleteRow();
    addingLocation.renderLocationInTable();
    lastRender() 
    
    console.log(addingLocation);
});


function deleteRow(){
   document.getElementById("salamonCookieTable").deleteRow(-1);

}