import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(description, deadline) {
      this.get('store').createRecord('task', {
        description,
        deadline
      });
    },
    showAll() {

    },
    showCompleted() {

    },
    showIncomplete() {

    },
    editTask() {

    },
    delete() {
    }
  }
});
