import {connect} from 'react-redux';
import {logout} from '../../actions/session_action';
import Browse from './browse';
const mapStateToProps = ({session, entities: {users}}) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
