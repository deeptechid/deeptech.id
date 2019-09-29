import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
// import SubsSection from "@components/SubsSection";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";

import ArticlesHero from "@narative/gatsby-theme-novela/src/sections/articles/Articles.Hero";
import ArticlesList from "@narative/gatsby-theme-novela/src/sections/articles/Articles.List";
import Heading from './../sections/heading/Heading';
import SiapaKami from "../sections/siapakami/Siapa.Kami";

// import Subscription from "@components/Subscription/Subscription";
import Podcast from "@components/Podcast/Podcast";



function ArticlesPage({ location, pageContext }) {
  const articles = pageContext.group;
  const authors = pageContext.additionalContext.authors;

  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <Heading />
      <SiapaKami />
      <ArticlesHero authors={authors} />
      
      <Section narrow>
        <ArticlesList articles={articles} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section>
      <ArticlesGradient />

      <Podcast />

      {/* <SubsSection>
        <Subscription />
      </SubsSection> */}
    </Layout>
  );
}

export default ArticlesPage;

const ArticlesGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;

// const Subscontainer = styled.div`
//   position: relative;
//   width: 100%;
//   max-width: 680px;
//   display: flex;
// `;