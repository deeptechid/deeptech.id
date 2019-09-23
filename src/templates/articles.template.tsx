import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
import BodySection from "@components/BodySection/BodySection";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";

import ArticlesHero from "../sections/articles/Articles.Hero";
import ArticlesList from "../sections/articles/Articles.List";
import HeadingHero from "../sections/heading/Heading.Hero";
import SiapaKami from "../sections/siapakami/Siapa.Kami";

import Subscription from "@components/Subscription/Subscription";
import Podcast from "@components/Podcast/Podcast";

function ArticlesPage({ location, pageContext }) {
  const articles = pageContext.group;
  const authors = pageContext.additionalContext.authors;

  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <HeadingHero />
      <SiapaKami />
      <ArticlesHero authors={authors} />
      
      <Section narrow>
        <ArticlesList articles={articles} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section>
      <ArticlesGradient />

      <PodcastContainer>
        <Podcast />
      </PodcastContainer>

      <Subscription />
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

const PodcastContainer = styled.div`
    width: 75%;
    height: auto;
    text-align: left;
    margin: 20% auto;
    position: relative;
    padding: 2vh;
`;
