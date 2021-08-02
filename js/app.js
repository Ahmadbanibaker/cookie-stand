
let hours = ['6 AM','7am' ,'8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function cookiesStand(name,min,max,Avr){
  this.name = name;
  this.min = min;
  this.max = max;
  this.Avr = Avr;
  this.total = 0;
  this.hourlycookes = [];
  this.result = [];
  this.hourlycustomers = [];

}

// const Seattle = {
//   name: 'Seattle',
//   min : 23,
//   max : 65,
//   Avr : 6.3,
//   hourlycustomers : [],
//   total : 0,


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
  let divE = document.getElementById('main');
  let table = document.createElement('table');
  divE.appendChild(table);
  let trElement = document.createElement('tr');
  table.appendChild(trElement);


  for (let index = 0; index < hours.length; index++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = this.hourlycookes[index];
    trElement.appendChild(tdElement);
  }

};
let getMain = document.getElementById('main');

// let cerateTable = document.createElement('table');
// getMain.appendChild(cerateTable);
// function header(){
//   let headerTr = document.createElement('tr');
//   cerateTable.appendChild(headerTr);
//   let locationTh = document.createElement('th');
//   locationTh.textContent = 'location';
//   headerTr.appendChild(locationTh);
//   for(i=0;i<hours.length;i++){

//     let createTh = document.createElement('th');
//     headerTr.appendChild(createTh);
//     createTh.textContent = hours[i];
//   }
// }

let Seattle = new cookiesStand ('Seattle', 23 ,65 ,6.3);
let tokyo = new cookiesStand('Tokyo', 3 , 24 ,1.2);
let dubai = new cookiesStand ('Dubai',11,38, 3.7);
let paris = new cookiesStand('Paris', 20, 38, 2.3);
let lima = new cookiesStand('Lima', 20, 38, 2.3);

let countries = [Seattle,tokyo,dubai,paris,lima];

for (let index = 0; index < countries.length; index++) {
  countries[index].customersperhour();
  countries[index].purchaseachhour ();
  countries[index].finalresult();
  countries[index].render();
}

function header (){
  let headE = document.createElement('th');
  table.appendChild('head');
}



