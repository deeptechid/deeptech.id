import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
// import SubsSection from "@components/SubsSection";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";

import ArticlesHero from "../sections/articles/Articles.Hero";
import ArticlesList from "../sections/articles/Articles.List";

import EventHero from "../sections/event/Event.Hero";
import EventList from "../sections/event/Event.List";

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
        <ArticlesList articles={articles} authors={authors}/>
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section>
      <ArticlesGradient />

      <EventHero authors={authors} />

      {/* <Section narrow>
        <Articl articles={articles} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section>
      <ArticlesGradient /> */}

      <Section narrow>
        <EventList articles={articles} authors={authors}/>
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