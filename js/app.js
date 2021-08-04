// let profiles = document.getElementById('main');
let hours = ['6 AM','7am' ,'8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let all = [];
let divE = document.getElementById('main');
let table = document.createElement('table');
divE.appendChild(table);

function cookiesStand(name,min,max,Avr) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.Avr = Avr;
  this.total = 0;
  this.hourlycookes = [];
  this.result = [];
  this.hourlycustomers = [];
  this.hours = ['6 AM','7am' ,'8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  all.push(this);
}

cookiesStand.prototype.customersperhour = function() {
  for(let i=0 ; i <= hours.length ; i++){
    this.hourlycustomers[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
  return this.hourlycustomers;
};


cookiesStand.prototype.purchaseachhour = function(){
  for(let i=0 ; i <= hours.length ; i++){
    this.hourlycookes[i] =Math.floor(this.hourlycustomers[i] * this.Avr);
    this.total += this.hourlycookes [i];
  }
  return this.hourlycookes;
};

cookiesStand.prototype.finalresult = function(){
  for(let i=0 ; i <= hours.length ; i++){
    this.result[i] = hours[i] + ' : ' + this.hourlycookes[i] + 'cookies';
  }
  return this.result;
};


cookiesStand.prototype.render = function () {
  let totalofTotals  = 0;
  let tdElement = document.createElement('tr');
  table.appendChild(tdElement);
  // let trElement = document.createElement('tr');
  // table.appendChild(trElement);



  let tanleElement1 = document.createElement('td');
  tanleElement1.textContent = this.name;
  tdElement.appendChild(tanleElement1);

  for (let index = 0; index < hours.length; index++) {
    totalofTotals += this.hourlycookes [index];
    let tsElement = document.createElement('td');
    tsElement.textContent = this.hourlycookes[index];
    tdElement.appendChild(tsElement);
  }
  let tsElement = document.createElement('td');
  tsElement.textContent = totalofTotals;
  tdElement.appendChild(tsElement);

};
let getMain = document.getElementById('main');

let Seattle = new cookiesStand ('Seattle', 23 ,65 ,6.3);
let tokyo = new cookiesStand('Tokyo', 3 , 24 ,1.2);
let dubai = new cookiesStand ('Dubai',11,38, 3.7);
let paris = new cookiesStand('Paris', 20, 38, 2.3);
let lima = new cookiesStand('Lima', 20, 38, 2.3);

// Seattle.cookiesStand();
// tokyo.cookiesStand();
// dubai.cookiesStand();
// paris.cookiesStand();
// lima.cookiesStand();

console.log(all);

tableheader();


let countries = [Seattle,tokyo,dubai,paris,lima];

for (let index = 0; index < countries.length; index++) {
  countries[index].customersperhour();
  countries[index].purchaseachhour ();
  countries[index].finalresult();
  countries[index].render();
}


function tableheader (){
  let trElement = document.createElement('tr');
  table.appendChild(trElement);

  hours.unshift(' ');
  hours.push('Daily total');
  for (let i = 0; i < hours.length; i++){
    let thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  hours.shift();
  hours.pop();
}

function totalHoury(){
  let t = 0 ;

  let footerTE = document.createElement('tr');
  footerTE.id = 'nofooter';
  table.appendChild(footerTE);

  let tdL = document.createElement('td');
  tdL.textContent = 'Totals';
  footerTE.appendChild(tdL);
  for(let x= 0 ; x<hours.length ; x++){
    let totalEachHour =0;
    for (let i = 0; i < all.length; i++) {
      totalEachHour += all[i] .hourlycookes[x];

    }
    t += totalEachHour;
    let tdTE = document.createElement('td');
    tdTE.textContent = totalEachHour ;
    footerTE.appendChild(tdTE);
  }
  let tdTE = document.createElement('td');
  tdTE.textContent = t;
  footerTE.appendChild(tdTE);
  console.log(t);
}
totalHoury();

let countriesform = document.getElementById('cookiesform');
countriesform.addEventListener('submit', addlocation);


function addlocation (event){
  console.log(event);
  event.preventDefault();
  removefooter();
  let namevalue = event.target.namecountry.value;

  let minvalue = event.target.min.value;
  let maxvalue = event.target.max.value;
  let avgvalue = event.target.avarege.value;
  let newcountry = new cookiesStand (namevalue, minvalue , maxvalue , avgvalue );

  

  newcountry.customersperhour();
  newcountry.purchaseachhour();
  newcountry.finalresult();
  newcountry.render();

  totalHoury();
}

function removefooter(){
  let footerRow=document.getElementById('nofooter');
  footerRow.remove();
}


