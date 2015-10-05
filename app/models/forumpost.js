import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	content: DS.attr('string'),
	author: DS.attr('string'),
	upvotes: DS.attr('number')
});
