// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Not Found">
        <p><b>"We were neither what we had been nor what
            we would become once we reached our destination."</b><br></br>
            - Jeff Vandermeer, <i>Annihilation</i></p>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
