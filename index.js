const http = require('http');
const puppeteer = require('puppeteer');

http.createServer(function(req, res){
    res.write("hello world");
    res.end();

}).listen(5000, console.log("working"));

async function start(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://coinmarketcap.com/')
    await page.screenshot({path : 'coinmarket.png', fullPage: true})

    await browser.close();

}

start();


