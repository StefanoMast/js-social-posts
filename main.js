// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post (come da esempio).
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy: es 05-03-2022),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "lol",
        "media": "https://unsplash.it/600/300?image=172",
        "author": {
            "name": "Mario Mariotti",
            "image": "https://unsplash.it/300/300?image=14"
        },
        "likes": 10,
        "created": "2022-03-12"
    },
    {
        "id": 3,
        "content": " a quien le importa lo que yo haga",
        "media": "https://unsplash.it/600/300?image=170",
        "author": {
            "name": "Alaska Dinarama",
            "image": "https://unsplash.it/300/300?image=13"
        },
        "likes": 60,
        "created": "2022-03-21"
    },
];

// **Milestone 2** - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

//creo un ciclo forEach per ogni elemento che deve essere inserito come div nell'html

//funzione

const container = document.getElementById("container");

posts.forEach(element => {
    const divCard = divCreator(element.author.image, element.author.name);
    divCreator(divCard, element.content, element.media)
    InfoFooterPost(divCard, element.id, element.likes)
    container.append(divCard)
});

function divCreator(imgAuthor, nameAuthor) {
    const divCard = document.createElement("div");
    divCard.classList.add("post");
    divCard.innerHTML = 
//copio tutto il div presente nell'html 
    `<div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data"> <!-- Info profilo -->
                <div class="post-meta__author">Phil Mangione</div>
                <div class="post-meta__time">4 mesi fa</div>
            </div>                    
        </div>
    </div>`

    return divCard
}

//ho diviso il div principale nelle classi di appartenenza, quindi con post_text

function contentDivCard (container, userId, userMedia) {
    const divScriptContent = document.createElement("div");
    divScriptContent.classList.add("post_text");
    divScriptContent.innerHTML = `${userContent}`

//ora assegno la classe post_image
    const divImage = document.createElement("div");
    divImage.classList.add("post_image");
    divImage.innerHTML = `<img src="${userMedia}" alt="${userContent}">`

    //appendo il testo e l'immagine al div
    container.append(divScriptContent)
    container.append(divImage)


}

//ho diviso il div principale nelle classi di appartenenza, quindi post_footer

function InfoFooterPost (container, userId, userThumbs) {
    const divInfo = document.createElement("div");
    divInfo.classList.add("post_footer");
    divInfo.innerHTML = 
    `<div class="likes js-likes">
    <div class= "likes__cta">
        <a class="like-button js-like-button href="#" data-postid"${userId}>
            <i class="like-button_icon fas fa-thumbs-uo" aria-hidden="true"><i>
            <span class="like-button__label">Mi Piace </span>
        </a>
    </div>
    <div class="likes__counter">
        Piace a <b id="like-counter-1" class="js-likes-counter">${userThumbs}</b> persone
    </div>
    </div>`
    
    //lo aggiungo al divInfo
    container.append(divInfo)
}
    






// **Milestone 3** - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.