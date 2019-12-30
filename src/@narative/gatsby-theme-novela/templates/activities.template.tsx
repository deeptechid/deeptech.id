import React from "react";

import Section from "@narative/gatsby-theme-novela/src/components/Section/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO/SEO";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout/Layout";
import Paginator from "@narative/gatsby-theme-novela/src/components/Navigation/Navigation.Paginator";
import ArticlesList from "@narative/gatsby-theme-novela/src/sections/articles/Articles.List";
import ArticlesHero from "../sections/articles/Articles.Hero";
import styled from "@emotion/styled";

function ArticlesPage({ location, pageContext }) {
  const articles = pageContext.group;
  const authors = pageContext.additionalContext.authors;

  return (
    <Layout>
      <SEO title="DeepTech" pathname={location.pathname} />

      <ArticlesHero
        authors={authors}
        style={{ marginTop: "10%!important", marginBottom: "10%!important" }}
      />
      <Section>
        <ArticleContainer>
          <ArticlesList articles={articles} />
          <ArticlesPaginator show={pageContext.pageCount > 1}>
            <Paginator {...pageContext} />
          </ArticlesPaginator>
        </ArticleContainer>
      </Section>
    </Layout>
  );
}

const ArticleContainer = styled.div`
  width: 100%;
  height: auto;
  text-align: left;
  margin: auto;
  position: relative;
  margin-bottom: 10%;
  margin-top: 10%;
  padding: 0;
`;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;

export default ArticlesPage;
