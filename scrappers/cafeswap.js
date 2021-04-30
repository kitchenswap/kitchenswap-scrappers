const id = 'cafeswap';

const url = 'https://app.cafeswap.finance/pools';

const delay = 10000;

var onPreScrap = () => {
  const poolCards = document.querySelectorAll('div#root > div > div:nth-child(2) > div:nth-child(5) > div');
  
  [...poolCards].forEach((poolCard) => {
    const details = poolCard.querySelector(':scope > div:nth-child(2)');

    if (!details) {
      return;
    }

    const detailsButton = details.querySelector(':scope button');
 
    if (!detailsButton) {
      return;
    }
    
    detailsButton.click();

  });
}

var onScrap = () => { 
  const poolCards = document.querySelectorAll('div#root > div > div:nth-child(2) > div:nth-child(5) > div');
  
  var info = [...poolCards].map((poolCard) => {
    const data = poolCard.querySelector(':scope > div:nth-child(1)');
    
    const title = data.querySelector(':scope > div:nth-child(1)').textContent.trim()
    if (title.indexOf('Your Project') === 0) {
      return;
    }
    
    const earnToken = title.split(' ')[0];
    const stakeToken = 'BREW';
    const depositFee = data.querySelector(':scope > div:nth-child(3)').textContent.split(':')[1].trim();
    const APR = data.querySelector(':scope > div:nth-child(7) > div:nth-child(2)').textContent;

    const details = poolCard.querySelector(':scope > div:nth-child(2)');
    const totalLiquidity = details.querySelector(':scope > div:nth-child(2) > div > div:nth-child(2)').textContent;

    return ({
      stakeToken,
      APR,
      earnToken,
      depositFee,
      totalLiquidity
    })
  })

  return info.filter(i => i);
}

module.exports = {
  delay,
  id,
  onPreScrap,
  onScrap,
  url
};
