/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url){
  //Domain name is always before a period
  //Domain name always follows a non-numeric character, either a . or /
  // const regex = /(?<=\/\/|\.)(.*?)(?=\.)/
  // // console.log(url.split(regex))
  // const noWWW = url.replace(/(?:w{1,3}\.)/, '')
  // console.log(noWWW)
  // const noHttp = url.replace(/(?:http:\/\/)/, '')
  // console.log(noHttp)
  // const noHttps = url.replace(/(?:https:\/\/)/, '')
  // console.log(noHttps)
  const domName = url.replace(/(?:w{1,3}\.)/, '').replace(/(?:http:\/\/)/, '').replace(/(?:https:\/\/)/, '').split(/[/?#]/)[0]
  console.log(domName.split([0]))
  return domName.split([0])

}

domainName("http://www.google.com") //google
domainName("http://google.co.jp") //google
domainName("www.xakep.ru") //xakep
domainName("https://youtube.com") //youtube
domainName('https://uet2ln2bazao6zhtudacw4sqw.edu/')