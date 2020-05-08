console.log("carregou");
const URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

const containerCard = document.querySelector(".container-cards");

let acomodacoes;

function getJson(json) {
  renderAcomadations(json);

}

fetch(URL)
.then(function(response){
  response.json().then(function(data){
    getJson(data);
    });
  })
.catch(function(err){ 
  console.error('Failed retrieving information', err);
});

function renderAcomadations(ac) {
  // containerCard.innerHTML="";
  ac.map(renderAcomadation);
}

function renderAcomadation(ac){
  const divmd = document.createElement("div");
  divmd.className = "col-md-4 col-sm-5 col-11"
  const div = document.createElement("div");
  
  div.style.marginRight = "20px"
  div.style.marginBottom = "30px"
  div.className = "card";
  div.innerHTML=`
  <img class="card-img-top" src="${ac.photo}" alt="Imagen da acomudação">
  <div class="card-body">
    <h5 class="card-title">${ac.name}</h5>
    <p class="card-text">${ac.property_type}</p>
    <p class="card-text font-weight-bold">R$${ac.price}</p>
  </div>
 `
 divmd.appendChild(div)
 containerCard.appendChild(divmd);
}
