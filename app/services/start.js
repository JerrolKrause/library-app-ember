import Ember from 'ember';

export default Ember.Service.extend({
	isAuthenticated: true,
    updateProperty: function() {
        return "This is a message set by the service by calling this services's function.";
    }
});
