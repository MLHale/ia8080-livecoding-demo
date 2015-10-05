import Ember from 'ember';

export default Ember.Controller.extend({
	username: '',
	loggedIn: false,
	errorMsg: '',
	remember: false,
	action: {
		login: function(){
			//do stuff to authenticate here
			this.set('loggedIn', true);
		}
	}
});
