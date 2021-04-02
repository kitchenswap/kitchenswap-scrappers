const fs = require('fs');
const fetch = require('node-fetch');

const dexPools = require('./dex-pools.json');

const BASE_URL = 'https://api.coingecko.com/api/v3';

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getCurrentTokensSymbols = () => {
  const tokensSet = new Set();

  dexPools.forEach(({ value = [] }) => {
    value.forEach(({ earnToken, stakeToken }) => {
      tokensSet.add(earnToken);
      tokensSet.add(stakeToken);
    });
  });

  const tokens = [...tokensSet];

  return tokens;
}

const getCoingeckoIds = (symbols = [], coingeckoList = []) => {
  const extendedSymbols = [];

  symbols.forEach((symbol) => {
    const symbolLowerCase = symbol.toLowerCase();
    const coingeckoInfo = coingeckoList.find((c) => c.symbol === symbolLowerCase);

    if (coingeckoInfo) {
      const { id } = coingeckoInfo;

      extendedSymbols.push({
        symbol,
        id
      });
    }
  });

  return extendedSymbols;
};

const getCoingeckoTokenBasicInfo = async (coingeckoId) => {
  const url = `${BASE_URL}/coins/${coingeckoId}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`;
  const response = await fetch(url);
  const basicInfo = await response.json();

  return basicInfo;
}

const getCoingeckoImageInfo = async (coingeckoId) => {
  const basicInfo = await getCoingeckoTokenBasicInfo(coingeckoId);

  const { id, image } = basicInfo;

  return { id, image };
}

const getCoingeckoImages = async (coingeckoList = []) => {
  const newList = [];

  for(let i = 0; i < coingeckoList.length; i++) {
    const { id, symbol } = coingeckoList[i];
    const { image } = await getCoingeckoImageInfo(id);

    console.log({ id, image });

    newList.push({ id, symbol, image });
    await sleep(1000);
  }

  return newList;
}

const main = async () => {
  if (dexPools.length === 0){
    console.warn('Warning: no dex-pools found');
    return;
  };


  // // try to access coingecko, exit if fails
  // const ping = await fetch(`${BASE_URL}/ping`);
  // if (ping.status !== 200) return;

  const coinListRes = await fetch(`${BASE_URL}/coins/list?include_platform=false`);
  const coinList = await coinListRes.json();

  const tokenSymbols = getCurrentTokensSymbols();
  // console.log(tokenSymbols);

  const extendedTokens = getCoingeckoIds(tokenSymbols, coinList);
  const imageData = await getCoingeckoImages(extendedTokens);

  fs.writeFile('image-data.json', JSON.stringify(imageData, undefined, 2), function (err) {
    if (err) return console.log(err);
  });

}

main();
