const fs = require('fs');
const fetch = require('node-fetch');

const scrappers = require('./scrappers');

const main = async () => {
  const alreadySavedListRes = await fetch('https://data.kitchenswap.finance/dex-urls.json');
  const alreadySavedList = await alreadySavedListRes.json();

  const urls = scrappers.map(({ id, url }) => ({ id, url }));

  if (alreadySavedList.length === urls.length) {
    console.log('All dex have urls')
    return;
  }

  fs.writeFile('dex-urls.json', JSON.stringify(urls, undefined, 2), function (err) {
    if (err) return console.log(err);
  });
}

main();
