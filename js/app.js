'use strict';

var workhours = ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm ', '6 pm ', '7 pm ', '8 pm '];

var seattle = {
    location:'Seattle Branch',
    minCustPerhour:23,
    maxCustPerhour:65,
    avgCookisPerhout:6.3,
    calculateCustomersPerhour: function() {
        for(var sc=0; sc<14; sc++){
            var seattleCustmerPerhour=getRandomInt(65, 23);
            seattle.custmersPerhour.push(seattleCustmerPerhour)[sc];

        }   
    },  
    custmersPerhour:[],
    calculateCookiesPerhour: function() {
        for(var sd=0; sd<14; sd++){
            var seattleCookiePerhour=Math.floor(seattle.custmersPerhour[sd]*6.3);
            seattle.cookiesPerhour.push(seattleCookiePerhour)[sd];
    
        }
        },
    cookiesPerhour:[],

    render: function () {
        var articleseattle = document.getElementById('seattle');
        var heading = document.createElement('h2');
        var unorderlist = document.createElement('ul');
        articleseattle.appendChild(unorderlist);
        unorderlist.appendChild(heading);
        heading.textContent = this.location
        for (var sa = 0; sa < 14; sa++) {
            var list = document.createElement('li');
            unorderlist.appendChild(list);
            list.textContent = 'At '+workhours[sa] +' We Sold '+ this.cookiesPerhour[sa] + ' Cookies';
        }
    }
};
seattle.calculateCustomersPerhour();
console.log(seattle.custmersPerhour);
seattle.calculateCookiesPerhour();
console.log(seattle.cookiesPerhour);
seattle.render();


var tokyo = {
    location:'Tokyo Branch',
    minCustPerhour:3,
    maxCustPerhour:24,
    avgCookisPerhout:1.2,
    calculateCustomersPerhour: function() {
        for(var tc=0; tc<14; tc++){
            var tokyoCustmerPerhour=getRandomInt(24, 3);
            tokyo.custmersPerhour.push(tokyoCustmerPerhour)[tc];

        }   
    },  
    custmersPerhour:[],
    calculateCookiesPerhour: function() {
        for(var td=0; td<14; td++){
            var tokyoCookiePerhour=Math.floor(tokyo.custmersPerhour[td]*1.2);
            tokyo.cookiesPerhour.push(tokyoCookiePerhour)[td];
    
        }
        },
    cookiesPerhour:[],

    render: function () {
        var articleseattle = document.getElementById('tokyo');
        var heading = document.createElement('h2');
        var unorderlist = document.createElement('ul');
        articleseattle.appendChild(unorderlist);
        unorderlist.appendChild(heading);
        heading.textContent = this.location
        for (var ta = 0; ta < 14; ta++) {
            var list = document.createElement('li');
            unorderlist.appendChild(list);
            list.textContent = 'At '+workhours[ta] +' We Sold '+ this.cookiesPerhour[ta] + ' Cookies';
        }
    }
};
tokyo.calculateCustomersPerhour();
console.log(tokyo.custmersPerhour);
tokyo.calculateCookiesPerhour();
console.log(tokyo.cookiesPerhour);
tokyo.render();



var dubai = {
    location:'Dubai Branch',
    minCustPerhour:11,
    maxCustPerhour:38,
    avgCookisPerhout:3.7,
    calculateCustomersPerhour: function() {
        for(var dc=0; dc<14; dc++){
            var dubaiCustmerPerhour=getRandomInt(38, 11);
            dubai.custmersPerhour.push(dubaiCustmerPerhour)[dc];

        }   
    },  
    custmersPerhour:[],
    calculateCookiesPerhour: function() {
        for(var dd=0; dd<14; dd++){
            var dubaiCookiePerhour=Math.floor(dubai.custmersPerhour[dd]*3.7);
            dubai.cookiesPerhour.push(dubaiCookiePerhour)[dd];
    
        }
        },
    cookiesPerhour:[],

    render: function () {
        var articleseattle = document.getElementById('dubai');
        var heading = document.createElement('h2');
        var unorderlist = document.createElement('ul');
        articleseattle.appendChild(unorderlist);
        unorderlist.appendChild(heading);
        heading.textContent = this.location
        for (var da = 0; da < 14; da++) {
            var list = document.createElement('li');
            unorderlist.appendChild(list);
            list.textContent = 'At '+workhours[da] +' We Sold '+ this.cookiesPerhour[da] + ' Cookies';
        }
    } 
    
};
dubai.calculateCustomersPerhour();
console.log(dubai.custmersPerhour);
dubai.calculateCookiesPerhour();
console.log(dubai.cookiesPerhour);
dubai.render();

var paris = {
    location: 'Paris Branch',
    minCustPerhour:20,
    maxCustPerhour:38,
    avgCookisPerhout:2.3,
    calculateCustomersPerhour: function() {
        for(var pc=0; pc<14; pc++){
            var parisCustmerPerhour=getRandomInt(38, 20);
            paris.custmersPerhour.push(parisCustmerPerhour)[pc];

        }   
    },  
    custmersPerhour:[],
    calculateCookiesPerhour: function() {
        for(var pd=0; pd<14; pd++){
            var parisCookiePerhour=Math.floor(paris.custmersPerhour[pd]*2.3);
            paris.cookiesPerhour.push(parisCookiePerhour)[pd];
    
        }
        },
    cookiesPerhour:[],
    
    render: function () {
        var articleseattle = document.getElementById('paris');
        var heading = document.createElement('h2');
        var unorderlist = document.createElement('ul');
        articleseattle.appendChild(unorderlist);
        unorderlist.appendChild(heading);
        heading.textContent = this.location
        for (var pa = 0; pa < 14; pa++) {
            var list = document.createElement('li');
            unorderlist.appendChild(list);
            list.textContent = 'At '+workhours[pa] +' We Sold '+ this.cookiesPerhour[pa] + ' Cookies';
        }
    }   
};
paris.calculateCustomersPerhour();
console.log(paris.custmersPerhour);
paris.calculateCookiesPerhour();
console.log(paris.cookiesPerhour);
paris.render();


var lima = {
    location: 'Lima Branch',
    minCustPerhour:2,
    maxCustPerhour:16,
    avgCookisPerhout:4.6,
    calculateCustomersPerhour: function() {
        for(var lc=0; lc<14; lc++){
            var limaCustmerPerhour=getRandomInt(16, 2);
            lima.custmersPerhour.push(limaCustmerPerhour)[lc];

        }   
    },  
    custmersPerhour:[],
    calculateCookiesPerhour: function() {
        for(var ld=0; ld<14; ld++){
            var limaCookiePerhour=Math.floor(lima.custmersPerhour[ld]*4.6);
            lima.cookiesPerhour.push(limaCookiePerhour)[ld];
    
        }
        },
    cookiesPerhour:[],

render: function () {
    var articleseattle = document.getElementById('lima');
    var heading = document.createElement('h2');
    var unorderlist = document.createElement('ul');
    articleseattle.appendChild(unorderlist);
    unorderlist.appendChild(heading);
    heading.textContent = this.location
    for (var la = 0; la < 14; la++) {
        var list = document.createElement('li');
        unorderlist.appendChild(list);
        list.textContent = 'At '+workhours[la] +' We Sold '+ this.cookiesPerhour[la] + ' Cookies';
    }
}
};

lima.calculateCustomersPerhour();
console.log(lima.custmersPerhour);
lima.calculateCookiesPerhour();
console.log(lima.cookiesPerhour);
lima.render();

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }