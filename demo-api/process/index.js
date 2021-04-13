const process = require("process");

const args =process.argv;

console.log(`Curent directory: ${process.cwd}`);

console.log("ARGS", args);

process.chdir("/home");
console.log(`New directory: ${process.cwd}`);

process.stdin.resume();


process.on("SIGINT", () => {
 
 console.log("Received SIGINT. Press Control-D to exit.");
})