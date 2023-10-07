const iseven = require('is-even');
const isOdd = require('is-odd');
const notOdd = num =>iseven(num);
const notEven = num =>isOdd(num);

module.exports =  {
  notOdd, 
  notEven
}
