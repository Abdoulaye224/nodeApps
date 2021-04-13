const fs = require("fs");

const { readFile } = require("fs");

readFile("test.txt", (err, data) =>{
    if(err !== null){
        console.log(err);

        return
    }

    console.log(data.toString("utf-8")); 
})
