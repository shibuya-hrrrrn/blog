import * as types from '../constants'

const initialState = [
]

export default function experts(state = initialState, action) {
  switch (action.type) {
    case types.RECV_EXPERT_ERROR:
      console.debug(action)
      console.debug("エラーが発生しました。")
      return state
    case types.RECV_EXPERT_DATA:
      return action.data
    case types.REQ_EXPERT_DATA:
      return state
    default:
      return state
  }
}
