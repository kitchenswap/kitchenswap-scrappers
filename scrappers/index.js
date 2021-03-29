const apeswap = require('./apeswap');
const blueswap = require('./blueswap');
const cafeswap = require('./cafeswap');
const goosedefi = require('./goosedefi');
const icebergdefi = require('./icebergdefi');
const jigglyfinance = require('./jigglyfinance');
const kebabfinance = require('./kebabfinance');
const pancakeswap = require('./pancakeswap');
const pandayield = require('./pandayield');
const saltswap = require('./saltswap');
const slimefinance = require('./slimefinance');

const scrappers = [
  apeswap,
  blueswap,
  cafeswap,
  goosedefi,
  icebergdefi,
  jigglyfinance,
  kebabfinance,
  pancakeswap,
  pandayield,
  saltswap,
  slimefinance
];

module.exports = scrappers;
