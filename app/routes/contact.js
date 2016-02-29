import Ember from 'ember';

export default Ember.Route.extend({

	model() {
	    return this.store.createRecord('contact'); //Needs to be createRecord to pull from the model
	},

	actions: {
		//On contact form submit
		submit : function(model){

			//Save model to server then set hasResponse to true
		 	model.save().then(() => this.controller.set('hasResponse', true));

		}//end submit
	}

});
