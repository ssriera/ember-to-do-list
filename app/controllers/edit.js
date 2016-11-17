import Ember from 'ember';

export default Ember.Controller.extend({
  task: Ember.computed.alias('model')
});
