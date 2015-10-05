import Ember from 'ember';

export default Ember.Component.extend({
	post: null,
	actions: {
		upvote: function(){
			var post = this.get('post');
			post.set('upvotes', post.get('upvotes') +1);
			post.save();
		}
	}
});
