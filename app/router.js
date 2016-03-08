import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,

   redirect: function () {
    var url = this.router.location.formatURL('/not-found');
    if (window.location.pathname !== url) {
      this.transitionTo('/not-found');
    }
  }
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('about');
  this.route('contact');

  this.route('admin', function() {
    this.route('invitations');
    this.route('contact');
    this.route('seeder');
    this.route('libraries');
    this.route('posts', function(){
      this.route('new');
      this.route('edit', { path: '/edit/:post_id' });
    });
  });

  this.route('libraries', function() {
    this.route('new');
    this.route('edit', { path: '/:library_id/edit' });
  });

  this.route('blog', function() {
    this.route('post', { path: '/:post_id' });
  });

  this.route('not-found', { path: '/*path' });
  this.route('demos');
});



export default Router;