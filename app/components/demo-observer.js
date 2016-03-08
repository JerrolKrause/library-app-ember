import Ember from 'ember';

export default Ember.Component.extend({
 	
  isDisabled: true,

  emailAddress: '',

  //Computed property is only updated when used
  actualEmailAddress: Ember.computed('emailAddress', function() { 
    console.log('computed is called: ', this.get('emailAddress'));
  }),

  //Observer property is updated everytime the observed property is changed
  emailAddressChanged: Ember.observer('emailAddress', function() { 
    console.log('observer is called', this.get('emailAddress')); 
  }),


	actions: {

		checkEmail: function(){
			let stuff = this.get('actualEmailAddress');
		}

	}

});
