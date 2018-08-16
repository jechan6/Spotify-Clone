import {connect} from "react-redux";
import {logout} from '../../actions/session_action';
import Collection from './collection';

const mapStateToProps = (state, ownProps) => {

  return {
    playlistId: state.audio.playlistId,
    currentUser: state.entities.users[state.session.id]
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
