import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(transition){
		var auth = this.controllerFor('auth');
		if(!auth.loggedIn){
			console.log(transition.targetName)
			if(transition.targetName != 'auth'){
				transition.abort();
				console.log('not signed in, redirecting')
				this.transitionTo('auth')
			}
		}
		//will have other stuff here once its connected to restapi
	},
});
