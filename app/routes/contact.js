import Ember from 'ember';

export default Ember.Route.extend({

	model() {
	    return this.store.createRecord('contact'); //Needs to be createRecord to pull from the model
	},

	actions: {
		//On contact form submit
		submit : function(model){

			//Save model to server then set hasResponse to true
		 	//model.save().then(() => this.controller.set('hasResponse', true));
		 	model.save().then(() => this.controller.get('model').set('hasResponse', true));

		 	//Get/Set a variable on this route's controller
		 	//this.controller.set('hasResponse', 'Foo@bar.com');
		 	//this.controller.get('hasResponse');

		 	//Get/Set a variable on this route's method
		 	//this.controller.set('email','foo@bar.com')
		 	//this.controller.get('model')

		}//end submit

	}

});
