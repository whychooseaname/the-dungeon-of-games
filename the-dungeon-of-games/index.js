document.addEventListener('DOMContentLoaded', () => {
    const gameUrl = 'http://localhost:3000/games'
    const catUrl = 'http://localhost:3000/categories'

    fetch(catUrl).then(res => res.json())
    .then(console.log);
    
    fetch(gameUrl).then(res => res.json())
    .then(game => {
        bestGames = game.slice(0, 9)
        bestGames.forEach(element => {
            createCarousel(element)
        });
    })

    function createCarousel(game){
        createGameCard(game, "#carousel")
    }

    fetch(gameUrl).then(res => res.json())
    .then(game => {
        restOfGames = game.slice(10)
        restOfGames.forEach(element => {
            createGameCard(element, "#toy-collection")
        });
    })
    function cEl(element){
        return document.createElement(element)
    }

    function truncate(input) {
        if (input.length > 300) {
           return input.substring(0, 300) + '...';
        }
        return input;
     };

    function createGameCard(element, argDiv){
        const mainDiv = document.querySelector(argDiv)
        const bigDiv = cEl('div')
        if(argDiv == "#carousel"){
            bigDiv.className = "flip-card carousel__cell"
        } else {
            bigDiv.className = "flip-card"
        }
        const flip = cEl('div')
        flip.className = "flip-card-inner"
        const div = cEl('div')
        div.classList.add('flip-card-front')
        const backDiv = cEl('div')
        backDiv.className = "flip-card-back"
        backDiv.innerHTML = `<h2>${element.name}</h2>${element.description}<h3>${element.number_of_ratings}</h3>`

        flip.addEventListener( 'click', function() {
        flip.classList.toggle('is-flipped');
        });

        const h1 = cEl('h1')
        h1.innerText = element.name

        const img = cEl('img')
        img.src = element.picture_url
        img.className = "toy-avatar"

        const ratingBtn = cEl('button')
        ratingBtn.innerText = "Add Rating"
        ratingBtn.addEventListener('click',(e)=>{
            e.preventDefault
            addRating()
        })

        const h3= cEl('h3')
        h3.className = "desc"
        h3.innerHTML = truncate(element.description)

        const table = cEl('table')

        const outer = cEl('div')
        outer.className = "stars-outer"
        const inner = cEl('div')
        inner.className = "stars-inner"
        
        let starPercent = `${(element.average_rating)*20}%`
        inner.style.width = starPercent

        outer.append(inner)
        table.append(outer)

        const buyBtn = cEl('div')
        buyBtn.className = "pumpkin-button"
        const i = cEl('i')
        i.className = 'price'
        i.innerText = element.price
        const rest = cEl('div')
        rest.className = "rest"
        buyBtn.append(i, rest)
        buyBtn.addEventListener('click', (e)=>{
            window.open(element.purchase_url)
        })

        div.append(h1, img, h3, table, ratingBtn, buyBtn)
        flip.append(div, backDiv)
        bigDiv.append(flip)
        mainDiv.append(bigDiv)
    }

    function addRating(){
        console.log('we be rayteen')
    }
    // --------------------------------------------
    // Carousel Code
  
    var carousel = document.querySelector('.carousel');
    var cellCount = 9;
    var selectedIndex = 0;

    function rotateCarousel() {
    var angle = selectedIndex / cellCount * -360;
    carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
    }

    var prevButton = document.querySelector('.previous-button');
    prevButton.addEventListener( 'click', function() {
    selectedIndex--;
    rotateCarousel();
    });

    var nextButton = document.querySelector('.next-button');
    nextButton.addEventListener( 'click', function() {
    selectedIndex++;
    rotateCarousel();
    });
})