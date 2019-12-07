import React from "react";

import Section from "@narative/gatsby-theme-novela/src/components/Section/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO/SEO";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout/Layout";
import Heading from "./../sections/heading/Heading";
import SiapaKami from "./../sections/siapakami/Siapa.Kami";
import Podcast from "../components/Podcast/Podcast";
import Blog from "../sections/articles/Blog";

function ArticlesPage({ location, pageContext }) {
  return (
    <Layout>
      <SEO title="DeepTech" pathname={location.pathname} />
      <Heading />
      <SiapaKami />

      <Section narrow>
        <Blog></Blog>
      </Section>

      <Podcast />
    </Layout>
  );
}

export default ArticlesPage;
