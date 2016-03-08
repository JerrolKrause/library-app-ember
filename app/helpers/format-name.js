import Ember from 'ember';

export function formatName(params) {
   //escapeExpression sanitizes untrustworthy content to minimize XSS risks
   //If you need to wrap HTML not in a component, escape it first and then add it back in manually
   let value = Ember.Handlebars.Utils.escapeExpression(params[0] + " " + params[1]);
   return value;
}

export default Ember.Helper.helper(formatName);
