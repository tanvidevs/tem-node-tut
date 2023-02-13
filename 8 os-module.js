const os = require('os')

//info about current user
const user =os.userInfo()
console.log(user)

//method returns the system uptaime in second
console.log('The System Update is ${os.uptaime()}Seconds')

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),

}

console.log(currentOs)