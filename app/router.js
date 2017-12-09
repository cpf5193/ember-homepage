import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('mainpage', { path: '' });
  this.route('projects', function () {
    this.route('info343', { path: 'webtechnologies' });
    this.route('other');
    this.route('path-vis');
    this.route('wordsolver');
    this.route('cse154', { path: 'webprogramming' });
  });
  this.route('about');
  this.route('other');
  this.route('resume');
});

export default Router;
