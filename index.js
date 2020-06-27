const { readFileSync } = require('fs')

const txt = readFileSync('./hello.txt', 'utf-8')
console.log(txt)