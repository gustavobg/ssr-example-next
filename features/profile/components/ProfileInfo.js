import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layout/Layout';
import css from '../../../styles/style.scss';
import { fetchById } from '../../../state/profile/actions';

const ProfileInfo = props => (
  <Layout>
    <h1 className={css.example}>{props.profile.name}</h1>
    <p>{props.profile.carrer}</p>
    <p>{props.profile.biography}</p>
  </Layout>
);

// eslint-disable-next-line func-names
ProfileInfo.getInitialProps = async function (context) {
  // async resolved in _app
  // https://www.robinwieruch.de/nextjs-redux-saga/
  const store = context.store;
  const { id } = context.query;

  store.dispatch(fetchById(id));
};

ProfileInfo.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    treatment: PropTypes.string,
    carrer: PropTypes.string,
    biography: PropTypes.string,
  }).isRequired,
};

ProfileInfo.defaultProps = {
  children: null,
};

export default ProfileInfo;
