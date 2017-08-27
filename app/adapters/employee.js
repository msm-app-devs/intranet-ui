import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',

  /**
    Get all employees from API
    @method download
    @return {Promise} resolves to `RecordArray`
  */
  query() {
    // const locationURL = this.buildURL();
    // const url = `${locationURL}/employee`;;
    const empArray = {
      "data": [
        {
          "id": 1,
          "type": "employees",
          "attributes": {
            "externalId": 1,
            "firstName": "John",
            "lastName": "Owen",
            "position": "UI Developer",
            "team": "Mobile Team",
            "startDate": "12.05.2016",
            "birthDay": "05.08.1986"
          },
          "relationships": {
          }
        },
        {
          "id": 2,
          "type": "employees",
          "attributes": {
            "type": "employees",
            "id": 2,
            "externalId": 2,
            "firstName": "Michael",
            "lastName": "Carrick",
            "position": "UI Developer",
            "team": "Mobile Team",
            "startDate": "12.05.2016",
            "birthDay": "05.08.1986"
          },
          "relationships": {
          }
        },
        {
          "id": 2,
          "type": "employees",
          "attributes": {
          "externalId": 3,
          "firstName": "David",
          "lastName": "Bradley",
          "position": "UI Developer",
          "team": "Mobile Team",
          "startDate": "12.05.2016",
          "birthDay": "05.08.1986"
          },
          "relationships": {
          }
        },
      ],
      "included": [
      ]
    }
    return empArray;
    // return this.ajax(url);
  },
});
