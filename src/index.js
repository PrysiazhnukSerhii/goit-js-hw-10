import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';


const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

let inputText = document.querySelector("#search-box");
  

inputText.addEventListener("input",debounce(onTexterialInput,DEBOUNCE_DELAY),);




function onTexterialInput(e){

 let curentCountri = e.target.value.trim();

 if(curentCountri===""){return};


 let url = `https://restcountries.com/v2/name/${curentCountri}`;

 fetchCountries(url)
  
}





















