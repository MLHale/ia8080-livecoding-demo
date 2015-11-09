import Ember from 'ember';

export default Ember.Controller.extend({
	username: '',
	loggedIn: false,
	errorMsg: '',
	remember: false,
	actions: {
		login: function(){
			//do stuff to authenticate here
			
			var user = this.get('username');
			console.log('login as: '+user);
			if(user==""){
				this.set('errorMsg', 'enter a username');
			}
			else{
				this.set('loggedIn', true);
				this.transitionTo('home');
			}

		}
	}
});
