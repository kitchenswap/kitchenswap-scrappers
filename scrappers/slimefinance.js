const id = 'slimefinance';

const url = 'https://slime.finance/pools';

var onPreScrap = () => {
  const poolRows = document.querySelectorAll('#root > div > div table > tbody > tr');

  [...poolRows].forEach((poolRow) => {
    const details = poolRow.querySelector(':scope > td:last-child');

    if (!details) {
      return;
    }

    const detailsButton = details.querySelector(':scope > div > div');

    if (!detailsButton) {
      return;
    }
    
    detailsButton.click();

  });
}

var onScrap = () => {  
  const poolRows = document.querySelectorAll('#root > div > div table > tbody > tr');
  
  var info = [...poolRows].map((poolRow) => {
    const stakeToken = poolRow.querySelector(':scope > td:nth-child(1)').textContent;
    const APR = poolRow.querySelector(':scope > td:nth-child(3) > div > div > div:nth-child(2)').textContent;    
    const earnToken = 'Slime';
    const totalLiquidity = poolRow.querySelector(':scope > td:nth-child(4) > div > div > div:nth-child(2) > div > div').textContent;    
    const depositFee = poolRow.querySelector(':scope > td:nth-child(6) > div > div > div:nth-child(2) > div > div').textContent;    

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
