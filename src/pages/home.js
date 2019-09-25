import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";

function Homes() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1>Homes aiwjoiahoiwa</Headings.h1>
        </div>
      </Section>
    </Layout>
  );
}

export default Homes;
