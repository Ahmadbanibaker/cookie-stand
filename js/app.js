let hours = ['6 AM','7am' ,'8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

const Seattle = {
  name: 'Seattle',
  min : 23,
  max : 65,
  Avr : 6.3,
  hourlycustomers : [],
  total : 0,


  customersperhour : function() {
    for(let i=0 ; i <= hours.length ; i++){

      this.hourlycustomers[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);



    }
    return this.hourlycustomers;

  },

  hourlycookes : [],
  purchaseachhour : function(){
    for(let i=0 ; i <= hours.length ; i++){
      this.hourlycookes[i] =Math.floor(this.hourlycustomers[i] * this.Avr);
      this.total += this.hourlycookes [i];
    }
    return this.hourlycookes;
  },
  result : [],
  finalresult : function(){
    for(let i=0 ; i <= hours.length ; i++){
      this.result[i] = hours[i] + ' : ' + this.hourlycookes[i] + 'cookies';
    }
    return this.result;
  },
  render : function () {
    let divE = document.getElementById('main');
    let hE = document.createElement('h3');
    hE.textContent = this.name;
    divE.appendChild(hE);
    let ulE = document.createElement('ul');
    divE.appendChild(ulE);
    for (let index = 0; index < hours.length; index++) {

      let liE = document.createElement('li');
      liE.textContent = this.result[index];
      console.log(this.result[index]);
      ulE.appendChild(liE);

    }
    let liE = document.createElement('li');
    liE.textContent = 'the total is : ' + this.total;
    ulE.appendChild(liE);
  }

};


(Seattle.customersperhour());
(Seattle. purchaseachhour());
(Seattle.finalresult());


Seattle.render();

const tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  total: 0,
  hourlyCustomers: [],
  customersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.hourlyCustomers[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    return this.hourlyCustomers;
  },
  numOfCookies: [],
  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numOfCookies[i] = Math.floor(this.hourlyCustomers[i] * this.avg);
      this.total += this.numOfCookies[i];

    }
    return this.numOfCookies;
  },
  result: [],
  ressultFun: function () {
    for (let i = 0; i < hours.length; i++) {
      this.result[i] = hours[i] + ' : ' + this.numOfCookies[i] + ' cookies.';
    }
    return this.result;
  },

  render: function () {
    let divE = document.getElementById('main');
    let hE = document.createElement('h3');
    hE.textContent = this.name;
    divE.appendChild(hE);
    let ulE = document.createElement('ul');
    divE.appendChild(ulE);
    for (let index = 0; index < hours.length; index++) {

      let liE = document.createElement('li');
      liE.textContent = this.result[index];
      console.log(this.result[index]);
      ulE.appendChild(liE);

    }
    let liE = document.createElement('li');
    liE.textContent = 'the total is : ' + this.total;
    ulE.appendChild(liE);
  }

};
tokyo.customersPerHour();
tokyo.cookiesPerHour();
tokyo.ressultFun();
tokyo.render();

const dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  total: 0,
  hourlyCustomers: [],
  customersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.hourlyCustomers[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    return this.hourlyCustomers;
  },
  numOfCookies: [],
  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numOfCookies[i] = Math.floor(this.hourlyCustomers[i] * this.avg);
      this.total += this.numOfCookies[i];

    }
    return this.numOfCookies;
  },
  result: [],
  ressultFun: function () {
    for (let i = 0; i < hours.length; i++) {
      this.result[i] = hours[i] + ' : ' + this.numOfCookies[i] + ' cookies.';
    }
    return this.result;
  },

  render: function () {
    let divE = document.getElementById('main');
    let hE = document.createElement('h3');
    hE.textContent = this.name;
    divE.appendChild(hE);
    let ulE = document.createElement('ul');
    divE.appendChild(ulE);
    for (let index = 0; index < hours.length; index++) {

      let liE = document.createElement('li');
      liE.textContent = this.result[index];
      console.log(this.result[index]);
      ulE.appendChild(liE);

    }
    let liE = document.createElement('li');
    liE.textContent = 'the total is : ' + this.total;
    ulE.appendChild(liE);
  }

};
dubai.customersPerHour();
dubai.cookiesPerHour();
dubai.ressultFun();
dubai.render();

const paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  total: 0,
  hourlyCustomers: [],
  customersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.hourlyCustomers[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    return this.hourlyCustomers;
  },
  numOfCookies: [],
  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numOfCookies[i] = Math.floor(this.hourlyCustomers[i] * this.avg);
      this.total += this.numOfCookies[i];

    }
    return this.numOfCookies;
  },
  result: [],
  ressultFun: function () {
    for (let i = 0; i < hours.length; i++) {
      this.result[i] = hours[i] + ' : ' + this.numOfCookies[i] + ' cookies.';
    }
    return this.result;
  },

  render: function () {
    let divE = document.getElementById('main');
    let hE = document.createElement('h3');
    hE.textContent = this.name;
    divE.appendChild(hE);
    let ulE = document.createElement('ul');
    divE.appendChild(ulE);
    for (let index = 0; index < hours.length; index++) {

      let liE = document.createElement('li');
      liE.textContent = this.result[index];
      console.log(this.result[index]);
      ulE.appendChild(liE);

    }
    let liE = document.createElement('li');
    liE.textContent = 'the total is : ' + this.total;
    ulE.appendChild(liE);
  }

};
paris.customersPerHour();
paris.cookiesPerHour();
paris.ressultFun();
paris.render();

const lima = {
  name: 'Lima',
  min: 20,
  max: 38,
  avg: 2.3,
  total: 0,
  hourlyCustomers: [],
  customersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.hourlyCustomers[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    return this.hourlyCustomers;
  },
  numOfCookies: [],
  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numOfCookies[i] = Math.floor(this.hourlyCustomers[i] * this.avg);
      this.total += this.numOfCookies[i];

    }
    return this.numOfCookies;
  },
  result: [],
  ressultFun: function () {
    for (let i = 0; i < hours.length; i++) {
      this.result[i] = hours[i] + ' : ' + this.numOfCookies[i] + ' cookies.';
    }
    return this.result;
  },

  render: function () {
    let divE = document.getElementById('main');
    let hE = document.createElement('h3');
    hE.textContent = this.name;
    divE.appendChild(hE);
    let ulE = document.createElement('ul');
    divE.appendChild(ulE);
    for (let index = 0; index < hours.length; index++) {

      let liE = document.createElement('li');
      liE.textContent = this.result[index];
      console.log(this.result[index]);
      ulE.appendChild(liE);

    }
    let liE = document.createElement('li');
    liE.textContent = 'the total is : ' + this.total;
    ulE.appendChild(liE);
  }

};
lima.customersPerHour();
lima.cookiesPerHour();
lima.ressultFun();
lima.render();




