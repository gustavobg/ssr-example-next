import Layout from "../features/Layout";
import {withRouter} from 'next/router';

const Content = withRouter((props) => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>This is the about page</p>
    </div>
));

const Page = (props) => (
    <Layout>
        <Content />
    </Layout>
)

export default Page