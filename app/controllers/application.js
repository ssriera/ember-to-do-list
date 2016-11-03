import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(description, deadline) {
      this.get('store').createRecord('task', {
        description,
        deadline
      }).save();
    },
    showAll() {

    },
    showCompleted() {

    },
    showIncomplete() {

    },
    editTask() {

    },
    delete(task) {
      task.deleteRecord();
      task.save();
    }
  }
});
