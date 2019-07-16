function tambah(a, b) {
  if(a==0 || b==0) {
    throw new Error('tidak boleh kosong')
  }
  return a + b;
}


describe('Test with Jasmine', () => {
  it('2+5 harusnya 7', () => {
    expect(tambah(2, 5)).toBe(7);
  })

  it('0 atau minus tidak boleh catch with toThrowError', () => {
    expect(() => {
      tambah(0,5)
    // }).toThrowError('tidak boleh kosong')
    }).toThrow(new Error('tidak boleh kosong'))
  })
})