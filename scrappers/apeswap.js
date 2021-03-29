const id = 'apeswap';

const url = 'https://apeswap.finance/pools';

const delay = 15000;

var onScrap = () => {
  const poolCards = document.querySelectorAll('.sc-bTvRPi');

  const info = [...poolCards].map((poolCard) => {
    const title = poolCard.querySelector('.sc-kIeTtH').textContent.trim()
    if (title.indexOf('Your Project') === 0) {
        return;
    }
    const earnToken = title.split(' ')[0];
    const stakeToken = earnToken;
    const APR = poolCard.querySelector('.sc-jmhFOf .sc-gsTCUz').textContent;

    return ({
      stakeToken,
      APR,
      earnToken
    })
  });

  return info.filter(i => i);
}

module.exports = {
  delay,
  id,
  onScrap,
  url
};
