import DS from 'ember-data';


export default DS.Model.extend({
  description: DS.attr('string'),
  deadline: DS.attr('string'),
  isDone: DS.attr('boolean', { defaultValue: false })
});
