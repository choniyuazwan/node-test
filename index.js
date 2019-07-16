function camelCaseToUnderscored(camelCase) {
  let uppercase = []
  for (let i=65; i<=90; i++) {
    uppercase.push(String.fromCharCode(i))
  }
  let number = []
  for (let i=48; i<=57; i++) {
    number.push(String.fromCharCode(i))
  }
  let character = [];
  for(let i=0; i<camelCase.length; i++) {
    character.push(camelCase.charAt(i))
  }
  console.log(character.join(''))
  let uppercaseFound = [];
  let numberFound = [];
  for(let i=0; i<character.length; i++) {
    for(let j=0; j<uppercase.length; j++) {
      if(character[i] == uppercase[j]) {
        uppercaseFound.push(character[i])
        character[i] = character[i].toLowerCase()
        if(i!=0) {
          character.splice(i, 0, '_')
        }
      }
    }

    for(let k=0; k<number.length; k++) {
      // if(character[i] == number[k]) {
      if(character[i] == number[k]) {
        numberFound.push(character[i])
        if(i!=0) {
          character.splice(i, 0, '_')
        }
      }
    }
  }

  console.log(character.join(''))
  console.log(uppercaseFound)
  console.log(numberFound)
}

camelCaseToUnderscored('ACCJenius1ACCTahapan123')