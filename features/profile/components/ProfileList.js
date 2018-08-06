import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Layout from '../../layout/Layout';
import css from '../../../styles/style.scss';
import { slugify } from '../../../utils';
import { fetchAll } from '../../../state/profile/actions';

const ProfileList = ({
    profiles,
}) => (
  <Layout>
    <h1 className={css.example}>Perfis</h1>
    <ul>
      {profiles.map(p => (
        <li key={p.id}>
          <Link as={`/medico/${slugify(p.name)}/${p.id}`} href={`/profile-info?id=${p.id}`}>
            <a>{p.treatment} {p.name}</a>
          </Link>
        </li>
          ))}
    </ul>
  </Layout>
    );

// eslint-disable-next-line func-names
ProfileList.getInitialProps = async function (context) {
  const store = context.store;
  store.dispatch(fetchAll());
};

ProfileList.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      treatment: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

ProfileList.defaultProps = {
  profiles: [],
};

export default ProfileList;
