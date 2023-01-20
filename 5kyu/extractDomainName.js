/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url) {
  const domName = url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0];
  const domain = domName.split(".")[0];
  return domain;
}

domainName("http://www.google.com") //google
domainName("http://google.co.jp") //google
domainName("www.xakep.ru") //xakep
domainName("https://youtube.com") //youtube
domainName('https://uet2ln2bazao6zhtudacw4sqw.edu/')

/*
Other Codewars Solution:

function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
*/