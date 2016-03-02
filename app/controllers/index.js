import Ember from 'ember';

export default Ember.Controller.extend({
	
	headerMessage	: 'Coming Soon',
  	responseMessage	: '',
	emailAddress 	: '',

	//Checks if the email is valid
	isValid  		: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	//Disables the submit button if no content is found in the email box
	isDisabled		: Ember.computed.empty('emailAddress'),

	  init() {
	  	console.log('init');
  },

  beforeModel(transition) {
console.log('beforeModel');
  },

  model(params, transition) {
console.log('model');
  },

  afterModel(model, transition) {
console.log('afterModel');
  },

  activate() {
console.log('activate');
  },

  setupController(controller, model) {
console.log('setupController');
  },

  renderTemplate(controller, model) {
console.log('renderTemplate');
  },

  

	//Actions
	actions: {
		//Save the invitation
		 saveInvitation() {

		 	//Update model
		 	const email = this.get('emailAddress');
		 	const newInvitation = this.store.createRecord('invitation', {email : email});
		 	
		 	//Save to firebase
		 	newInvitation.save().then((response) => {
		 		//Once promise returns update the response message and empty the email address
			    this.set('responseMessage', 'Thank you! We\'ve just saved your email address: ' +  this.get('emailAddress'));
			    this.set('emailAddress', '');
		 	});

		 	
		 }

	}
});
