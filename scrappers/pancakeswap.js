const id = 'pancakeswap';

const url = 'https://pancakeswap.finance/pools';

var onPreLoad = () => {
  var doScroll = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }
  
  var scrollListener = () => setTimeout(doScroll, 1000);

  setTimeout(() => {
    removeEventListener('scroll', scrollListener);
  }, 10000);

  addEventListener('scroll', scrollListener);
  
  document.querySelector('#clickPoolCardView').click();
  doScroll();
}

var onPreScrap = () => {
  const poolCards = document.querySelectorAll('div#root > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div');

  [...poolCards].forEach((poolCard) => {
    const details = poolCard.querySelector(':scope > div:nth-child(3)');
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
  const poolCards = document.querySelectorAll('div#root > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div');

  var info = [...poolCards].map((poolCard) => {
    const title = poolCard.querySelector(':scope > div > div > div > h2').textContent.trim()

    if (title.indexOf('Your Project') === 0) {
      return;
    }

    const earnToken = title.split(' ')[0];
    const stakeToken = 'CAKE';

    const data = poolCard.querySelector(':scope > div:nth-child(2)');
    
    const APRContainer = data.querySelector(':scope > div:nth-child(1) > div:nth-child(2)');
    if (!APRContainer) {
      return;
    }
    const APR = APRContainer.textContent;

    const details = poolCard.querySelector(':scope > div:nth-child(3)');
    const totalLiquidity = details.querySelector(':scope > div:nth-child(2) > div > div:nth-child(2) span').textContent;

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
  onPreLoad,
  onPreScrap,
  onScrap,
  url
};
