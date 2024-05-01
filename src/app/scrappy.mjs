import { chromium } from 'playwright'

async function scrappyFromPage () {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('https://www.linkedin.com/in/david-moreno-580725206')

  await page.waitForSelector('.profile section')
  const usernames = await page.evaluate(() => {
    const usernameElements = document.querySelectorAll('.top-card-layout__entity-info button h1')
    const usernames = []
    usernameElements.forEach(element => {
      usernames.push(element.innerHTML.trim())
    })
    return usernames
  })

  console.log(usernames[0])
  await browser.close()
  return usernames[0]
}

export { scrappyFromPage }
