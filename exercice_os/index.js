const os = require("os");

console.log(os.cpus());

const ram = () => {
 const freeMem = os.freemem()
 const totalMem = os.totalmem();

 const gbFreeMem = freeMem / 1024 / 1024 / 1024; 
 const gbtotalMem = totalMem / 1024 / 1024 / 1024;

 return {
  freeMem: Math.floor(gbFreeMem),
  totalMem: Math.floor(gbtotalMem),
  freePercentage: Math.floor((gbFreeMem / gbtotalMem) * 100),
  unit: "GB"
 };
};

console.log(ram());

const osInfos = () => {
 const userInfo = os.userInfo();
}