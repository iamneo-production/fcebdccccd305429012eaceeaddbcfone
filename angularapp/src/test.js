const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  try{
    await page.goto('http://localhost:4200/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('h2');
    console.log('TESTCASE:testcase1:success');
  }
  catch(e){
    console.log('TESTCASE:testcase1:failure');
  }


  const page1 = await browser.newPage();
  try{
    await page1.goto('http://localhost:4200/');
    await page1.setViewport({
      width:1200,
      height:800,
    })
    await page1.waitForSelector('h1');
    const result2 = await page1.evaluate(()=>{
      let heading = document.querySelector(".filter");
      return heading.innerHTML;
    })
    console.log('TESTCASE:testcase2:success');
  }
  catch(e){
    console.log('TESTCASE:testcase2:failure');
  }

  const page2 = await browser.newPage();
  try{
    await page2.goto('http://localhost:4200/');
    await page2.setViewport({
      width:1200,
      height:800,
    })
    await page2.waitForSelector('h2');
    console.log('TESTCASE:testcase3:success');
  }
  catch(e){
    console.log('TESTCASE:testcase3:failure');
  }

  const page3 = await browser.newPage();
  try{
    await page3.goto('https://api.example.com/');
    await page3.setViewport({
      width:1200,
      height:800,
    })
    await page3.waitForSelector('tr');
    console.log('TESTCASE:testcase4:success');
  }
  catch(e){
    console.log('TESTCASE:testcase4:failure');
  }

  const page4 = await browser.newPage();
  try{
    await page4.goto('https://api.example.com/');
    await page4.setViewport({
      width:1200,
      height:800,
    })
    await page4.waitForSelector('td');
    console.log('TESTCASE:testcase5:success');
  }
  catch(e){
    console.log('TESTCASE:testcase5:failure');
  }
  finally{
    await page.close();
    await page1.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await browser.close();
  }
  
})();
