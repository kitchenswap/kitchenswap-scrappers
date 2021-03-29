const id = 'goosedefi';

const url = 'https://www.goosedefi.com/nests';

var onScrap = () => {
  var poolCards = document.querySelectorAll('.sc-ikPAkQ');

  var info = [...poolCards].map((poolCard) => {
    const rows = poolCard.querySelectorAll(':scope > .sc-eCssSg');
    const APR = rows[1].querySelector('.sc-gsTCUz.UNsmv').textContent;    
    const stakeToken = rows[2].querySelector('.sc-gsTCUz.UNsmv').textContent;
    const earnToken = rows[3].querySelector('.sc-gsTCUz.UNsmv').textContent;
    const depositFee = rows[4].querySelector('.sc-gsTCUz.UNsmv').textContent;
    
    const totalLiquidity = poolCard.querySelector('.sc-biBrSq .sc-eCssSg:nth-child(2) .UNrzd:nth-child(2)').textContent

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
