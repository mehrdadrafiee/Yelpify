import Ember from 'ember';

export default Ember.Controller.extend({
  user: 'Alex',
  isDisabled: true,

  actions: {
    updateFriends() {
      console.log("HEREE");
    }
  }
});
