import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../src/components/date';
import Layout, { siteTitle } from '../src/components/Layout';
import utilStyles from '../styles/utils.module.css';

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hola, soy un estudiante de Licenciatura en Informática en la
          Universidad Nacional de Quilmes, actualmente me encuentro en el area
          del desarrollo web, especificamente Front End. Por el momento manejo
          las tecnologías JS, HTML, CSS, React, SASS, PostgreSQL. Espero que
          disfrutes mi perfil.
        </p>
        <p>
          Más proyectos en 👋{' '}
          <a href='https://jmsanchezdiaz.github.io/portfolio'>
            Link a mi portfolio
          </a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps = () => {
  const posts = getSortedPostsData();

  return {
    props: {
      posts,
    },
  };
};
