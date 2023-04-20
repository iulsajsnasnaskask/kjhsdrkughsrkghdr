let result = [];
var counter = 1;
let container = document.getElementById('container');
function createDivision(important) {
    const texta = document.getElementById('textArea').value.replace(/\n/g, '<br>');
    if (!texta) return alert("Veuillez fournir une valeur valide pour l'article")
    counter++
    //? Création de touts les éléments pour l'article
    let div = document.createElement("div");
    let article = document.createElement("h2");

    //? Setup des textes incluts dans les éléments
    article.innerHTML = texta

    //? Setup l'arrivée des éléments dans la division de l'article
    div.appendChild(article);

    //? Setup de l'arrivée de la division dans le container
    document.getElementById('container').appendChild(div);

    //? Setup des propriétés de touts les éléments 
    div.setAttribute('id', texta)
    div.setAttribute('value', false)

    //? Si important == true alors la class == important
    if (important == true) { div.setAttribute('class', 'important') }

    //* Setup des donnés de la division
    result.push({article: texta, important: important});
    saveResult();
}
function removeDivision() {
        //? Setup des données 
        let div = document.getElementById('container');
        let body = document.querySelector('body');
        //? Suppression de la division principal
        div.remove();
        //? Création de la nouvelle division principal
        let newdiv = document.createElement("div")
        //? Setup de l'id en "container" de la nouvelle division
        newdiv.setAttribute('id', 'container')
        //? Inclure la division dans la page web
        body.appendChild(newdiv)
        
        //? Suppression de touts les éléments incluts dans l'élément "list" du localStorage
        localStorage.clear()
        location.reload()
    }
function aldiliste() {
    //* Envoie des requêtes pour créer la liste via les fonctions
    Bananesa()
    Paina()
}
function carreliste() {
    //* Envoie des requêtes pour créer la liste via les fonctions
    Bananesc()
    Painc()
}
function bioliste() {
    //* Envoie des requêtes pour créer la liste via les fonctions
    riz_complet()
    tisane()
}
function tisane() {
    counter++
    let div = document.createElement("div");
    let article = document.createElement("h2");
    article.innerHTML = 'Tisane'
    div.appendChild(article);
    document.getElementById('container').appendChild(div);
    div.setAttribute('id', `div-${counter}`)
    div.setAttribute('class', 'bio')
    div.setAttribute('value', false)
    result.push({article: 'Tisane', important: 'bio'});
    saveResult();
}
function riz_complet() {
    counter++
    let div = document.createElement("div");
    let article = document.createElement("h2");
    article.innerHTML = 'Riz complet'
    div.appendChild(article);
    document.getElementById('container').appendChild(div);
    div.setAttribute('id', `div-${counter}`)
    div.setAttribute('value', false)
    div.setAttribute('class', 'bio')
    result.push({article: 'Riz complet', important: 'bio'});
    saveResult();
}
function Bananesa() {
    counter++
    let div = document.createElement("div");
    let article = document.createElement("h2");
    article.innerHTML = 'Bananes'
    div.appendChild(article);
    document.getElementById('container').appendChild(div);
    div.setAttribute('id', `div-${counter}`)
    div.setAttribute('class', 'aldi')
    div.setAttribute('value', false)
    result.push({article: 'Bananes', important: 'aldi'});
    saveResult();
}
function Paina() {
    counter++
    let div = document.createElement("div");
    let article = document.createElement("h2");
    article.innerHTML = 'Pain'
    div.appendChild(article);
    document.getElementById('container').appendChild(div);
    div.setAttribute('id', `div-${counter}`)
    div.setAttribute('class', 'aldi')
    div.setAttribute('value', false)
    result.push({article: 'Pain', important: 'aldi'});
    saveResult();
}
function Bananesc() {
    counter++
    let div = document.createElement("div");
    let article = document.createElement("h2");
    article.innerHTML = 'Bananes'
    div.appendChild(article);
    document.getElementById('container').appendChild(div);
    div.setAttribute('id', `div-${counter}`)
    div.setAttribute('class', 'carrefour')
    div.setAttribute('value', false)
    result.push({article: 'Bananes', important: 'carrefour'});
    saveResult();
}
function Painc() {
    counter++
    let div = document.createElement("div");
    let article = document.createElement("h2");
    article.innerHTML = 'Pain'
    div.appendChild(article);
    document.getElementById('container').appendChild(div);
    div.setAttribute('id', `div-${counter}`)
    div.setAttribute('class', 'carrefour')
    div.setAttribute('value', false)
    result.push({article: 'Pain', important: 'carrefour'});
    saveResult();
}
function saveResult() {
    let json = JSON.stringify(result);
    localStorage.setItem("list", json);
}
// chargement des données
chargeResult(container);

function chargeResult(container) {
    let countera = 1;
    let json = localStorage.getItem("list");
    if(json === null || json === undefined) {
        localStorage.setItem("list", JSON.stringify(result));
    }
    let res = JSON.parse(json);
    if(res) {
        countera++
        for(const item of res) {
            // création et ajout d'élément à une nouvelle division.
            let div = document.createElement("div");
            let article = document.createElement("h2");
            article.innerHTML = item.article

            // ajout des éléments à la division créée.
            div.appendChild(article);

            // Setup des informations des éléments
            div.setAttribute('id', `div-${countera}`)
                if (item.important == true) { 
                    div.setAttribute('class', 'important')
                    div.setAttribute('style', 'background-color: var(--important)') 
            } else if (item.important == false) {
                div.setAttribute('style', 'background-color: var(--main)') 
            } else if (item.important == 'bio') {
                div.setAttribute('class', 'bio')
                div.setAttribute('style', 'background-color: var(--bio)') 
            } else if (item.important == 'aldi') {
                div.setAttribute('class', 'aldi')
                div.setAttribute('style', 'background-color: var(--aldi)') 
            } else if (item.important == 'carrefour') {
                div.setAttribute('class', 'carrefour')
                div.setAttribute('style', 'background-color: var(--carrefour)') 
            }

            // ajout de la division créée à la division "se".
            container.appendChild(div);

            result.push(item);
        }
    }
}
