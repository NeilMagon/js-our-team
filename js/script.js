// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const teamMembers = [
    {
        name: `Wayne Barnett`,
        role: `Founder & CEO`,    
        image: `img/wayne-barnett-founder-ceo.jpg`,
    },
    {
        name: `Angela Caroll`,
        role: `Chief Editor`,    
        image:`img/angela-caroll-chief-editor.jpg`,
    },
    {
        name: `Walter Gordon`,
        role: `Office Manager`,    
        image: `img/walter-gordon-office-manager.jpg`,
    },
    {
        name: `Angela Lopez`,
        role: `Social Media Manager`,    
        image: `img/angela-lopez-social-media-manager.jpg`,
    },
    {
        name: `Scott Estrada`,
        role: `Developer`,    
        image: `img/scott-estrada-developer.jpg`,
    },
    {
        name: `Barbara Ramos`,
        role: `Graphic Designer`,    
        image: `img/barbara-ramos-graphic-designer.jpg`,
    }
]

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// for (let i = 0; i < teamMembers.length; i++) {
//     const thisTeam = teamMembers[i];
//     console.log(`Nome: ` + thisTeam.name)
//     console.log(`Ruolo: ` + thisTeam.role)
//     console.log(`Immagine: ` + thisTeam.image)
// }



// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// Seleziono la mia ul tramite id
// const ourMembers = document.querySelector(`#our-members`);

// for (let i = 0; i < teamMembers.length; i++) {
//     const thisTeam = teamMembers[i];
//     const domLI = members(thisTeam.name, thisTeam.role, thisTeam.image);
// }

// Creo una funzione per stampare su dom le informazioni
// function members(teamName, teamRole, teamImage) {
//     const newLi = document.createElement('li');
//     newLi.textContent = `Nome: ${teamName}, Ruolo: ${teamRole}, Immagine: ${teamImage}`;
//     ourMembers.appendChild(newLi);
// }


// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
const cardContainer = document.querySelector('#card-container');

for (let i = 0; i < teamMembers.length; i++) {
    const thisTeam = teamMembers[i];
    const newElement = `
        <div class="card col-6 col-md-4 my-3">
            <div clsdd="card-body">
                <div class="card-img">
                    <img src="${thisTeam.image}" alt="">
                </div>
                <div class="card-text">
                    <p>Nome: ${thisTeam.name}</p>
                    <p>Ruolo: ${thisTeam.role}</p>
                </div>
            </div>
        </div>`;
    cardContainer.innerHTML += newElement
}

