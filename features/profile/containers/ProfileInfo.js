import { connect } from 'react-redux';
import ProfileInfo from '../components/ProfileInfo';

export default connect(state => state.profile)(ProfileInfo);
