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
            <CardContent>
              <HeroHeading style={{ color: "#fff" }}>
                Podcast KodeNol
              </HeroHeading>
              <Paragraph style={{ color: "#fff" }}>
                Kami adalah Startup teknologi non-profit pertama, yang
                memberdayakan orang-orang dengan keterampilan teknologi dan
                untuk transformasi digital di Indonesia.
              </Paragraph>
            </CardContent>
            <CardContent style={{ padding: "0" }}>
              <ImageCardContent src="https://get-thrive.app/assets/images/goals-1.jpg"></ImageCardContent>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card>
            <CardContent>
              <HeroHeading style={{ color: "#fff" }}>
                Ceritanya Developer
              </HeroHeading>
              <Paragraph style={{ color: "#fff" }}>
                Kami adalah Startup teknologi non-profit pertama, yang
                memberdayakan orang-orang dengan keterampilan teknologi dan
                untuk transformasi digital di Indonesia.
              </Paragraph>
            </CardContent>
            <CardContent style={{ padding: "0" }}>
              <ImageCardContent src="https://get-thrive.app/assets/images/ideas-1.jpg"></ImageCardContent>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card>
            <CardContent>
              <HeroHeading style={{ color: "#fff" }}>
                Pujangga Teknologi
              </HeroHeading>
              <Paragraph style={{ color: "#fff" }}>
                Kami adalah Startup teknologi non-profit pertama, yang
                memberdayakan orang-orang dengan keterampilan teknologi dan
                untuk transformasi digital di Indonesia.
              </Paragraph>
            </CardContent>
            <CardContent style={{ padding: "0" }}>
              <ImageCardContent src="https://get-thrive.app/assets/images/decisions-1.jpg"></ImageCardContent>
            </CardContent>
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
            <H4>Product Management</H4>
            <Paragraph>
              Kami adalah Startup teknologi non-profit pertama, yang
              memberdayakan orang-orang dengan keterampilan teknologi dan untuk
              transformasi digital di Indonesia.
            </Paragraph>
          </div>
          <SpanSeparator></SpanSeparator>
          <div style={{ flex: "1 1 0%", paddingRight: "30px" }}>
            <H4>Outlook</H4>
            <Paragraph>
              Kami adalah Startup teknologi non-profit pertama, yang
              memberdayakan orang-orang dengan keterampilan teknologi dan untuk
              transformasi digital di Indonesia.
            </Paragraph>
          </div>
          <SpanSeparator></SpanSeparator>
          <div style={{ flex: "1 1 0%", paddingRight: "30px" }}>
            <H4>Focus Group Discussion</H4>
            <Paragraph>
              Kami adalah Startup teknologi non-profit pertama, yang
              memberdayakan orang-orang dengan keterampilan teknologi dan untuk
              transformasi digital di Indonesia.
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SubheadingContainer>
            <SubHeading>Komunitas</SubHeading>
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
    </Layout>
  );
}

const H4 = styled.h4`
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 20px;
`;

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

  ${mediaqueries.tablet`
    flex-wrap: wrap;
  `}

  ${mediaqueries.phone`
    flex-wrap: wrap;
  `}
`;

const SubheadingContainer = styled.div`
  flex: 1 1 50%;

  ${mediaqueries.tablet`
    flex: 1 1 100%;
  `}

  ${mediaqueries.phone`
    flex: 1 1 100%;
  `}
`;

const SubheadingContainerRight = styled.div`
  flex: 1 1 50%;
  width: 90%;

  ${mediaqueries.tablet`
    flex: 1 1 100%;
  `}

  ${mediaqueries.phone`
    flex: 1 1 100%;
  `}
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

  ${mediaqueries.tablet`
    flex-wrap: wrap;
  `}

  ${mediaqueries.phone`
    flex-wrap: wrap;
  `}
`;

const CardContent = styled.div`
  padding: 80px;
  width: 50%;

  ${mediaqueries.tablet`
    padding: 32px 34px;
    width: 100%;
  `}

  ${mediaqueries.phone`
    padding: 32px 34px;
    width: 100%;
  `}
`;

const ImageCardContent = styled.img`
  width: 100%;
  border-radius: 0 24px 24px 0;
  height: 100%;

  ${mediaqueries.tablet`
    border-radius: 0 0 16px 16px;
    width: 100%;
    height: 100%;
  `}

  ${mediaqueries.phone`
    border-radius: 0 0 16px 16px;
    width: 100%;
    height: 100%;
  `}
`;

export default Programs;
