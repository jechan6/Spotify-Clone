import {connect} from "react-redux";
import {logout} from '../../actions/session_action';
import Featured from './featured';
const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
