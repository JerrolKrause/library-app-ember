import Ember from 'ember';

//Take the input $$$ amount in cents and format it so it looks nice like $1.20.
export function formatCurrency(params, namedArgs) {
  let value = params[0],
      dollars = Math.floor(value / 100),
      cents = value % 100,
      sign = namedArgs.sign === undefined ? '$' : namedArgs.sign; //This is a named argument passed from the helper

  if (cents.toString().length === 1) { cents = '0' + cents; }
  return `${sign}${dollars}.${cents}`;
}

export default Ember.Helper.helper(formatCurrency);