import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function() { 
		//Get posts and them sort them by postDate
	    return this.store.findAll('post').then(posts => posts.sortBy('postDate:desc'));
	}
});
