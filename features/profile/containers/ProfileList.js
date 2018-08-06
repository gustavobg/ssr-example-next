import { connect } from 'react-redux';
import ProfileList from '../components/ProfileList';

export default connect(state => state.profile)(ProfileList);
