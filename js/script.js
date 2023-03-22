// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const ourTeam = [
  {
    name: "Wayne",
    surname: "Barnett",
    role: "Founder & CEO",
    imagePersonal: "wayne-barnett-founder-ceo.jpg",
  },

  {
    name: "Angela",
    surname: "Caroll",
    role: "Chief Editor",
    imagePersonal: "angela-caroll-chief-editor.jpg",
  },

  {
    name: "Walter",
    surname: "Gordon",
    role: "Office Manager",
    imagePersonal: "walter-gordon-office-manager.jpg",
  },

  {
    name: "Angela ",
    surname: "Lopez",
    role: "Social Media manager",
    imagePersonal: "angela-lopez-social-media-manager.jpg",
  },

  {
    name: "Scott",
    surname: "Estrada",
    role: "Developer",
    imagePersonal: "scott-estrada-developer.jpg",
  },

  {
    name: "Barbara ",
    surname: "Ramos",
    role: "Graphic Designer	",
    imagePersonal: "barbara-ramos-graphic-designer.jpg",
  },
];

// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

// const teamUl = document.querySelector("ul");
// console.log(teamUl);

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// for (let i = 0; i < ourTeam.length; i++) {
//   const teamList = ourTeam[i];
//   console.log(teamList);

//   for (let key in teamList) {
//     teamUl.innerHTML += `<li>${key}: ${teamList[key]}</li>`;
//   }
// }

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.

// Richiamo dal dom le row
const createRow = document.querySelector(".row");
console.log(createRow);

// Dichiaro una variabile card da usare nel ciclo
let cards = "";

// Con il ciclo creo le card
for (let i = 0; i < ourTeam.length; i++) {
  const teamMember = ourTeam[i];
  cards += ` <div class="col">
    <div class="card">
      <img
        src="img/${teamMember.imagePersonal}"
        class="card-img-top"
        alt="..." />
      <div class="card-body">
        <h5 class="card-title">${teamMember.name} ${teamMember.surname}</h5>
        <h4 class="card-text">${teamMember.role}</h4>
      </div>
    </div>
  </div>`;
}
console.log(cards);

// Manipolo il DOM per inserire le cards
createRow.innerHTML = cards;