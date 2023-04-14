
//OS  Current User Info 
const os = require('os');
const currUserInfo = os.userInfo();
console.log(currUserInfo);

//OS Uptime in mins
console.log("OS Uptime in hrs: " + (os.uptime/(60*60)));

const CurrentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(CurrentOS);