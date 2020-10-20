document.addEventListener('DOMContentLoaded', () => {
    const gameUrl = 'http://localhost:3000/games'

    fetch(gameUrl).then(res => res.json())
    .then(game => {
        game.forEach(element => {
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
        console.log(element)
        const div = cEl('div')
        div.className = 'card'

        div.addEventListener('click',(e) =>{
            e.preventDefault
            expandCard()
        })
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

        const price = cEl('h4')
        price.innerText = element.price

        const buyBtn = cEl('a')
        buyBtn.href = element.purchase_url
        buyBtn.innerText = "Buy Me ;)"

        div.append(h1, img, ratingBtn, h3, table, price, buyBtn)
        mainDiv.append(div)
    }

    function addRating(){
        console.log('we be rayteen')
    }
    
})