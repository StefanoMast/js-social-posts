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
const postList = document.querySelector('.posts-list');
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


// Milestone 2
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

// 3. creo funzione per stampare posts nel container
// function printPost (container, card) {
    
//     container.innerHTML += `
//     <div class="post">
//         <div class="post__header">
//             <div class="post-meta">                    
//                 <div class="post-meta__icon">
//                     <img class="profile-pic" src="${card.authorImage}" alt="">                    
//                 </div>
//                 <div class="post-meta__data">
//                     <div class="post-meta__author">${card.authorName}</div>
//                     <div class="post-meta__time">${card.date}</div>
//                 </div>                    
//             </div>
//         </div>
//         <div class="post__text">${card.postText}</div>
//             <div class="post__image">
//                 <img src="${card.postImage}" alt="">
//             </div>
//         <div class="post__footer">
//             <div class="likes js-likes">
//                 <div class="likes__cta">
//                     <a class="like-button  js-like-button" href="#" data-postid="${card.id}">
//                         <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
//                         <span class="like-button__label">Mi Piace</span>
//                     </a>
//                 </div>
//                 <div class="likes__counter">
//                     Piace a <b id="like-counter-1" class="js-likes-counter">${card.likesNumber}</b> persone
//                 </div>
//             </div> 
//         </div>            
//     </div>`;
// }
    
// // 4. ciclo for per navigare nell'array
// for (let i = 0; i < posts.length; i++){
    
//     const card = posts[i]; // costante che mi permette di indiduare [i] corrente mentre il for cicla

//     printPost (postList, card) // richiamo funzione per stampare tutte le cards
// } 
    






// // **Milestone 3** - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// const likesButtons = document.querySelectorAll('.js-like-button'); 
// const likesContainers = document.querySelectorAll('.js-likes-counter'); 




// for (let i = 0; i < likesButtons.length; i++) {
//     likesButtons[i].addEventListener('click', function(e){
        
// 

//         if (likesButtons[i].classList.contains('like-button--liked')){
//             this.classList.remove('like-button--liked');
//             posts[i].likesNumber--; // decremento likes

//         } else {
//             this.classList.add('like-button--liked');
//             posts[i].likesNumber++; // incremento likes
//         }
// // Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like
//         likesContainers[i].innerHTML = posts[i].likesNumber;
//     })
// }

const postsContainer = document.getElementById("container");

posts.forEach(post => {
    //creo elemento html
    const createdPost = createPostElement(post);


    //appendo al container
    postsContainer.innerHTML += createdPosts;

});

//al click sul tasto "Mi Piace"

const likedPost = [];
const likeButtons = document.querySelectorAll(".js-like-button");
likeButtons.forEach(button, index => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("clicked");
        //- cambiare il colore al bottone
        this.classList.add("like-button-liked");

        //- incrementare counter del like del post relativo
        //preleviamo il post cliccato dall'array di oggetti tramite l'indice del bottone nell'array
        const clickedPost = posts[index];
        //preleviamo id dell'oggetto cliccato
        const clickedPostId = clickedPost.id;
        //preleviamo dall'HTML l'elemento che contiene il numero di likes
        const likeCounter = document.getElementById(`like-counter-$ {clickedpostId}`);
        //da questo elemento preleviamo il numero dei likes e lo trasformiamo in number
        let likesNumber = parseInt(likeCounter.textContent);
        //incrementiamo il numero di likes 
        likesNumber= likesNumber + 1;
        //riscriviamo il contenuto dell'elemento HTML
        likeCounter.innerHTML = ++likesNumber;
        //- salvare in un array separato gli id dei post ai quali l'utente mette mi piace
        likedPost.push(clickedPostId);
    });
});

//functions
/**
 * La funzione che crea un elemento DOM per un post
 * @param {*} postObject -> oggetto con i dati da inserire all'interno del DOM
 * @returns {*}
 */

function createPostElement(postObject) {
    const {id, content, author, media, likes, created} = postObject;
     const postElement = `
     <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${author.image}" alt="${author.image}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">${created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div> `;
    return postElement;    
}

