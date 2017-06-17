import * as types from '../constants'

const initialState = {}

export default function article(state = initialState, action) {
  switch (action.type) {
    case types.RECV_SINGLE_ARTICLE_DATA:
      return action.data
    default:
      return state
  }
}
