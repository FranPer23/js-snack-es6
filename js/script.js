// const biciclette = [
//     { 
//     nome: "a", 
//     peso: 12 
//     },

//     { 
//     nome: "b", 
//     peso: 18 
//     },

//     { 
//     nome: "c", 
//     peso: 10 
//     },

//     { 
//     nome: "d", 
//     peso: 15 
//     }
//   ];

  


// // bicicletta con peso minore
// const biciLeggera = biciclette.reduce((min, bici) => bici.peso < min.peso ? bici : min);



// // stampare nome e peso della bicicletta più leggera
// const { nome, peso } = biciLeggera; //destrutturazione
// console.log(nome,peso);

// console.log(`la bicicletta più leggera è${nome} e pesa ${peso} kg.`);


////////////////////////////////////////////////////////////////

// array squadre
const teamNames = ['Real Madrid', 'Barcelona', 'Manchester United', 'Liverpool', 'Bayern Munich'];

// genero numeri random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
// array squadre con falli subiti e fatti
const teams = teamNames.map(name => ({

name: name,
puntiFatti:getRandomNumber(0, 100),
falliSubiti: getRandomNumber(0, 50)        

}));  
  
// array di nomi e falli 
const falliTeam = teams.map(({name, falliSubiti}) => ({name, falliSubiti}));
  

console.log('Teams:', teams);
console.log('Team Fouls:', falliTeam);
  



  