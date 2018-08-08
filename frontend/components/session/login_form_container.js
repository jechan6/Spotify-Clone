import {connect} from 'react-redux';
import {login, clearErrors} from '../../actions/session_action';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors,
  formType: 'LOG IN'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  demoLogin: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
