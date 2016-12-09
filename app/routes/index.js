import Ember from 'ember';

export default Route.extend({
    beforeModel() {
        this.replaceWith('posts.index');
    }
});
