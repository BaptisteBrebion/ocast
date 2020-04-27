import { connect } from "react-redux";

// == Import : local
import { countAllCandidates } from "src/actions/candidate";
import Counter from "src/components/App/Home/Introduction/Counter";

const mapStateToProps = state => ({
  count: state.counter.candidatesCounter
});

const mapDispatchToProps = dispatch => {
  return {
    countAllCandidates: () => {
      dispatch(countAllCandidates());
    }
  };
};
// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
