import Ember from 'ember';

export default Ember.Route.extend({

	model() {
	    return this.store.findAll('invitation');
	},

	actions: {
		//Delete invitation
		deleteInvitation(invitation){
			//Confirmation popup
			let confirmation = confirm('Are you sure?');

			//If yes, delete record
			if(confirmation){
				invitation.destroyRecord();
			}

		}//end deleteInvitation

	}
	
});
