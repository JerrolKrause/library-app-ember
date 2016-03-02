import Ember from 'ember';

export default Ember.Route.extend({
	model() {
	    return this.store.findAll('contact');
	},

	actions: {
		//Delete contact
		deleteContact(contact){
			//Confirmation popup
			let confirmation = confirm('Are you sure?');

			//If yes, delete record
			if (confirmation){
				contact.destroyRecord();
			}


		}//end Delete contact
	}
});
