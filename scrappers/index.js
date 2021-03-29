const apeswap = require('./apeswap');
const blueswap = require('./blueswap');
const cafeswap = require('./cafeswap');
const goosedefi = require('./goosedefi');
const icebergdefi = require('./icebergdefi');
const pancakeswap = require('./pancakeswap');
const pandayield = require('./pandayield');
const saltswap = require('./saltswap');

const scrappers = [
  apeswap,
  blueswap,
  cafeswap,
  goosedefi,
  icebergdefi,
  pancakeswap,
  pandayield,
  saltswap
];

module.exports = scrappers;
