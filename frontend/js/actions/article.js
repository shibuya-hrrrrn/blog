
import * as types from '../constants'
import axios from 'axios'

export function addArticle(param) {
  return function(dispatch) {
    return axios.post('/articles.json', {
          title: param.title,
          text: param.text
      })
      .then(function(response) {
        dispatch(reset('articleInput'))
        alert("登録しました")
      })
      .catch(function(res){
        dispatch(receiveError(res))
      })
  }
}

function receiveData(json) {
  return {
    type: types.RECV_ARTICLE_DATA,
    data: json
  }
}

function receiveError(json) {
  alert(json.exception)
  return {
    type: types.RECV_ARTICLE_ERROR,
    data: json
  }
}
