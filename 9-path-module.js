const path = require('path')
 
console.log(path.sep)

const filePath = path.join('/Content','subfolder','test.text')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute =path.resolve(__dirname, 'Content','subfolder','test.text')
console.log(absolute)