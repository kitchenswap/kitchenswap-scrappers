const id = 'kebabfinance';

const url = 'https://kebabfinance.com/#/pools';

var onScrap = () => { 
  var poolCards = document.querySelectorAll('.sc-gkdzZj');

  var info = [...poolCards].map((poolCard) => {
    const title = poolCard.querySelector('.sc-flMoUE').textContent.trim()
    if (title.indexOf('Your Project') === 0) {
      return;
    }
    
    const earnToken = title.split(' ')[0];
    const stakeToken = 'KEBAB';
    const APR = poolCard.querySelector('.sc-JAcuL .sc-gsTCUz').textContent;

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
