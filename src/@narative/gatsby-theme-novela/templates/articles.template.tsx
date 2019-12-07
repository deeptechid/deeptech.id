import React from "react";
import styled from "@emotion/styled";

import Section from "@narative/gatsby-theme-novela/src/components/Section/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO/SEO";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout/Layout";
import Paginator from "@narative/gatsby-theme-novela/src/components/Navigation/Navigation.Paginator";
import ArticlesHero from "@narative/gatsby-theme-novela/src/sections/articles/Articles.Hero";
import ArticlesList from "@narative/gatsby-theme-novela/src/sections/articles/Articles.List";
import Heading from "./../sections/heading/Heading";
import SiapaKami from "./../sections/siapakami/Siapa.Kami";
import Podcast from "../components/Podcast/Podcast";

function ArticlesPage({ location, pageContext }) {
  const articles = pageContext.group;
  const authors = pageContext.additionalContext.authors;

  return (
    <Layout>
      <SEO title="DeepTech" pathname={location.pathname} />
      <Heading />
      <SiapaKami />
      <ArticlesHero authors={authors} />

      <Section narrow>
        <ArticlesList articles={articles} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section>

      <Podcast />
    </Layout>
  );
}

export default ArticlesPage;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;
