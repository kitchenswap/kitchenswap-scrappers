const id = 'pancakeswap';

const url = 'https://pancakeswap.finance/pools';

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

    return ({
      stakeToken,
      APR,
      earnToken
    })
  })

  return info.filter(i => i);
}

module.exports = {
  id,
  onScrap,
  url
};
