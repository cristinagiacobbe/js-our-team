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
        photo: "./img/WBarnett.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "./img/ACaroll.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "./img/WGordon.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "./img/ALopez.png"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "./img/SEstrada.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "./img/BRamos.png"
    }
]

//console.log(team.length);

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    //console.log(member);
    const memberName = member.name
    const memberRole = member.role
    const memberPhoto = member.photo
    MemberAppend(memberName)
    MemberAppend(memberRole)
    insertPhoto(memberPhoto)
    Separator()
}

/* console.log(memberName);
console.log(memberRole);
console.log(memberPhoto); */

function MemberAppend(memberName) {
    const containerElement = document.querySelector(".container-card")
    const cardElement = document.createElement("div")
    cardElement.className = "card"
    cardElement.innerText = (memberName)
    containerElement.append(cardElement)
}
function Separator() {
    const containerElement = document.querySelector(".container-card")
const hrElement = document.createElement("hr")
containerElement.append(hrElement)
}

function insertPhoto(memberPhoto) {
    const containerElement = document.querySelector(".container-card")
const photoElement = document.createElement("img")
photoElement.src = memberPhoto;
containerElement.appendChild(photoElement);
}



