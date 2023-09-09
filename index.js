const pools = [
  [
    { symbol: "VND", amount: 1000000 },
    { symbol: "AUD", amount: 2000000 },
  ],
  [
    { symbol: "AUD", amount: 2000000 },
    { symbol: "AUF", amount: 3000000 },
  ],
  [
    { symbol: "AUF", amount: 1000000 },
    { symbol: "AUG", amount: 4000000 },
  ],
  [
    { symbol: "AUG", amount: 4000000 },
    { symbol: "AUH", amount: 2000000 },
  ],
  [
    { symbol: "AUH", amount: 2000000 },
    { symbol: "AUH", amount: 5000000 },
  ],
  [
    { symbol: "VND", amount: 5000000 },
    { symbol: "AUJ", amount: 2000000 },
  ],
  [
    { symbol: "AUJ", amount: 5000000 },
    { symbol: "USD", amount: 20000000 },
  ],
  [
    { symbol: "AUH", amount: 1000000 },
    { symbol: "AUJ", amount: 6000000 },
  ],
  [
    { symbol: "AUJ", amount: 3000000 },
    { symbol: "AUK", amount: 2000000 },
  ],
  [
    { symbol: "AUK", amount: 1000000 },
    { symbol: "USD", amount: 20000000 },
  ],
];
const route = ["VND", "AUD", "AUF", "AUG", "AUH", "AUJ", "USD"];
const route1 = ["VND", "AUD", "AUF", "AUG", "AUH", "AUJ", "AUK", "USD"];
const route2 = ["VND", "AUH", "AUJ", "USD"];
const route3 = ["VND", "AUH", "AUJ", "AUK", "USD"];
const route4 = ["VND", "AUJ", "USD"];
const route5 = ["VND", "AUJ", "AUK", "USD"];
const calculatePercentage = (after, before) => {
  afAmount = after;
  bfAmount = before;
  const percentData = 1 + (((bfAmount - afAmount) / afAmount) * 100) / 100;
  return percentData;
};
const findPool = (pools, route, rate) => {
  let arrayPercent = [];
  let total = rate;
  for (let a = 0; a < pools.length; a++) {
    const findData = pools.find(
      (item) => item[0].symbol == route[a] && item[1].symbol == route[a + 1]
    );
    if (findData && findData[0].amount && findData[1].amount) {
      arrayPercent.push(
        calculatePercentage(findData[0].amount, findData[1].amount)
      );
    }
  }
  for (let d = 0; d < arrayPercent.length; d++) {
    total *= arrayPercent[d];
  }
  return {
    route,
    rate,
    exchangeRate: total,
  };
};

console.log(findPool(pools, route, 10000));
console.log(findPool(pools, route1, 20000));
console.log(findPool(pools, route2, 30000));
console.log(findPool(pools, route3, 40000));
console.log(findPool(pools, route5, 50000));
