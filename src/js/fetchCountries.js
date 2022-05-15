import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

const refs = {
    listCountri:document.querySelector(".country-list"),
    counryInfo:document.querySelector(".country-info"),
  }



export function fetchCountries (link){
    

    Block.hourglass('.tuit', "work elfs");
  
  fetch(link).then(response=>response.json()).then(
      country =>{

        clinList ()
        
        Block.remove('.tuit');
  
        if(country.length>10){
          
          return  Notify.info('Too many matches found. Please enter a more specific name.');
        }
  
        paintListCountry(country)
  
      }
    ).catch(error => {
      return Notify.failure('Oops, there is no country with that name');
    })
   
  }

  function paintListCountry (arrey){
   
 
    if(arrey.length>2 && arrey.length<10){
    
      const allCountri = arrey.map(el=> {
        
      refs.listCountri.insertAdjacentHTML("beforeend",`<li><img src="${el.flags.svg}" alt="" style="width:30px"> ${el.name}</li>`)
      })
  
      return
   }
  
  
    let languages = null;
    languages = arrey[0].languages.map(a=>a.name);
  
  
  
    refs.counryInfo.insertAdjacentHTML("beforeend",`<ul>
   <li><img src="${arrey[0].flags.svg}" alt="" style="width:30px"> ${arrey[0].name}</li> <li>capital: ${arrey[0].capital}</li> <li>population: ${arrey[0].population}</li>
   <li>languages: ${languages.join(",")}</li>
   </ul>`)
  
  }

  function clinList (){
    refs.listCountri.innerHTML = "";
    refs.counryInfo.innerHTML = ""
  }

