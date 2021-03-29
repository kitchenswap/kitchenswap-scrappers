const id = 'blueswap';

const url = 'https://app.blueswap.finance/pools';

var onScrap = () => {
  var poolCards = document.querySelectorAll('.sc-Fyfyc');
  
  var info = [...poolCards].map((poolCard) => {
    const rows = poolCard.querySelectorAll(':scope > .sc-eCssSg');
    const APR = rows[1].querySelectorAll('.sc-gsTCUz')[1].textContent;
    const earnToken = rows[2].querySelector('.sc-gsTCUz:nth-child(2)').textContent
    const depositFee = rows[3].querySelector('.sc-gsTCUz:nth-child(2)').textContent;
    const stakeToken = poolCard.querySelector('h2.sc-gsTCUz').textContent;

    const totalLiquidity = poolCard.querySelector('.sc-eFubAy .sc-eCssSg:nth-child(2) .sc-gsTCUz:nth-child(2)').textContent;

    return ({
      stakeToken,
      APR,
      earnToken,
      depositFee,
      totalLiquidity
    })
  })

  return info;
}

module.exports = {
  id,
  onScrap,
  url
};
