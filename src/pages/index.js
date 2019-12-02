import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Heading from "../@narative/gatsby-theme-novela/sections/heading/Heading";
import SiapaKami from "../@narative/gatsby-theme-novela/sections/siapakami/Siapa.Kami";

function Index() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <Heading></Heading>
          <SiapaKami></SiapaKami>
        </div>
      </Section>
    </Layout>
  );
}

export default Index;
