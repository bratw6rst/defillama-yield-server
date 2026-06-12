module.exports = function () {
  console.log(`\nNb of pools: ${global.apy.length}\n `);
  if (process.env.CI !== undefined) {
    console.log('\nSample pools:');
    console.table(global.apy.sort((a, b) => a.pool.localeCompare(b.pool)));
  } else {
    console.log(
      '\nSample pools:',
      global.apy.sort((a, b) => a.pool.localeCompare(b.pool))
    );
  }
  if (global.apy.some((p) => p.tvlUsd < 10e3)) {
    console.log(
      "This adapter contains some pools with <10k TVL, these pools won't be shown in DefiLlama"
    );
  }
};
