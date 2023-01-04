const os = require('os');

// info about current user
const user = os.userInfo();

// method return the system uptime in second
console.log(`The system uptime is ${os.uptime()} second`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
