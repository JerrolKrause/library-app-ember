import Ember from 'ember';

export default Ember.Component.extend({
	buttonLabel : 'Save',

	actions: {
		//On button clicked, send to route action
		buttonClicked(param){
			this.sendAction('action', param);
		}

	}
});
