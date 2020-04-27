// == Import : npm
import { connect } from 'react-redux';
import { seeRecruiterProfile } from 'src/actions/candidate';

// == Import : local
import RecruiterProfileConv from 'src/components/App/RecruiterProfileConv';

const mapStateToProps = (state, ownProps) => {
  return ({
  id: ownProps.match.params.recruiterId,
  recruiter: state.candidate.recruiterProfileConsultation
})};

const mapDispatchToProps = (dispatch) => ({
  seeRecruiterProfile: (recruiterId) => {
    dispatch(seeRecruiterProfile(recruiterId));
  }
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(RecruiterProfileConv);
