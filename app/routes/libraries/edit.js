import Ember from 'ember';

export default Ember.Route.extend({

	model(params) {
	    return this.store.findRecord('library', params.library_id);
	},


	 //Create a controller for this route
	  setupController: function(controller, model){
	  	// Call _super for default behavior
	  	this._super(controller, model);

	  	//Set variables for this controller, they are used by the component
	  	controller.set('title', 'Edit library');
	  	controller.set('buttonLabel', 'Save Changes');
	  },

	  //Use the following template instead of the default one provided by the route
	  renderTemplate(){
	  	 this.render('libraries/form');
	  },


	actions: {
		//Save the library and then transition to the libraries page
	    saveLibrary(newLibrary) {
	      newLibrary.save().then(() => this.transitionTo('libraries'));
	    },

	    //Check if the user started editing but tried to go to a new page before clicking save
	    willTransition(transition) {
	      //Get the model attached to this route
	      let model = this.controller.get('model');

	      //Check if hasDirtyAttributes is set, if so prompt for confirmation
	      if (model.get('hasDirtyAttributes')) {
	        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

	        //If the user clicks confirm, do stuff
	        if (confirmation) {
	          model.rollbackAttributes();
	        } else {
	          transition.abort();
	        }
	      }
	    }
	  }

});
