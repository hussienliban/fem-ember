import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { Route, inject, getOwner, set } = Ember;

export default Route.extend(ApplicationRouteMixin, {
    session: inject.service(),
    actions: {
        logout() {
            this.get('session').invalidate();
        }
    },
  setupController(controller) {
    this._super(...arguments);
    let locObj = getOwner(this).lookup('data:location');
    set(controller, 'loc', locObj);
  }
});
