import Auth from './Auth'
import Config from './Config'
import { combineReducers } from 'redux'

export default combineReducers({
    Auth: Auth,
    Config: Config
});
