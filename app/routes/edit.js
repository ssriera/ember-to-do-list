import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let task = this.store.find('task', params.id);
    return task;
  },
  actions: {
    saveEdit(model, description, deadline) {
      model.setProperties( {
        description,
        deadline
      });
      model.save().then(() => this.transitionTo('application'));
    }
  }
});
