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

    function createGameCard(element){
        const mainDiv = document.querySelector("#toy-collection")
        console.log(element)
        const div = cEl('div')
        div.className = 'card'
        const h1 = cEl('h1')
        h1.innerText = element.name

        const img = cEl('img')
        img.src = element.picture_url
        img.className = "toy-avatar"

        const ratingBtn = cEl('button')
        ratingBtn.innerText = "Add Rating"

        const h5= cEl('h5')
        h5.innerHTML = truncate(element.description)

        const table = cEl('table')

        const outer = cEl('div')
        outer.className = "stars-outer"
        const inner = cEl('div')
        inner.className = "stars-inner"

        
        let starPercent = `${(element.average_rating)*20}%`
        inner.style.width = starPercent

        outer.append(inner)
        table.append(outer)



        // rating.innerText = Math.round(element.average_rating)

        const price = cEl('h6')
        price.innerText = element.price

        const buyBtn = cEl('a')
        buyBtn.href = element.purchase_url
        buyBtn.innerText = "Buy Me ;)"

        div.append(h1, img, ratingBtn, h5, table, price, buyBtn)
        mainDiv.append(div)
    }

/* <div>
    <h1>
        Title
    </h1>
    <img></img>
    <button>goes to form to add star</button>
    <h5>description</h5>
    <p>rating</p>
    <h6>price</h6>
    <button> links to buy</button>
</div> */

})