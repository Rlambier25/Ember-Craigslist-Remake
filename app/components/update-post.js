import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  action: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        name: this.get('name'),
        title: this.get('title'),
        description: this.get('description'),
        image: this.get('image'),
        price: this.get('price')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params)
    }
  }
});
