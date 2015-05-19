import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('model.description'),
  actions: {
    save: function() {
      if (!this.get('hasDescription')) {
        this.set('errorMessage', 'You have to provide a description');
        return false;
      } else {
        return true;
      }
    }
  }
});
