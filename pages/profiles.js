import Layout from '../features/Layout'
import css from '../styles/style.scss';
import api from "../services/api";

const ProfileInfo = (props) => {
    return (
        <Layout>
            <h1 className={css.example}>{props.profile.name}</h1>
            <p>{props.profile.carrer}</p>
            <p>{props.profile.biography}</p>
        </Layout>
    )
};

// ssr and client initial props
ProfileInfo.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await api.profiles.byId(id);
  const profile = res.data;

  return {
    profile
  }
};

export default ProfileInfo