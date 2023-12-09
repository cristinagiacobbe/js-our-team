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
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
]

console.log(team.length);

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    console.log(member);
    
}

const member = team[0]
console.log(member.role);


const memberName = member.name
const memberRole = member.role
const memberPhoto = member.photo
console.log(memberName);
console.log(memberRole);
console.log(memberPhoto);

function MemberAppend(memberName) {
const containerElement = document.querySelector(".container-card")
const cardElement = document.createElement("div")
cardElement.className = "card"
cardElement.innerText = (memberName)
containerElement.append(cardElement)    
}

MemberAppend(memberName)
MemberAppend(memberRole)
MemberAppend(memberPhoto)
 




