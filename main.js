console.log("Let's pat our animals")
const myAnimals = ['Tara','Ezran','Soobie','Chester']
const yourAnimals = ['Tayo','Evie','Sara','CheeseDog']

function patAnimal(petName) {
  lovedAnimals = 0 // I wake up having patted ZERO animals!! Usually this is a 'count' or 'counter'
  petName.forEach((pet) => {                        // the pet is the individual pet
    lovedAnimals++                                  // I have just patted an animal!! YUS! 
    if (pet === 'Tara' || 'Ezran') {                // The || is an OR statement. Tara OR Ezran
      console.log(pet + ' ' + 'got gentle pats')    // cats get special treatment
    } else {
    console.log(pet + ' ' + 'got the pats!')        // normal treatment
    }
  })
  console.log('I have given love to ' + ' ' + lovedAnimals + ' ' + 'animals')
  //console.log(animal + ' ' + 'got the pats!')
}

patAnimal(myAnimals)
console.log("")
patAnimal(yourAnimals)
