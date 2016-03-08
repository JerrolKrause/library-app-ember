import Ember from 'ember';

export default Ember.Component.extend({  
	//Inject the service, if property name matches the service name this is all you have to do
    start: Ember.inject.service(),
    //If property name does NOT match service name you can specify it like this
    //someProperty: Ember.inject.service('start'), 
    message: 'This is a test message set by the component.',
    actions: {
        pressMe: function() {
        	//Run the function in the service
            let message = this.get('start').updateProperty();
            //Update the message with the value returned from the service
            this.set('message',message);
            //Now set the isAuthenicated property
            this.set('isAuthenticated',this.get('start').isAuthenticated);
        }
    }
});