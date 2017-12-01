import Component from '@ember/component';
import Ember from 'ember';

const { computed } = Ember;

export default Component.extend({
  selectedTab: 'home',
  tabs: computed('selectedTab', function () {
    return [
      {
        path: 'projects',
        text: 'Projects',
        selected: this.get('selectedTab') === 'projects'
      },
      {
        path: 'about',
        text: 'About',
        selected: this.get('selectedTab') === 'about'
      },
      {
        path: 'other',
        text: 'Other',
        selected: this.get('selectedTab') === 'other'
      },
      {
        path: 'mainpage',
        text: 'Home',
        selected: this.get('selectedTab') === 'home'
      }
    ];
  })
});
