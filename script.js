let container = document.createElement("div") //Creating div element
let container2 = document.createElement("div")// Creating second div element
document.body.appendChild(container) //Adding div in the body page
document.body.appendChild(container2) //adding div in the body page
container2.hidden = true // Hide the second div


let movie = [
    ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
    ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
    ["UN VIOLENT DÉSIRE DE BOHNEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
    ["WHAT YOU GONNA DO WHEN THE WOLRD'S IN FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
    ["GRASS", "Hang Sang-Soo", "Corée du sud", "2018", "1h06", "vostfr"]
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

//function that displays all the elements of the two-dimensional table
function displayMovie(p1) {
    let i = 0 //
    let j //declares the variable j
    let element //declares the variable element
    let table = document.createElement("table") // create tag table 
    let thead = document.createElement("thead") // create tag thead
    let tbody = document.createElement("tbody") // create tag tbody
    let tr //declares the variable tr
    let td // declares the variable td
    let th //declares the variable th
    container2.appendChild(table)//adding table in the second div
    table.appendChild(thead) //adding thead in table
    table.appendChild(tbody) // adding tbody in table
    while (i < p1.length) { //as long as i is less than the length of the array
        tr = document.createElement("tr") //create element tr
        tbody.appendChild(tr) //adding tr in tbody
        element = p1[i].length //
        j = 0
        while (j < element) { //As long as "j" is less than "element"
            if (i < 1) { //If "i" is less than "1"
                th = document.createElement("th") //create tag th
                thead.appendChild(tr) // add tr in thead
                tr.appendChild(th) // add th in tr
                th.textContent = p1[i][j] //adds the value of the array in "th"
            } else {
                td = document.createElement("td") //create tag td
                tr.appendChild(td) // add td in tr
                td.textContent = p1[i][j] // adds the value of the array in "th"
            }


            j++ // adds 1 to the value of j
        }
        i++ //adds 1 to the value of i
    }
    return p1
}
displayMovie(movie)


//function of the event listener that hides the first container and displays the second container
function hidden (){
    container.hidden = true //hide container
    container2.hidden = false //display container2
}





// -----------EXERCICE 2-----------

let substance = [
    ["SUBSTANCES", "Température de fusion ou solification en °C ", "Température d'ébullition en °C"],
    ["acide acétique", "17", "118"],
    ["acide nitrique", "-41", "86"],
    ["acide sulfurique", "10", "290"],
    ["alcool éthylique", "-114", "78"],
    ["aluminium", "660", "2450"]
]