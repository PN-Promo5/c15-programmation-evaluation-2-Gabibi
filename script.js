let container = document.createElement("div")
let container2 = document.createElement("div")
document.body.appendChild(container)
document.body.appendChild(container2)
container2.hidden = true

// 
let movie = [
    ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
    ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
    ["UN VIOLENT DÉSIRE DE BOHNEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
    ["WHAT YOU GONNA DO WHEN THE WOLRD'S IN FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
    ["GRASS", "Hang Sang-Soo", "Corée du sud", "2018", "1h06", "vostfr"]
]

let substance = [
    ["SUBSTANCES", "Température de fusion ou solification en °C ", "Température d'ébullition en °C"],
    ["acide acétique", "17", "118"],
    ["acide nitrique", "-41", "86"],
    ["acide sulfurique", "10", "290"],
    ["alcool éthylique", "-114", "78"],
    ["aluminium", "660", "2450"]
]

function cinema() {
    let h1 = document.createElement("h1") //Creating the h1 element
    let p = document.createElement("p") //Creating the paragrah element
    let button = document.createElement("input") //Creating the input element
    let form = document.createElement("form") //Creating form element
    h1.textContent = "Cinéma Le Dauphin" //Adding text in h1
    container.appendChild(h1) //Adding h1 in the document
    p.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu'à minuit le vendre et le samedi)." // Adding text in paragraph
    container.appendChild(p) //Adding paragrah in the document
    container.appendChild(form) // Adding element form in the document
    button.type = "button" //Define the type of input
    button.value = "Voir les films à l'affiche cette semaine" //Adding text in the button
    form.appendChild(button) //Adding button in the document
    button.addEventListener("click", hidden, false) //Adding the event listener to the button
}
cinema()


function displayMovie(p1) {
    let i = 0
    let j
    let element
    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let tbody = document.createElement("tbody")
    let tr
    let td
    let th
    container2.appendChild(table)
    table.appendChild(thead)
    table.appendChild(tbody)
    while (i < p1.length) {
        tr = document.createElement("tr")
        tbody.appendChild(tr)
        element = p1[i].length
        j = 0
        while (j < element) {
            if (i < 1) {
                th = document.createElement("th")
                thead.appendChild(tr)
                tr.appendChild(th)
                th.textContent = p1[i][j]
            } else {
                td = document.createElement("td")
                tr.appendChild(td)
                td.textContent = p1[i][j]
            }


            j++
        }
        i++
    }
    return p1
}
displayMovie(movie)

function hidden (){
    container.hidden = true
    container2.hidden = false
}

