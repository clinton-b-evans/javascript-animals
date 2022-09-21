console.log("Let's pat our animals")
const myAnimals = ['Tara', 'Ezran', 'Soobie', 'Chester']
const yourAnimals = ['Tayo', 'Evie', 'Sara', 'CheeseDog']

function patAnimal(petName) {
  lovedAnimals = 0 // I wake up having patted ZERO animals!! Usually this is a 'count' or 'counter'
  petName.forEach((pet) => {
    // the pet is the individual pet
    lovedAnimals++ // I have just patted an animal!! YUS!
    if (pet === 'Tara' || pet === 'Ezran') {
      // The || is an OR statement. Tara OR Ezran
      console.log(pet + ' ' + 'got gentle pats') // cats get special treatment
    } else {
      console.log(pet + ' ' + 'got the pats!') // normal treatment
    }
  })
  console.log('I have given love to ' + ' ' + lovedAnimals + ' ' + 'animals')
  //console.log(animal + ' ' + 'got the pats!')
}

patAnimal(myAnimals) // These are my animals I mentioned in line #2
console.log('') // This creates a new space
patAnimal(yourAnimals) // These are yourAnimals I guessed the names of in line #3
