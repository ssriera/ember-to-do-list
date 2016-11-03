import Ember from 'ember';

const { get, set } = Ember;

export default Ember.Controller.extend({
  isDone: false,
  actions: {
    save() {
      let newTask = {
        id: 1,
        description: this.get('description'),
        deadline: this.get('deadline'),
        isDone: false
      };

      this.get('model').pushObject(newTask);
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
