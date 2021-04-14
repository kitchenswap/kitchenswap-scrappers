const url = 'https://pancakebunny.finance/farm';
const delay = 5000;

var onScrap = () => {
  const farms = document.querySelectorAll('.farms-card-item');

  const data = [];
  [...farms].forEach(farm => {
      const stakeToken = farm.querySelector('.label > span').textContent;
      
      const earnToken = farm.querySelector('.details.return .value').textContent
      const totalLiquidity = farm.querySelector('.details.total .value').textContent

      const APY = farm.querySelector('.rates .apy').textContent

      data.push({
          stakeToken,
          earnToken,
          totalLiquidity,
          APY
      });
  });

  const filtered = data.filter(farm => farm.APY)
  return filtered;
}


const { chromium } = require('playwright');
const fs = require('fs');

const cleanValue = (field = '') => {
  return parseFloat(field
    .replace("%", "")
    .replace("$", "")
    .replace(/,/g, "")
    .trim()
  );
}

const cleanValues = (value) => {
  const {
    APY,
    totalLiquidity
  } = value;

  const newValue = {
    ...value,
    APY: cleanValue(APY),
    totalLiquidity: cleanValue(totalLiquidity)
  }

  return newValue;
}

const main = async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] })
  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto(url);
  await page.waitForTimeout(delay);

  const scrappedValue = await page.evaluate(onScrap);
  console.log(scrappedValue)
  const data = scrappedValue.map(cleanValues);

  await page.close();

  await browser.close();

  fs.writeFile('pancakebunny.json', JSON.stringify(data, undefined, 2), function (err) {
    if (err) return console.log(err);
  });
}

main();
