// alert('Hello World!');

const teamCards = [
    {
        img :"../img/wayne-barnett-founder-ceo.jpg",
        fullName : "Wayne Barnett",
        role : "Founder & CEO"

    },
    {
        img :"../img/angela-caroll-chief-editor.jpg",
        fullName : "Angela Caroll",
        role : "Chief Editor"
    
    },
    {
        img :"../img/walter-gordon-office-manager.jpg",
        fullName : "Walter Gordon",
        role : "Office Manager"
    
    },
    {
        img :"../img/angela-lopez-social-media-manager.jpg",
        fullName : "Angela Lopez",
        role : "Social Media Manager"
    
    },
    {
        img :"../img/scott-estrada-developer.jpg",
        fullName : "Scott Estrada",
        role : "Developer"
    
    },
    {
        img :"../img/barbara-ramos-graphic-designer.jpg",
        fullName : "Barbara Ramos",
        role : "Graphic Designer"
    
    }
    
];
// console.log(teamCards);

let litTemplate = "";

for(let i = 0; i < teamCards.length; i++){
    // console.log(teamCards[i].img);
    // console.log(teamCards[i].role);
    for(let key in teamCards[i]){
        // console.log(key);
        // console.log(teamCards[key]);
        litTemplate =`
            <div class="team-card">
                <div class="card-image">
                <img src="${teamCards[i].img}" alt="${teamCards[i].fullName}"/>
                </div>
                <div class="card-text">
                <h3>${teamCards[i].fullName}</h3>
                <p>${teamCards[i].role}</p>
                </div>
            </div>
        `;
    }
    let teamContainer = document.querySelector(".team-container");
    // console.log("check01 ", litTemplate);
    teamContainer.innerHTML += litTemplate;
}
