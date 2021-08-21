const id = 'jigglyfinance';

const url = 'https://www.jiggly.finance/#/nests';

var onScrap = () => {  
  var poolCards = document.querySelectorAll('.sc-ikPAkQ');
  
  var info = [...poolCards].map((poolCard) => {
    const rows = poolCard.querySelectorAll(':scope > .sc-eCssSg');
    const stakeToken = rows[0].querySelector('.sc-gsTCUz').textContent;
    const APR = rows[1].querySelector('.sc-gsTCUz:nth-child(2)').textContent;
    const earnToken = rows[2].querySelector('.sc-gsTCUz:nth-child(2)').textContent;
    const depositFee = rows[3].querySelector('.sc-gsTCUz:nth-child(2)').textContent;
    const totalLiquidity = poolCard.querySelector('.sc-kIeTtH .sc-eCssSg:nth-child(2) .sc-gsTCUz:nth-child(2)').textContent;

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
