const name = 'saltswap';

const url = 'https://www.saltswap.finance/pools';

const onScrap = () => {
  var SELECTORS = {
    POOL_CARDS: 'div.sc-XhUPp',
    ROWS: ':scope > div.sc-eCssSg',
    STAKE_TOKEN: 'h2.sc-gsTCUz',
    APR: 'div.sc-gsTCUz.hoSOFK',
    EARN_TOKEN: 'div.sc-gsTCUz.hoSOFK',
    DEPOSIT_FEE: 'div.sc-gsTCUz.hoSOFK',
    DETAILS: 'div.sc-tYoTV.rdqsF',
    TOTAL_LIQUIDITY: 'div.sc-gsTCUz.hoSNSs'
  };
  
  var ROWS = {
    STAKE_TOKEN: 0,
    APR: 1,
    EARN_TOKEN: 2,
    DEPOSIT_FEE: 3
  };
  
  var poolCards = document.querySelectorAll(SELECTORS.POOL_CARDS);
  
  var info = [...poolCards].map((poolCard) => {
    const rows = poolCard.querySelectorAll(SELECTORS.ROWS);
  
    const stakeToken = rows[ROWS.STAKE_TOKEN].querySelector(SELECTORS.STAKE_TOKEN).textContent;
    const APR = rows[ROWS.APR].querySelector(SELECTORS.APR).textContent;
    const earnToken = rows[ROWS.EARN_TOKEN].querySelector(SELECTORS.EARN_TOKEN).textContent;
    const depositFee = rows[ROWS.DEPOSIT_FEE].querySelector(SELECTORS.DEPOSIT_FEE).textContent;
  
    const details = poolCard.querySelector(SELECTORS.DETAILS);
    const totalLiquidity = details.querySelectorAll(SELECTORS.TOTAL_LIQUIDITY)[2].textContent;
  
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
  name,
  onScrap,
  url
};
