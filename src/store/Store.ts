import { legacy_createStore as createStore} from 'redux';
import { tokenReducer } from './tokens/TokensReducers';

const store = createStore(tokenReducer);

export default store;