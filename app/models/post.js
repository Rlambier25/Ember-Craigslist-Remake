import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    category: DS.attr(),
    title: DS.attr(),
    image: DS.attr(),
    description: DS.attr()
});
