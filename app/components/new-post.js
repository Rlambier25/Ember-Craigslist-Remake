import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    save1() {
      var params = {
        title: this.get('title'),
        category: this.get('category'),
        postDescription: this.get('postDescription'),
        image: this.get('image'),
        price: this.get('price'),
      }
    }
  }
});
