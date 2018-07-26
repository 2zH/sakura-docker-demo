import { combineReducers } from 'redux'
import { matches, others, when } from '../utils/matches'

interface IdrawerAction {
  type: string
}

const drawerToggle = (state = [], action: IdrawerAction) =>
  matches(action.type) (
    when('OPEN_DRAWER', () => true),
    when('CLOSE_DRAWER', () => false),
    others(() => false)
  )

export default combineReducers({
  drawerToggle
})
