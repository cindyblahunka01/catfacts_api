const baseURL = 'https://cat-fact.herokuapp.com';

const catFacts = document.querySelector('ul');


fetch(`${baseURL}/facts`)
    .then(result => result.json())
    .then(json => {
        console.log(json);
        displayCats(json); 
    })
    .catch(err => console.log(err)) 

function displayCats(cats){
    cats.forEach(f => {
        let fact = document.createElement('li');
        fact.innerText = f.text;
        catFacts.appendChild(fact);
    })
}
