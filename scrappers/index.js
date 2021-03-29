const apeswap = require('./apeswap');
const blueswap = require('./blueswap');
const goosedefi = require('./goosedefi');
const pancakeswap = require('./pancakeswap');
const pandayield = require('./pandayield');
const saltswap = require('./saltswap');

const scrappers = [
  apeswap,
  blueswap,
  goosedefi,
  pancakeswap,
  pandayield,
  saltswap
];

module.exports = scrappers;
