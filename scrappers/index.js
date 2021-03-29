const apeswap = require('./apeswap');
const goosedefi = require('./goosedefi');
const pancakeswap = require('./pancakeswap');
const pandayield = require('./pandayield');
const saltswap = require('./saltswap');

const scrappers = [
  apeswap,
  goosedefi,
  pancakeswap,
  pandayield,
  saltswap
];

module.exports = scrappers;
