import Ember from 'ember';

export default Ember.Route.extend({

	  setupController(controller, model) {
	  	// Call _super for default behavior
	  	this._super(controller, model);

	  	controller.set('headerMessage', 'Coming Soon');
	  	controller.set('responseMessage', '');
	  	controller.set('emailAddress', '');

	  	controller.set('isValid', Ember.computed.match('emailAddress', /^.+@.+\..+$/));
	  	controller.set('isDisabled', Ember.computed.empty('emailAddress'));
	  },
	  

	//Actions
	actions: {
		//Save the invitation
		 saveInvitation() {
		 	//Update model
		 	const email = this.controller.get('emailAddress');
		 	const newInvitation = this.store.createRecord('invitation', {email : email});
		 	
		 	//Save to firebase
		 	newInvitation.save().then((response) => {
		 		//Once promise returns update the response message and empty the email address
			    this.controller.set('responseMessage', 'Thank you! We\'ve just saved your email address: ' +  this.controller.get('emailAddress'));
			    this.controller.set('emailAddress', '');
		 	});
		 }//end saveInvitation
	}


});
