//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe
//BONUS 1:
//Trasformare la stringa foto in una immagine effettiva
//BONUS 2:
//Organizzare i singoli membri in card/schede

//TOOLS
//Object and array
//document.innerHTML
//loop (to repeat actions for every member team)
//insert img
//mark up to convert strings into card


const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "../img/WBarnett.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "../img/ACaroll.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "../img/WGordon.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "../img/ALopez.png"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "../img/SEstrada.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "../img/BRamos.png"
    }
]

const cardsRowElement = document.querySelector(".row")

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    //console.log(member);
    const memberName = member.name
    const memberRole = member.role
    const memberPhoto = member.photo
 
    const cardsMarkup = `
    <div class="col" >
      <div class="card" >
        <img src="${memberPhoto}" class="img-fluid rounded-start" alt="...">
        <div class="card-body">
          <h5 class="card-title">${memberName}</h5>
          <h6>${memberRole}</h6>
        </div>
      </div>
    </div>    
    `
    cardsRowElement.insertAdjacentHTML("beforeend", cardsMarkup)



}




