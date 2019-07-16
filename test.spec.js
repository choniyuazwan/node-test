function underscoredToCamelCase(str) {
  if (!str || /\s/.test(str)) {
    throw new Error('tidak boleh kosong atau mengandung spasi')
  }

  let arr = str.split(/[_]/);
  let newStr = "";
  for (let i = 1; i < arr.length; i++) {
    newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr[0] + newStr;
}

function camelCaseToUnderscored(camelCase) {
  let uppercase = []
  for (let i = 65; i <= 90; i++) {
    uppercase.push(String.fromCharCode(i))
  }
  let number = []
  for (let i = 48; i <= 57; i++) {
    number.push(String.fromCharCode(i))
  }
  let character = [];
  for (let i = 0; i < camelCase.length; i++) {
    character.push(camelCase.charAt(i))
  }
  for (let i = 0; i < character.length; i++) {
    for (let j = 0; j < uppercase.length; j++) {
      if (character[i] == uppercase[j]) {
        character[i] = character[i].toLowerCase()
        character.splice(i, 0, '_')
      }
    }
  }

  return character.join('');
}

describe('underscored to camelcase', () => {
  it('should be camelcase', () => {
    expect(underscoredToCamelCase('last_opened_date')).toBe('lastOpenedDate')
  });

  it('should be camelcase', () => {
    expect(underscoredToCamelCase('last__opened__date')).toBe('lastOpenedDate')
  });

  it('0 atau minus tidak boleh catch with toThrowError', () => {
    expect(() => {
      underscoredToCamelCase('last opened_date')
    }).toThrowError('tidak boleh kosong atau mengandung spasi')
  })
});

describe('camelcase to underscored', () => {
  it('should be underscored', () => {
    expect(camelCaseToUnderscored('lastOpenedDate')).toBe('last_opened_date')
  });
});