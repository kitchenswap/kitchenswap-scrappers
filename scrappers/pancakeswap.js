const id = 'pancakeswap';

const url = 'https://pancakeswap.finance/pools';

var onPreScrap = () => {
  const poolCards = document.querySelectorAll('div#root > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div');

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
  const poolCards = document.querySelectorAll('div#root > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div');

  var info = [...poolCards].map((poolCard) => {
    const data = poolCard.querySelector(':scope > div:nth-child(1)');

    const title = data.querySelector(':scope > div:nth-child(1)').textContent.trim()

    if (title.indexOf('Your Project') === 0) {
      return;
    }

    const earnToken = title.split(' ')[0];
    const stakeToken = 'CAKE';

    const APRContainer = data.querySelector(':scope > div:nth-child(6) > div:nth-child(2)');
    if (!APRContainer) {
      return;
    }
    const APR = APRContainer.textContent;

    const details = poolCard.querySelector(':scope > div:nth-child(2)');
    const totalLiquidity = details.querySelector(':scope > div:nth-child(2) > div > div:nth-child(2)').textContent;

    return ({
      stakeToken,
      APR,
      earnToken,
      totalLiquidity
    })
  })

  return info.filter(i => i);
}

module.exports = {
  id,
  onPreScrap,
  onScrap,
  url
};
