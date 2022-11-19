// v8 chrome 107
const number = 123456.789;

const china = Intl.NumberFormat('zh-CN', {
  style: 'currency',
  currency: 'CNY',
});

console.log(china.format(number)); // ￥123,456.79

const iraq = Intl.NumberFormat('ar-IQ', {
  style: 'currency',
  currency: 'IQD',
})

console.log(iraq.format(number)); //١٢٣٬٤٥٧

const us = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(us.format(number)); //$123,456.79
