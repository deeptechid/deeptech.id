import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import styled from "@emotion/styled";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

function Programs() {
  return (
    <Layout>
      <SEO />

      <Section>
        <Container>
          <HeroHeading>
            Kami sedang membangun
            <br /> kultur teknologi <br /> di Indonesia
          </HeroHeading>
        </Container>
      </Section>

      <Parallax>
        <Section>
          <Container>
            <SubHeading style={{ color: "#fff" }}>
              Our Accomplishment
            </SubHeading>
          </Container>
        </Section>
      </Parallax>

      <Section>
        <Container>
          <SubheadingContainer>
            <SubHeading>Media Edukasi</SubHeading>
          </SubheadingContainer>
          <SubheadingContainerRight>
            <Paragraph>
              Kami adalah Startup teknologi non-profit pertama, yang
              memberdayakan orang-orang dengan keterampilan teknologi dan untuk
              transformasi digital di Indonesia.
            </Paragraph>
          </SubheadingContainerRight>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card>
            <div style={{ width: "50%", padding: "80px" }}>
              <HeroHeading style={{ color: "#fff" }}>
                Podcast KodeNol
              </HeroHeading>
              <Paragraph style={{ color: "#fff" }}>
                Kami adalah Startup teknologi non-profit pertama, yang
                memberdayakan orang-orang dengan keterampilan teknologi dan
                untuk transformasi digital di Indonesia.
              </Paragraph>
            </div>
            <div style={{ width: "50%" }}>
              <img
                src="https://get-thrive.app/assets/images/goals-1.jpg"
                style={{
                  borderRadius: "0 24px 24px 0",
                  width: "100%",
                  height: "100%"
                }}
              ></img>
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card>
            <div style={{ width: "50%", padding: "80px" }}>
              <HeroHeading style={{ color: "#fff" }}>
                Ceritanya Developer
              </HeroHeading>
              <Paragraph style={{ color: "#fff" }}>
                Kami adalah Startup teknologi non-profit pertama, yang
                memberdayakan orang-orang dengan keterampilan teknologi dan
                untuk transformasi digital di Indonesia.
              </Paragraph>
            </div>
            <div style={{ width: "50%" }}>
              <img
                src="https://get-thrive.app/assets/images/ideas-1.jpg"
                style={{
                  borderRadius: "0 24px 24px 0",
                  width: "100%",
                  height: "100%"
                }}
              ></img>
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card>
            <div style={{ width: "50%", padding: "80px" }}>
              <HeroHeading style={{ color: "#fff" }}>
                Pujangga Teknologi
              </HeroHeading>
              <Paragraph style={{ color: "#fff" }}>
                Kami adalah Startup teknologi non-profit pertama, yang
                memberdayakan orang-orang dengan keterampilan teknologi dan
                untuk transformasi digital di Indonesia.
              </Paragraph>
            </div>
            <div style={{ width: "50%" }}>
              <img
                src="https://get-thrive.app/assets/images/decisions-1.jpg"
                style={{
                  borderRadius: "0 24px 24px 0",
                  width: "100%",
                  height: "100%"
                }}
              ></img>
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <SubheadingContainer>
            <SubHeading>Konsultan Teknologi</SubHeading>
          </SubheadingContainer>
          <SubheadingContainerRight>
            <Paragraph>
              Kami adalah Startup teknologi non-profit pertama, yang
              memberdayakan orang-orang dengan keterampilan teknologi dan untuk
              transformasi digital di Indonesia.
            </Paragraph>
          </SubheadingContainerRight>
        </Container>
      </Section>

      <Section>
        <Container>
          <div style={{ flex: "1 1 0%", paddingRight: "30px" }}>
            <Paragraph>
              Kami adalah Startup teknologi non-profit pertama, yang
              memberdayakan orang-orang dengan keterampilan teknologi dan untuk
              transformasi digital di Indonesia.
            </Paragraph>
          </div>
          <SpanSeparator></SpanSeparator>
          <div style={{ flex: "1 1 0%", paddingRight: "30px" }}>
            <Paragraph>
              Kami adalah Startup teknologi non-profit pertama, yang
              memberdayakan orang-orang dengan keterampilan teknologi dan untuk
              transformasi digital di Indonesia.
            </Paragraph>
          </div>
          <SpanSeparator></SpanSeparator>
          <div style={{ flex: "1 1 0%", paddingRight: "30px" }}>
            <Paragraph>
              Kami adalah Startup teknologi non-profit pertama, yang
              memberdayakan orang-orang dengan keterampilan teknologi dan untuk
              transformasi digital di Indonesia.
            </Paragraph>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

const SpanSeparator = styled.div`
  width: 1px;
  flex-grow: 0;
  flex-shrink: 0;
  background: black;
  margin-left: 36px;
  margin-right: 36px;
`;

const HeroHeading = styled.h1`
  z-index: 10;
  margin-top: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 38px
  `}

  ${mediaqueries.phablet`
    font-size: 28px;
    margin-top: 10vh;
  `}
`;

const Parallax = styled.div`
  background-image: url(https://www.newszii.com/wp-content/uploads/2018/11/Video-Editing-Software-Tools.jpg);
  background-size: cover;
  height: 400px;
  width: 100%;
  background-color: transparent;
  background-attachment: fixed;
  background-position: 50% 0;
  background-repeat: no-repeat;
  overflow: hidden;
  will-change: transform;
  position: relative;
  align-items: center !important;
`;

const SubHeading = styled.div`
  margin: 0;
  font-size: 2em;
  font-weight: bold;
  line-height: 2em;

  ${mediaqueries.tablet`
    font-size:1.6em;
    line-height:1.6em;
    `}

  ${mediaqueries.phone`
    font-size:1.2em;
    line-height:1.2em;
    `}
`;

const Container = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const SubheadingContainer = styled.div`
  flex: 1 1 50%;
`;

const SubheadingContainerRight = styled.div`
  flex: 1 1 50%;
  width: 90%;
`;

const Paragraph = styled.div`
  color: #111216;
  font-size: 1em;
  font-weight: 200;
  margin-top: 2vh;
  margin-bottom: 0;
`;

const Card = styled.div`
  border-radius: 24px;
  width: 100%;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-repeat: repeat;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/6/68/Solid_black.png);
`;

export default Programs;
