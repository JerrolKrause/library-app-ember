import Ember from 'ember';

export default Ember.Route.extend({

	model(params) {
	    return this.store.findRecord('post', params.post_id);
	},

/**/
	//Create a controller for this route
	  setupController: function(controller, model){
	  	// Call _super for default behavior
	  	this._super(controller, model);
	  	//console.log(params);
	  	//console.log(this.controller.get('model').params);

	  	//Set variables for this controller, they are used by the component
	  	//controller.set('title', 'Edit library');
	  	//controller.set('buttonLabel', 'Save Changes');
	  },

/*
	  //Use the following template instead of the default one provided by the route
	  renderTemplate(){
	  	 //this.render('libraries/form');
	  },
*/

});
