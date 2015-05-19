import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.description',
    function() {
      return !Ember.isEmpty(this.get('model.description'));
    }
  ),
  actions: {
    save: function() {
      if (!this.get('isValid')) {
        this.set('errorMessage', 'You have to provide a description');
        return false;
      } else {
        return true;
      }
    }
  }
});
