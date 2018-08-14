import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import UiReducer from './ui_reducer';
import modalReducer from './modal_reducer';
import audioReducer from './audio_reducer';
const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: UiReducer,
  modal: modalReducer,
  audio: audioReducer
});

export default rootReducer;
