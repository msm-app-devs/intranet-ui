import Ember from 'ember';

const {
  Route,
  RSVP,
  RSVP: { hash },
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  /**
    Fetches all `employee` from the store.
    @method model
    @return {DS.PromiseManyArray} Collection of `LocationModel`
  */
  model(params) {
    return hash({
        employees: this.store.query('employee', {})
    })
  },

  /**
    set locations for display, and default to picking the first
    @method setupController
    @param {LocationsController} controller
    @param {LocationModel[]} model
    @public
  */
  setupController(controller, model) {
    debugger;
    controller.setProperties({
      'attrs.employees': model.employees
    });
  }
});
