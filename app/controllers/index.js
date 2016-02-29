import Ember from 'ember';

export default Ember.Controller.extend({

	headerMessage: 'Coming Soon',
  	responseMessage: '',
	emailAddress 	: '',

	//Checks if the email is valid
	isValid  		: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	//Disables the submit button if no content is found in the email box
	isDisabled		: Ember.computed.empty('emailAddress'),

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
