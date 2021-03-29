const id = 'pandayield';

const url = 'https://pandayield.com/#/pools';

var onScrap = () => {
  const poolCards = document.querySelectorAll('.sc-eLgOdN');
  
  const info = [...poolCards].map((poolCard) => {
      const title = poolCard.querySelector('.sc-bTvRPi').textContent.trim()
      if (title.indexOf('Your Project') === 0) {
          return;
      }

      const stakeToken = title.split(' ')[0];
      const earnToken = poolCard.querySelector('.sc-jQbIHB.fQqSFN').textContent.split(' ')[0];
      const APR = poolCard.querySelector('.sc-jXktwP > .sc-gsTCUz').textContent;

      const details = poolCard.querySelector('.sc-biBrSq');
      const detailRows = details.querySelectorAll('.sc-hzMMCg');
      
      const totalLiquidity = detailRows[1].querySelector('.sc-gsTCUz').textContent;
  
    return ({
      stakeToken,
      APR,
      earnToken,
      totalLiquidity
    })
  });

  return info.filter(i => i);
}

module.exports = {
  id,
  onScrap,
  url
};
