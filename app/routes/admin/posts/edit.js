import Ember from 'ember';

export default Ember.Route.extend({

	model(params) {
	    return this.store.findRecord('post', params.post_id);
	},

	  //Create a controller for this route
	  setupController: function(controller, model){
	  	// Call _super for default behavior
	  	this._super(controller, model);

	  	//Set variables for this controller, they are used by the component
	  	controller.set('title', 'Edit blog post');
	  	controller.set('buttonLabel', 'Save Changes');
	  },

	  /*
	  //Use the following template instead of the default one provided by the route
	  renderTemplate(){
	  	 //this.render('libraries/form');
	  },
	  */

	  actions: {
	  	//Save this change and then go back to the posts page
	    savePost(newPost) {
	      newPost.save().then(() => this.transitionTo('admin.posts'));
	    },

	    willTransition() {
	      // rollbackAttributes() removes the record from the store
	      // if the model 'isNew'
	      this.controller.get('model').rollbackAttributes();
	    }
	  }
	  
	
});
