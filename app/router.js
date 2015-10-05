import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('forum', function(){
    this.route('forumpost', {path: 'post/:forumpost_id'}, function() {});
  });
  this.route('auth');
});

export default Router;
