import Ember from 'ember';

export default Ember.Route.extend({

	model() {
	    return this.store.createRecord('library');
	  },

	  //Create a controller for this route
	  setupController: function(controller, model){
	  	// Call _super for default behavior
	  	this._super(controller, model);

	  	//Set variables for this controller, they are used by the component
	  	controller.set('title', 'Create a new library');
	  	controller.set('buttonLabel', 'Create');
	  },

	  //Use the following template instead of the default one provided by the route
	  renderTemplate(){
	  	 this.render('libraries/form');
	  },

	  actions: {
	  	//Save this change and then go back to the libraries page
	    saveLibrary(newLibrary) {
	      newLibrary.save().then(() => this.transitionTo('libraries'));
	    },

	    willTransition() {
	      // rollbackAttributes() removes the record from the store
	      // if the model 'isNew'
	      this.controller.get('model').rollbackAttributes();
	    }
	  }
	
});
