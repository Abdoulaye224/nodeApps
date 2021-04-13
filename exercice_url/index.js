const url = require('url');
//const arrayUrl = require("./url");
const { urls,unicodeUrls,ASCIIUrls } = require("./url");

const getUrlInfo = () => {
 const urlInfo = [];

 urls.forEach((url) => {
   const formattedUrl = new URL(url);

   urlInfo.push(formattedUrl);
 });

 return urlInfo;
}

const transformToASCII = () => {
 const ASCIIURL = [];

 unicodeUrls.forEach((value) => {
  const formattedUrl = new URL(value);

  ASCIIURL.push(url.domainToASCII(formattedUrl.hostname));
 });

 return ASCIIURL;

}

const transformToUnicocde= () => {
 const Unicode = [];

 ASCIIUrls.forEach((value) => {
  const {hostname} = new URL(value);

  Unicode.push(url.domainToUnicode(hostname));
 });

 return Unicode;

}


console.log(getUrlInfo());
console.log(transformToASCII());
console.log(transformToUnicocde());