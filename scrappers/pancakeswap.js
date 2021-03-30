const id = 'pancakeswap';

const url = 'https://pancakeswap.finance/pools';

var onPreScrap = () => {
  const poolCards = document.querySelectorAll('.sc-dtwoBo');

  [...poolCards].forEach((poolCard) => {
    const details = poolCard.querySelector('div.sc-dkIXFM');
    if (!details) {
      return;
    }

    const detailsButton = details.querySelector('button.sc-XhUPp');

    if (!detailsButton) {
      return;
    }
    
    detailsButton.click();

  });
}

var onScrap = () => { 
  var poolCards = document.querySelectorAll('.sc-dtwoBo');

  var info = [...poolCards].map((poolCard) => {
    const title = poolCard.querySelector('.sc-dacFzL').textContent.trim()

    if (title.indexOf('Your Project') === 0) {
      return;
    }

    const earnToken = title.split(' ')[0];
    const stakeToken = 'CAKE';
    const APR = poolCard.querySelector('.sc-bQdQlF > .sc-gsTCUz').textContent;
    const totalLiquidity = poolCard.querySelector('div.sc-dkIXFM .sc-ikPAkQ .sc-gsTCUz').textContent;

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
