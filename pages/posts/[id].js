import Head from 'next/head';
import React from 'react';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../src/components/date';
import utilStyles from '../../styles/utils.module.css';
import Layout from '../../src/components/Layout';

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
