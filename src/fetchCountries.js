import template from './template.hbs'

const finder = document.querySelector(".finder");
const content = document.querySelector(".content");
const url = `https://restcountries.eu/rest/v2/name/`;

const getData = (e) => {
 
  fetch(url+e.target.value)
    .then((response) => {
      return response.json();
    })
      .then((data) => {
        console.log(data);
        content.innerHTML = template(data)
    });
};

finder.addEventListener("input", getData);




// const markup = cardTemplate(country)
// const div = document.querySelector('content')
// div.insertAdjacentElement('beforeend', markup)