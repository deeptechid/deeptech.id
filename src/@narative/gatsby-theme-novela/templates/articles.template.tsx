import React from "react";

import Section from "@narative/gatsby-theme-novela/src/components/Section/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO/SEO";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout/Layout";
import Heading from "./../sections/heading/Heading";
import SiapaKami from "./../sections/siapakami/Siapa.Kami";
import Podcast from "../components/Podcast/Podcast";
import Blog from "../sections/articles/Blog";
import Paginator from "@narative/gatsby-theme-novela/src/components/Navigation/Navigation.Paginator";
import ArticlesList from "@narative/gatsby-theme-novela/src/sections/articles/Articles.List";
import ArticlesHero from "@narative/gatsby-theme-novela/src/sections/articles/Articles.Hero";
import styled from "@emotion/styled";

function ArticlesPage({ location, pageContext }) {
  const articles = pageContext.group;
  const authors = pageContext.additionalContext.authors;

  return (
    <Layout>
      <SEO title="DeepTech" pathname={location.pathname} />
      <Heading />
      <SiapaKami />

      <Section narrow>
        <Blog></Blog>
      </Section>

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

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;

export default ArticlesPage;
