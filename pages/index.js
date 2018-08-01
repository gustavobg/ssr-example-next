import Layout from '../features/Layout'
import Link from 'next/link'
import css from '../styles/style.scss';
import api from "../services/api";
import {slugify} from "../utils";

const Index = ({
    profiles
}) => {
    return (
      <Layout>
        <h1 className={css.example}>Perfis</h1>
        <ul>
          {profiles.map((p) => (
            <li key={p.id}>
              <Link as={`/medico/${slugify(p.name)}/${p.id}`} href={`/profiles?id=${p.id}`}>
                <a>{p.treatment} {p.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
}

// ssr and client initial props
Index.getInitialProps = async function() {
  const res = await api.profiles.all();
  const profiles = res.data;

  return {
    profiles
  }
};

export default Index