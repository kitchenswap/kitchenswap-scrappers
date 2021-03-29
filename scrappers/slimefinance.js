const id = 'slimefinance';

const url = 'https://slime.finance/pools';

var onScrap = () => {  
  var poolCards = document.querySelectorAll('.sc-eHfQar');
  
  var info = [...poolCards].map((poolCard) => {
    const rows = poolCard.querySelectorAll(':scope > .sc-eCssSg');
    const stakeToken = rows[0].querySelector('.sc-gsTCUz').textContent;
    const APR = rows[1].querySelector('.sc-gsTCUz:nth-child(2)').textContent;
    const earnToken = rows[2].querySelector('.sc-gsTCUz:nth-child(2)').textContent;
    const depositFee = rows[3].querySelector('.sc-gsTCUz:nth-child(2)').textContent;
    const totalLiquidity = poolCard.querySelector('.sc-kYrkKh .sc-eCssSg:nth-child(5) .sc-gsTCUz:nth-child(2)').textContent;

    return ({
      stakeToken,
      APR,
      earnToken,
      depositFee,
      totalLiquidity
    })
  });

  return info;
}

module.exports = {
  id,
  onScrap,
  url
};
