Fonction anonyme : appelé et créer a la voler

code défini a un endroit et inconvénient recréer a la voler a chaque fois

fat arrow, arrow, fonction anonyme = meme chose

const testValeur =(ArgA, ArgB) => {
     return ArgA*ArgB;
}

const testValeur = (ArgA, ArgB) => ArgA*ArgB;

const first = testArray => testArray[0];

const first = (testArray) => {return testArray[0]};

const returnObject = (nom, description) => ({myName : nom, myDescription : description});

const alteredArray = testArray.map((item)=>{
    return {
       address : item.address
    };
});


function blob() {return {testValeur : maValeur, testValeur2 : maValeur2}};

const {testValeurn testValeur2} = blob();

const testMe = await maFonctionLongue();
