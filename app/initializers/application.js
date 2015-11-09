import DS from 'ember-data';
import Ember from 'ember';

export function initialize(application) {
  	//custom array transform for ember Data
	DS.ArrayTransform = DS.Transform.extend({
		deserialize: function(serialized) {
			return (Ember.typeOf(serialized) == "array") ? serialized : [];
		},

		serialize: function(deserialized) {
			var type = Ember.typeOf(deserialized);
			if (type == 'array') {
				return deserialized;
			} else if (type == 'string') {
				return deserialized.split(',').map(function(item) {
					return Ember.$.trim(item);
				});
			} else {
				return [];
			}
		}
	});
	//custom object transform for ember data
	DS.ObjectTransform = DS.Transform.extend({
		deserialize: function(serialized) {
			return (Ember.typeOf(serialized) == 'object') ? serialized : null;
		},

		serialize: function(deserialized) {
			var type = Ember.typeOf(deserialized);
			if (type == 'object') {
				return deserialized;
			} else if (type == 'string') {
				return deserialized.split(',').map(function(item) {
					return Ember.$.trim(item);
				});
			} else {
				return null;
			}
		}
	});

	application.register("transform:array", DS.ArrayTransform);
	application.register("transform:object", DS.ObjectTransform);
}

export default {
  name: 'application',
  initialize: initialize
};
