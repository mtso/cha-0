const hex = {
  0x0: '0',
  0x1: '1',
  0x2: '2',
  0x3: '3',
  0x4: '4',
  0x5: '5',
  0x6: '6',
  0x7: '7',
  0x8: '8',
  0x9: '9',
  0xa: 'a',
  0xb: 'b',
  0xc: 'c',
  0xd: 'd',
  0xe: 'e',
  0xf: 'f',
}

module.exports = (string) => {
  let raw = 274777
  for (var i = 0; i < string.length; i++) {
    raw = raw * string.charCodeAt(i) + 33
    raw = Math.floor(raw % 999999)
  }
  let hash = ''
  for (var i = 0; i < 6; i++) {
    let c = hex[raw % 16]
    hash += c
    raw = Math.floor(raw / 16)
  }
  return hash
}
