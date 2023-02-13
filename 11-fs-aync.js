const {readFile, writeFile} = require('fs')
console.log('start');

readFile('./Content/subfolder/first.text', 'utf8' ,(err,result)=>{
  if (err) {
    console.log(err)
    return
  }
  const first = result;
  readFile('./Content/subfolder/second.text' , 'utf8',(err,result)=> {
    if (err) {
      console.log(err)
      return
    }
    const second = result;
    writeFile('./Content/result-sync.text','Here is the result : ${first},${second} ',
    (err,result)=>{
      if(err){
        console.log(err)
        return;
      }
      console.log('done with this task')
    })
  })
})
console.log('starting next task')