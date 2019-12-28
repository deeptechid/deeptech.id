import React from "react";

import Section from "@narative/gatsby-theme-novela/src/components/Section/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO/SEO";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout/Layout";
import Blog from "../@narative/gatsby-theme-novela/sections/articles/Blog";

function ArticlesPage({ location, pageContext }) {
  return (
    <Layout>
      <SEO title="DeepTech" pathname={location.pathname} />

      <Section narrow>
        <Blog></Blog>
      </Section>
    </Layout>
  );
}

export default ArticlesPage;
