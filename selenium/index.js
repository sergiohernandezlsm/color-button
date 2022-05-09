const { Builder, By, Key, until } = require("selenium-webdriver");

(async function firstScript() {
  try {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://localhost:3000");
    const button = await driver.findElement(By.);
    await a.click();
    await driver.getTitle();

    driver.manage().setTimeouts({ implicit: 1000 });
    driver.manage().window().maximize();

    let searchBox = await driver.findElement(By.name("q"));
    let searchButton = await driver.findElement(By.name("btnK"));

    await searchBox.sendKeys("hawaii");
    await searchButton.click();

    await driver.findElement(By.name("q")).getAttribute("value");

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
})();
