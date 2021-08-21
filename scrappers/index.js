const apeswap = require('./apeswap');
const cafeswap = require('./cafeswap');
const goosedefi = require('./goosedefi');
const kebabfinance = require('./kebabfinance');
const pancakeswap = require('./pancakeswap');
const pandayield = require('./pandayield');
const saltswap = require('./saltswap');
const slimefinance = require('./slimefinance');

const scrappers = [
  apeswap,
  cafeswap,
  goosedefi,
  kebabfinance,
  pancakeswap,
  pandayield,
  saltswap,
  slimefinance
];

module.exports = scrappers;
