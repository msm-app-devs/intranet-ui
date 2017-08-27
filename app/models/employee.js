import DS from 'ember-data';

export default DS.Model.extend({
  /**
      @property externalId
      @type number
    */
  externalId: DS.attr('number'),

  /**
    @property firstName
    @type string
  */
  firstName: DS.attr('string'),

  /**
    @property lastName
    @type string
  */
  lastName: DS.attr('string'),

  /**
    @property position
    @type string
  */
  position: DS.attr('string'),

  /**
    @property team
    @type string
  */
  team: DS.attr('string'),

  /**
    @property startDate
    @type date
  */
  startDate: DS.attr('date'),

  /**
    @property birthDay
    @type date
  */
  birthDay: DS.attr('date'),
});
