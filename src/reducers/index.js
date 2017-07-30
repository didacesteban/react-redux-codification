import {combineReducers} from 'redux';
import CodifyActions from './codify';

const allReducers = combineReducers({
    codifyActions: CodifyActions
});

export default allReducers
