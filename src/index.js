const MAX_TOPPINGS = 34 // maximum number of toppings

let pizzaButton = document.getElementById('randomize-button')

pizzaButton.addEventListener("click", evt => {

    let resultDiv = document.getElementById('results')
    let numToppings = document.getElementById('n-toppings').value
    let numSauces = document.getElementById('n-sauces').value
    let numCheeses = document.getElementById('n-cheeses').value
    let numFinishSauces = document.getElementById('n-finishing-sauces').value

    const lookupToppings = new Array(34).fill(0)
    const lookupSauces = new Array(8).fill(0)
    const lookupCheeses = new Array(8).fill(0)
    const lookupFinishSauces = new Array(8).fill(0)

    const toppings = [
        "artichokes",
        "arugula",
        "basil - fresh chopped",
        "black olives",
        "cilantro",
        "corn - roasted",
        "croutons",
        "garlic - chopped",
        "garlic - roasted",
        "green bell peppers",
        "jalapenos",
        "mama lil's sweet hot peppas",
        "mushrooms",
        "oregano",
        "pineapple",
        "red onion",
        "red peppers - roasted",
        "romaine",
        "rosemary - fresh chopped",
        "sea salt",
        "sea salt & pepper",
        "spinach",
        "spring mix",
        "tomatoes - sliced",
        "tomatoes - diced",
        "anchovies",
        "bacon",
        "canadian bacon",
        "grilled chicken",
        "ground beef",
        "mild sausage",
        "pepperoni",
        "salami",
        "spicy chicken sausage"
    ]

    const sauces = [
        "bbq sauce",
        "garlic rub",
        "extra virgin olive oil",
        "pesto",
        "red sauce",
        "spicy calabrian chili red sauce",
        "white sauce",
        "no sauce"
    ]

    const cheeses = [
        "asiago",
        "dairy-free cheese",
        "feta",
        "gorgonzola",
        "mozzarella",
        "parmesan",
        "ricotta",
        "no cheese"
    ]

    const finishing_sauces = [
        "balsamic fig glaze",
        "bbq swirl",
        "hot buffalo sauce",
        "Mike's Hot Honey",
        "pesto drizzle",
        "ranch finish",
        "red sauce dollops",
        "sri-rancha sauce"
    ]

    if (numToppings > MAX_TOPPINGS) {
        resultDiv.innerHTML = "Error - number of specified toppings exceeds maximum possible value!"
    } else if (numSauces > 8 || numCheeses > 8 || numFinishSauces > 8) {
        resultDiv.innerHTML = "Error - sauce or cheese value exceeds maximum!"
    } else {

        resultDiv.innerHTML = "" // reset inner HTML

        // toppings
        resultDiv.innerHTML += `<h3>Toppings:<\h3>`
        printItems(resultDiv, numToppings, MAX_TOPPINGS, toppings, lookupToppings)

        // sauces
        resultDiv.innerHTML += `<h3>Sauces:<\h3>`
        printItems(resultDiv, numSauces, 8, sauces, lookupSauces)

        // cheeses
        resultDiv.innerHTML += `<h3>Cheeses:<\h3>`
        printItems(resultDiv, numCheeses, 8, cheeses, lookupCheeses)

        // finishing sauces
        resultDiv.innerHTML += `<h3>Finishing Sauces:<\h3>`
        printItems(resultDiv, numFinishSauces, 8, finishing_sauces, lookupFinishSauces)
    }

    
})

// generates a random number from 0 - max
function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

// generates a random number in 0 - max (array index lookup)
// checks against lookup table-- if it has been generated before, re-generate a new number until it hasn't
// use that number to pull from the list of items into the innerHTML of div
// add 1 to lookup at generated num (so it cannot be generated again for this item)
function printItems(div, numitems, max, list, lookup) {
    for (let i = 0; i < numitems; i++) {
        let num = randomNumber(max)
        while (lookup[num] != 0) {
            num = randomNumber(max)
        }
        div.innerHTML += list[num] + `<br>`
        lookup[num]++;
    }
}