'use strict';

alert ('I am alive!');

const seattle = {
  cityName: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiesPerCustomer: 6.3,

  randomNumCustomers: function() {
    let randomNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    return randomNumber;
  }
}

console.log(seattle, 'prearray')

function generateSalesArray(location) {
  location.grandTotal = 0;
  location.hourlySalesArray =[];
  for (let i = 0; i< hoursOfOperation.length; i++) {
    let customers = location.randomNumCustomers();
    let cookiesSold = Math.floor(customers * location.avgCookiesPerCustomer);
    location.grandTotal += cookiesSold;
    location.hourlySalesArray.push(cookiesSold);
  }
}
generateSalesArray(seattle);
console.log(seattle, 'with the array')

const hoursOfOperation = ['6a', '7a', '8a', '9a', '10', '11a', '12p', '1p', '2p','3p', '4p','5p', '6p', '7p'];

const locationDivElem = document.getElementById('locations');
function renderLocationInfo(location){
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = location.cityName;
  locationDivElem.appendChild(h2Elem);
}

function Locations(cityName, minimumCustomers, maximumCustomers, averageCookiesPerCustomer) {
  this.cityName = cityName;
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;

  randomNumCustomers(); {
  let cookiesSold = Math.floor(customers * location.avgCookiesPerCustomer);
}

Locations.prototype.getLocation = function(){
  this.location = (randomNumCustomers(23, 65) + 'customers');
  
  Location.prototype.city = function(){
    console.log("city name");
  }
}

// /<table>
//         <thead>
//           <tr>
//             <td>Stuff inside</td>
//             <td>more stuff</td>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td></td>
//           </tr>
//         </tbody>
//         <tfoot>
//           <tr>
//             <td></td>
//           </tr>
//         </tfoot>
//       </table>