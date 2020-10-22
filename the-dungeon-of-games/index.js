document.addEventListener('DOMContentLoaded', () => {
    const gameUrl = 'http://localhost:3000/games'
    const catUrl = 'http://localhost:3000/categories'

    fetch(catUrl).then(res => res.json())
    
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

     function truncateBack(input){        
         if (input.length > 1500) {
            return input.substring(0, 1500) + '...';
            }return input;}

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
        backDiv.innerHTML = `<h2>${element.name}</h2>${truncateBack(element.description)}<h3>Number of Ratings: ${element.number_of_ratings}</h3>`

        flip.addEventListener( 'click', function() {
        flip.classList.toggle('is-flipped');
        buyBtn.classList.toggle('pumpkin-hide');
        table.classList.toggle('pumpkin-hide')
        ratingBtn.classList.toggle('pumpkin-hide')

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
            addRating(backDiv)
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

    function addRating(backDiv){
        const starDiv = cEl('div')
        starDiv.className = "rate-us-bg"
        starDiv.innerHTML = `<div class="rate-us-title">
		<span class="rate-us-title-text">Rate Game </span>
	</div>
<div class="rate-us-star">
  <form action="" id="starForm" method="patch">
		<input type="radio" id="rate-us-star-1" name="star" value="5" />
  	<label for="rate-us-star-1"></label>
	  <input type="radio" id="rate-us-star-2" name="star" value="4" />
  	<label for="rate-us-star-2"></label>
		<input type="radio" id="rate-us-star-3" name="star" value="3" />
  	<label for="rate-us-star-3"></label>
		<input type="radio" id="rate-us-star-4" name="star" value="2" />
		<label for="rate-us-star-4"></label>
		<input type="radio" id="rate-us-star-5" name="star" value="1" />
        <label for="rate-us-star-5"></label>
        <button type="submit" id="user-submit" class="submit-btn">Submit</button>
  	</form>
    </div>`
    backDiv.append(starDiv)
    starForm = document.querySelector("#rate-us-star-5")
    starForm.addEventListener("click", e=>{
        e.preventDefault()
        console.log(e.target.value)
        // console.log(e.target[0].value)
        // console.log(e.target[1].value)
        // console.log(e.target[2].value)
        // console.log(e.target[3].value)
        // console.log(e.target[4].value)
        
    })
    starForm.reset()
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