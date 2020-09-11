const puppeteer = require('puppeteer');

const insta_url='https://www.instagram.com/';
(async () => {


  const browser = await puppeteer.launch({ headless: false });
  
  
  
    const cookies = [{
      

    }];
    
    const page = await browser.newPage();
    await page.goto(insta_url, { waitUntil: 'networkidle2' });
    await page.setCookie(...cookies);
    const cookiesSet = await page.cookies(insta_url);
    




   
    await page.evaluate(() => {
      location.reload(true)
    })
    await page.waitFor(2000);
     const [button] = await page.$x("//button[contains(text(), 'Şimdi')]");
   if (button) {
   await button.click();
}
    await page.goto("https://www.instagram.com", { waitUntil: 'networkidle2' });
    await page.waitFor(2000);
    const [begeni] = await page.$x("(//*[local-name() = 'svg'][contains(@aria-label, 'Beğen')])[1]");
    if (begeni) {
    await begeni.click();}
  
})();