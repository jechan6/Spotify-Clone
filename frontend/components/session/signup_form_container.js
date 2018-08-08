import {connect} from 'react-redux';
import {signup, clearErrors, login} from '../../actions/session_action';
import SessionForm from './session_form';
const mapStateToProps = state => ({
  errors: state.errors,
  formType: 'SIGN UP'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  demoLogin: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
