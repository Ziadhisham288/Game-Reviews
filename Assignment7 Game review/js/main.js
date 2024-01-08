let mmorpgBtn = document.getElementById("mmorpgBtn");
let shootersBtn = document.getElementById("shootersBtn");
let sailingBtn = document.getElementById("sailingBtn");
let permadeathBtn = document.getElementById("permadeathBtn");
let superheroBtn = document.getElementById("superheroBtn");
let pixelBtn = document.getElementById("pixelBtn");
let detailsCloseBtn = document.getElementById("closeBtn");
let cards;

// sections 
let homeSection = document.querySelector("#home");
let detailSection = document.querySelector("#details");
let navbar = document.querySelector("#navbar");
let header = document.querySelector("#header");

async function getGames(genre) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9458c77733mshedb74033613cce4p1d7541jsn500aecb9bdd1',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`, options);
    const myData = await api.json();
    displayGames(myData);
}

function displayGames(list) {
    let cartona = ``;
    for (let i = 0; i < list.length; i++) {
        cartona += ` <div data-id="${list[i].id}" class="card col-md-4 col-lg-3 col-sm-6">
        <div data-id="${list[i].id}" class="inner p-3" role="button" >
            <div data-id="${list[i].id}" class="image mb-2">
                <img data-id="${list[i].id}" src="${list[i].thumbnail}" class="card-img-top " alt="...">
            </div>
            <div data-id="${list[i].id} class="card-body">
                <h5 data-id="${list[i].id}" class="card-title">${list[i].title}</h5>
                <p id="free" class="p-1">Free</p>
            </div>
            <div data-id="${list[i].id}" class="card-body">
                <p  data-id="${list[i].id}" class="card-text">${list[i].short_description}</p>
                <span data-id="${list[i].id}" href="#" class="card-link">${list[i].genre}</span>
                <span data-id="${list[i].id}" href="#" class="card-link">${list[i].platform}</span>
            </div>
        </div>
    </div>`
    }
    document.getElementById("myData").innerHTML = cartona;


    cards = document.querySelectorAll(".card");


    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function (e) {
            getGameDetails(e.target.getAttribute("data-id"));
        })
    }
}



async function getGameDetails(id) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9458c77733mshedb74033613cce4p1d7541jsn500aecb9bdd1',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    const myData = await api.json();
    displayGameDetails(myData)
}


function displayGameDetails(list) {
    homeSection.classList.add("d-none")
    header.classList.add("d-none")
    navbar.classList.replace("d-flex", "d-none")
    detailSection.classList.replace("d-none", "d-flex");

    document.getElementById("detailsData").innerHTML = `<div class="col-md-4">
        <img class="w-100" src=${list.thumbnail} alt="">
    </div>
    <div class="col-md-8">
        <h2 id="title">Title: ${list.title}</h2>
        <p id="category">Genre: ${list.genre}</p>
        <p id="platform">platform: ${list.platform}</p>
        <p id="statues">statues: ${list.statues}</p>
        <p id="desc">Description: ${list.description}</p>
        <button class="p-3">
            <a href=${list.game_url}>Show game website</a>
        </button>
    </div>`;

    detailsCloseBtn.addEventListener("click", () => {
        homeSection.classList.replace("d-none", "d-flex")
        header.classList.replace("d-none", "d-flex")
        navbar.classList.replace("d-none", "d-flex")
        detailSection.classList.replace("d-flex", "d-none");
    })
}




// Selecting genre from navbar:


getGames('mmorpg');

shootersBtn.addEventListener("click", () => {
    getGames('shooter');
})

sailingBtn.addEventListener("click", () => {
    getGames('sailing');
})

permadeathBtn.addEventListener("click", () => {
    getGames('permadeath');
})

superheroBtn.addEventListener("click", () => {
    getGames('superhero');
})

pixelBtn.addEventListener("click", () => {
    getGames('pixel');
})

mmorpgBtn.addEventListener("click", () => {
    getGames('mmorpg');
})


