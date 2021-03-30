const id = 'apeswap';

const url = 'https://apeswap.finance/pools';

const delay = 10000;

var onPreScrap = () => {
  const poolCards = document.querySelectorAll('.sc-bTvRPi');
  [...poolCards].forEach((poolCard) => {
    const detailsButton = poolCard.querySelector('.sc-eHfQar button.sc-hzMMCg');
    console.log(detailsButton);
    if (detailsButton) {
      detailsButton.click();
    }
  });
};

var onScrap = () => {
  const poolCards = document.querySelectorAll('.sc-bTvRPi');

  const info = [...poolCards].map((poolCard) => {
    const title = poolCard.querySelector('.sc-kIeTtH').textContent.trim()
    if (title.indexOf('Your Project') === 0) {
        return;
    }
    const earnToken = title.split(' ')[0];
    const stakeToken = earnToken;
    const APR = poolCard.querySelector('.sc-cbDGPM  .sc-gsTCUz').textContent;
    const totalLiquidity = poolCard.querySelector('.sc-eHfQar .sc-xyEjG .sc-gsTCUz').textContent;
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
  delay,
  id,
  onPreScrap,
  onScrap,
  url
};
