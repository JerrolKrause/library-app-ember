import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

	email			: DS.attr('string'),
	message			: DS.attr('string'),
	hasResponse		: DS.attr('string'),

	//Checks if an email address is present
	validEmail		: Ember.computed.notEmpty('email'),
	//Checks if the textarea has at least 5 characters typed
	validMessage	: Ember.computed.gte('message.length', 5),
	//Checks if both a valid email and a valid message are valid
	isDisabled		: Ember.computed.not('validMessage', 'validEmail')

});