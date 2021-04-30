const id = 'icebergdefi';

const url = 'https://icebergdefi.com/igloo';

var onScrap = () => {
  var poolCards = document.querySelectorAll('.sc-ikPAkQ');

  var info = [...poolCards].map((poolCard) => {
    const rows = poolCard.querySelectorAll(':scope > .sc-eCssSg');

    const APR = rows[1].querySelector('.sc-gsTCUz:nth-child(2)').textContent;   
    const depositFee = rows[3].querySelector('.sc-gsTCUz:nth-child(2)').textContent; 

    const tokens = poolCard.querySelectorAll('.sc-euMpXR .sc-eCssSg');
    
    const earnToken = tokens[0].querySelector('div').textContent;
    const stakeToken = tokens[2].querySelector('div').textContent;

    const totalLiquidity = poolCard.querySelector('.sc-biBrSq .sc-eCssSg:nth-child(2) .sc-gsTCUz:nth-child(2)').textContent;

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
