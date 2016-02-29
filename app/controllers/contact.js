import Ember from 'ember';

export default Ember.Controller.extend({
	
	//Parameters
	emailAddress 	: '',
	message			: '',
	hasResponse		: '',

	//Checks if an email address is present
	validEmail		: Ember.computed.notEmpty('emailAddress'),
	//Checks if the textarea has at least 5 characters typed
	validMessage	: Ember.computed.gte('message.length', 5),
	//Checks if both a valid email and a valid message are valid
	isDisabled		: Ember.computed.not('validMessage', 'validEmail'),

	actions: {
		//On contact form submit
		submit : function(){

			//Update model
		 	const email = this.get('emailAddress');
		 	const message = this.get('message');
		 	const newContact = this.store.createRecord('contact', {email : email, message : message});
		 	
		 	//Save to firebase
		 	newContact.save().then((response) => {
		 		//Once promise returns update the response message and empty the email address
			    this.set('hasResponse', this.get('emailAddress') + '<br/>' + this.get('message'));
				this.set('emailAddress', '');
				this.set('message', '');
		 	});

		}
	}
});
