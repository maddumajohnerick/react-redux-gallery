import axios from 'axios';
import _ from 'lodash';

export function getArtsSuccess(sites) {
  return { type: 'FIND_ARTS_SUCCESS', sites };
}

export function getArts() {
  return function (dispatch) {
    axios({
      method:'get',
      url:'https://arcane-dusk-64804.herokuapp.com/deviant-works',
    })
    .then(function(response) {
      const byIds = _.mapKeys(response.data, '_id');
      const resObj = {
        allIds: Object.keys(byIds),
        byIds,
      };

      console.log(resObj);
    });
  };

}

export function getArt() {

}
