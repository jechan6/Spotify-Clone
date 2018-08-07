import {connect} from 'react-redux';
import {signup, clearErrors} from '../../actions/session_action';
import SessionForm from './session_form';
const mapStateToProps = state => ({
  errors: state.errors,
  formType: 'SIGN UP'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
