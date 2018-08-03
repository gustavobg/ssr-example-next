import React from 'react';
import Layout from '../features/Layout'
import css from '../styles/style.scss';
import {connect} from "react-redux";
import {fetchById} from "../state/profiles/actions";


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
    // async resolved in _app
    // https://www.robinwieruch.de/nextjs-redux-saga/
    const store = context.store;
    const { id } = context.query;

    store.dispatch(fetchById(id));

};

export default connect(state => state.profiles)(ProfileInfo)