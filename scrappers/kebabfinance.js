const id = 'kebabfinance';

const url = 'https://kebabfinance.com/#/pools';

const delay = 10000;

var onPreScrap = () => {
  const poolCards = document.querySelectorAll('.sc-gkdzZj');

  [...poolCards].forEach((poolCard) => {
    const details = poolCard.querySelector('div.sc-cvJHqN');
    if (!details) {
      return;
    }

    const detailsButton = details.querySelector('button.sc-dkmKpi');

    if (!detailsButton) {
      return;
    }
    
    detailsButton.click();
  });
}

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
    const totalLiquidity = poolCard.querySelector('div.sc-cvJHqN .sc-fybufo .sc-gsTCUz').textContent;

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
  delay,
  id,
  onPreScrap,
  onScrap,
  url
};
