import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		foo: function(upvotes){
			console.log('called food in forum');
			console.log('upvotes are: ' + upvotes);
		}
	}
});
