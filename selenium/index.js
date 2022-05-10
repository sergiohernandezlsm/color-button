const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

(async function firstScript() {
  try {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/");

    const button = await driver.findElement(By.id("tst"));

    const t = await button.getAttribute("style");
    assert.equal(t, "background-color: mediumvioletred;");
    // await button.sendKeys("webdriver", Key.ENTER);
    await driver.findElement(By.id("tst")).sendKeys("webdriver", Key.ENTER);
    driver.manage().setTimeouts({ implicit: 1000 });
    driver.manage().window().maximize();

    assert.equal(t, "background-color: midnightblue;");

    // ------------

    assert.equal(await button.isEnabled(), true);
    const checkBox = await driver.findElement(By.css("input[type='checkbox']"));
    await checkBox.click();
    assert.equal(await button.isEnabled(), false);
    // let test;

    // check if button enable/disabled

    // if ((await button.isEnabled()) === true) {
    //   console.log("button enabled");
    // } else {
    //   console.log("button false 1");
    // }

    // if ((await button.isEnabled()) === false) {
    //   console.log("button disabled");
    // } else {
    //   console.log("button false 2");
    // }
    // Assert;
    // await button.isDisplayed();

    // check if input checked/unchecked
    // const checkBox = await driver.findElement(By.css("input[type='checkbox']"));
    // await checkBox.not.isSelected();

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
})();
