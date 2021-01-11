'use strict';

var workhours = ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm ', '6 pm ', '7 pm ', '8 pm '];

var Main = document.getElementById('main');
var tabletag = document.createElement('table');  // Create table.
var trtag = document.createElement('tr');        // Create tr.
var thtag = document.createElement('th');        // Create tr blank.
var tdtag;
Main.appendChild(tabletag);
tabletag.appendChild(trtag);
trtag.appendChild(thtag);

for (var x = 0; x < workhours.length; x++) {
    thtag = document.createElement('th');     // Creat th for workhours.
    trtag.appendChild(thtag);
    thtag.textContent = workhours[x];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };


function EnterBranch(branshName, minCustPerhour, maxCustPerhour,avgCookisPerhout){
    this.location = branshName;
    this.totalCookies = 0;
    this.minCustPerhour = minCustPerhour;
    this.maxCustPerhour = maxCustPerhour;
    this.avgCookisPerhout = avgCookisPerhout;
    this.cookiesPerhour = [];
    this.custmersPerhour = [];
    this.calculateCustomersPerhour = function(){
        for(var i=0; i<14; i++){
            var CustmerPerhour=getRandomInt(this.minCustPerhour, this.maxCustPerhour);
            this.custmersPerhour.push(CustmerPerhour)[i];
        }  
      };
    this.calculateCookiesPerhour = function(){
        for(var j=0; j<14; j++){
            var CookiePerhour=Math.ceil(this.custmersPerhour[j]*this.avgCookisPerhout);
            this.cookiesPerhour.push(CookiePerhour)[j];
            this.totalCookies = this.totalCookies + this.cookiesPerhour[j];
        }
      };
    this.tableResult= function () {
        var tdtag;
        trtag = document.createElement('tr');
        tabletag.appendChild(trtag);
        tdtag = document.createElement('td');
        trtag.appendChild(tdtag);
        tdtag.textContent = this.location;
        for (var l = 0; l<14; l++) {
            tdtag = document.createElement('td');
            trtag.appendChild(tdtag);
            tdtag.textContent = this.cookiesPerhour[l];
        }
        tdtag = document.createElement('td');
        trtag.appendChild(tdtag);
        tdtag.textContent = this.totalCookies;
    }
};  
  

var Seattle = new EnterBranch('Seattle', 23, 65, 6.3)
Seattle.calculateCustomersPerhour();
Seattle.calculateCookiesPerhour();
Seattle.tableResult();

var Tokyo = new EnterBranch('Tokyo', 3, 24, 1.2)
Tokyo.calculateCustomersPerhour();
Tokyo.calculateCookiesPerhour();
Tokyo.tableResult();

var Dubai = new EnterBranch('Dubai', 11, 38, 3.7)
Dubai.calculateCustomersPerhour();
Dubai.calculateCookiesPerhour();
Dubai.tableResult();

var Paris = new EnterBranch('Paris', 20, 38, 2.3)
Paris.calculateCustomersPerhour();
Paris.calculateCookiesPerhour();
Paris.tableResult();

var Lima = new EnterBranch('Lima', 2, 16, 4.6)
Lima.calculateCustomersPerhour();
Lima.calculateCookiesPerhour();
Lima.tableResult();
