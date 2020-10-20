document.addEventListener('DOMContentLoaded', () => {
    const gameUrl = 'http://localhost:3000/games'
    const catUrl = 'http://localhost:3000/categories'

    fetch(catUrl).then(res => res.json())
    .then(console.log);
    
    fetch(gameUrl).then(res => res.json())
    .then(game => {
        bestGames = game.slice(0, 10)
        bestGames.forEach(element => {
            createGameCard(element)
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

     function expandCard(){
         console.log('we be expanding')
     }
    function createGameCard(element){
        const mainDiv = document.querySelector("#toy-collection")
        const bigDiv = cEl('div')
        bigDiv.className = "flip-card"
        // console.log(element)
        const flip = cEl('div')
        flip.className = "flip-card-inner"
        const div = cEl('div')
        div.classList.add('flip-card-front')
        const backDiv = cEl('div')
        backDiv.className = "flip-card-back"
        backDiv.innerHTML = `<h2>${element.name}</h2>${element.description}<h3>${element.number_of_ratings}</h3>`

        // .flip-card:click .flip-card-inner{
        //     transform: rotateY(180deg);
        //   }

        flip.addEventListener( 'click', function() {
        flip.classList.toggle('is-flipped');
        });
        

        // flip.addEventListener('click',(e) =>{
        //     e.preventDefault
        //     bigDiv.style.transform = "rotateY(180deg)"
        //     flip.style.transform = "rotateY(180deg)"
        // })
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
    
})