const apeswap = require('./apeswap');
const cafeswap = require('./cafeswap');
const goosedefi = require('./goosedefi');
const jigglyfinance = require('./jigglyfinance');
const kebabfinance = require('./kebabfinance');
const pancakeswap = require('./pancakeswap');
const pandayield = require('./pandayield');
const saltswap = require('./saltswap');
const slimefinance = require('./slimefinance');

const scrappers = [
  apeswap,
  cafeswap,
  goosedefi,
  jigglyfinance,
  kebabfinance,
  pancakeswap,
  pandayield,
  saltswap,
  slimefinance
];

module.exports = scrappers;
