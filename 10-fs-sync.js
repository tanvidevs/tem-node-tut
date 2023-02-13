const {readFileSync, writeFileSync} = require('fs')
console.log('start');

const first = readFileSync('./Content/subfolder/first.text',  'utf8')
const second = readFileSync('./Content/subfolder/second.text', 'utf8') 

console.log(first,second);

writeFileSync ('./Content/result-sync.text', 'Here is the result : ${first},${second} ',
{ flag:'a' }
)
console.log('done with this task')
console.log('starting the next one')
