import Ember from 'ember';

export default Ember.Route.extend({

	model() {
	    return this.store.findAll('library');
	},

	actions: {

    //Delete library record 
    deleteLibrary(library) {
      let confirmation = confirm('Are you sure?');

      //If yes, delete record
      if (confirmation) {
        library.destroyRecord();
      }
    }//end deleteLibrary

  }
	  
});
