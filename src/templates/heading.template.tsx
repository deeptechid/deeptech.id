import React from "react";
import SEO from "@components/SEO";
import Layout from "@components/Layout";

import HeadingHero from "../sections/heading/Heading.Hero";

function HeadingPage({ location }) {
  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <HeadingHero />
    </Layout>
  );
}

export default HeadingPage;
