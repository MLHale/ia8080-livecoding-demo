import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	title: DS.attr('string'),
	content: DS.attr('string'),
	author: DS.attr('string'),
	likes: DS.attr('number'),
	upvotes: Ember.computed('likes', function(){
		return this.get('likes');
	}),
	tags: DS.attr('array')
});
