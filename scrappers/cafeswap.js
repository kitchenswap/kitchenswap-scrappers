const id = 'cafeswap';

const url = 'https://app.cafeswap.finance/pools';

const delay = 10000;

var onScrap = () => { 
  var poolCards = document.querySelectorAll('.sc-hOqqkJ');

  var info = [...poolCards].map((poolCard) => {
    const title = poolCard.querySelector('.sc-dtwoBo').textContent.trim()
    if (title.indexOf('Your Project') === 0) {
      return;
    }
    
    const earnToken = title.split(' ')[0];
    const stakeToken = 'BREW';
    const depositFee = poolCard.querySelector('.sc-jXktwP').textContent.split(':')[1].trim();
    const APR = poolCard.querySelector('.sc-httYMd .sc-gsTCUz').textContent;

    return ({
      stakeToken,
      APR,
      earnToken,
      depositFee
    })
  })

  return info.filter(i => i);
}

module.exports = {
  delay,
  id,
  onScrap,
  url
};
