import * as types from '../constants'

const initialState = [
]

export default function articles(state = initialState, action) {
  switch (action.type) {
    case types.RECV_ARTICLE_ERROR:
      //TODO do something
      return state
    case types.RECV_ARTICLE_DATA:
      return action.data
    default:
      return state
  }
}
