import { combineReducers} from 'redux'
import cpu from './cpu'
import filters from './filters'
import basket from "./basket"

const rootReducer = combineReducers({
    filters,
    cpu,
    basket
})

export default rootReducer