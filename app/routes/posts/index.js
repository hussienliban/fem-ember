import Ember from 'ember';

const { Route, getOwner, get, set } = Ember;
export default Ember.Route.extend({
  init() {
    this._super(...arguments);

    this.geo = getOwner(this).lookup('data:geo');
  },

  setupController() {
    this._super(...arguments);
    set(this.controller, "loc", getOwner(this, "data:geo"));
    console.log(getOwner(this, "data:geo"));
  }
});
