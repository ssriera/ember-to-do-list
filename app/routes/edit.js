import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let task = this.store.find('task', params.id);
    return task;
  }
});
