import { combineReducers } from 'redux';
import categories from './categories';
import blog from './blog';

export default combineReducers({
    categories,
    blog
})