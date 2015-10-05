import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return this.store.find('forumpost',params.forumpost_id);
	},
	renderTemplate: function(){
		this.render('forum.forumpost', {into: 'application'});
	}
});
