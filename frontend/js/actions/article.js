
import * as types from '../constants'
import axios from 'axios'

export function getArticleData(id) {
  return function(dispatch) {
    return axios.get('/articles/' + id + '.json')
      .then(function(response) {
        dispatch(receiveSingleData(response.data));
      })
      .catch(function(res){
        dispatch(receiveError(res))
      })
  }
}

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

export function updateArticle(param) {
  return function(dispatch) {
    return axios.patch('/articles/' + param.id +  '.json', {
          title: param.title,
          text: param.text
      })
      .then(function(response) {
        dispatch(getArticleData(param.id))
        alert("更新しました")
      })
      .catch(function(res){
        dispatch(receiveError(res))
      })
  }
}

export function getArticles() {
  return function(dispatch) {
    return axios.get('/articles.json')
      .then(function(response) {
        dispatch(receiveData(response.data));
      })
      .catch(function(res){
        dispatch(receiveError(res));
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

function receiveSingleData(json) {
  return {
    type: types.RECV_SINGLE_ARTICLE_DATA,
    data: json
  }
}
