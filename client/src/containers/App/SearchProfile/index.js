import { connect } from 'react-redux';

import SearchProfile from 'src/components/App/SearchProfile';
import { saveMessageReceiver, removeMessage } from 'src/actions/auth';

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => {
  return {
    saveMessageReceiver: (receiver_id) => {
      dispatch(saveMessageReceiver(receiver_id));
    },
    removeMessage: () => {
      dispatch(removeMessage());
    }
  }
};

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(SearchProfile);