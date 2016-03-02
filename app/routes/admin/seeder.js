import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		//Ember.RSVP for download more models in the same route
		//RSVP.hash wraps more promises and return a nicely structured hashed object
	    return Ember.RSVP.hash({
	      libraries		: this.store.findAll('library'),
	      books			: this.store.findAll('book'),
	      authors		: this.store.findAll('author')
	    })
	  },

	  //Add controller to this route
	  setupController(controller, model) {
	  	//Now set parameters from the model to be accessible from the controller
	    controller.set('libraries', model.libraries);
	    controller.set('books', model.books);
	    controller.set('authors', model.authors);
	  }


});
