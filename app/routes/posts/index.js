import Ember from 'ember';

const { Route, getOwner, set } = Ember;
export default Route.extend({
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
