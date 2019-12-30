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
        <Container style={{ display: "block" }}>
          <HeroHeading style={{ marginBottom: "5vh" }}>
            Kami hadir
            <br /> untuk Indonesia <br /> setara di bidang teknologi
          </HeroHeading>
          <Paragraph style={{ width: "50%" }}>
            Kami adalah Startup teknologi non-profit pertama, yang memberdayakan
            orang-orang dengan keterampilan teknologi untuk transformasi digital
            di Indonesia.
          </Paragraph>
        </Container>
      </Section>

      <Parallax>
        <Section>
          <Container>
            <DarkCardContainer>
              <ServiceItem>
                <HeroHeading>50+</HeroHeading>
                <H4>Perusahaan Persebaran</H4>
                <ParagraphWhite>
                  Member kami tersebar di 50 perusahaan di 12 negara
                </ParagraphWhite>
              </ServiceItem>
              <SpanSeparator></SpanSeparator>
              <ServiceItem>
                <HeroHeading>90%</HeroHeading>
                <H4>Senior Teknologi</H4>
                <ParagraphWhite>
                  Mayoritas member kami adalah senior di bidang teknologi
                </ParagraphWhite>
              </ServiceItem>
              <SpanSeparator></SpanSeparator>
              <ServiceItem>
                <HeroHeading>50+</HeroHeading>
                <H4>Publikasi Artikel</H4>
                <ParagraphWhite>
                  Kami sudah mempublikasikan lebih dari 50 artikel teknologi
                </ParagraphWhite>
              </ServiceItem>
            </DarkCardContainer>
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
              Kami memiliki beberapa kanal edukasi yang membahas hal - hal
              menarik seputar teknologi yang dibawakan oleh para ahli di bidang
              teknologi
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
                KodeNol merupakan nama dari serial podcast kita yang
                menceritakan bagaimana jalan dan cara menjadi software engineer
                dari nol
              </Paragraph>
              <LinkAnchor
                style={{ color: "#fff" }}
                href="https://open.spotify.com/show/0919qUs3HI9pgoKENxC5VY"
              >
                Dengerin Podcast Kita
              </LinkAnchor>
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
                'Ceritanya Developer' merupakan nama dari serial podcast kita
                yang bercerita tentang pengalaman dari sosok yang sukses di
                bidang software engineering
              </Paragraph>
              <LinkAnchor
                style={{ color: "#fff" }}
                href="https://open.spotify.com/show/6grT1c7jDkhK4skm1YIsTs"
              >
                Dengerin Podcast Kita
              </LinkAnchor>
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
                'Pujangga Teknologi' merupakan serial blog kita yang berisi
                tulisan - tulisan dari para ahli di bidang teknologi
              </Paragraph>
              <LinkAnchor
                style={{ color: "#fff" }}
                href="https://medium.com/pujanggateknologi"
              >
                Baca Blog Kita
              </LinkAnchor>
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
        <TestDiv>
          <ServiceItem>
            <H4>Product Management</H4>
            <Paragraph>
              Kami adalah Startup teknologi non-profit pertama, yang
              memberdayakan orang-orang dengan keterampilan teknologi dan untuk
              transformasi digital di Indonesia.
            </Paragraph>
          </ServiceItem>
          <SpanSeparator></SpanSeparator>
          <ServiceItem>
            <H4>Outlook</H4>
            <Paragraph>
              Kami adalah Startup teknologi non-profit pertama, yang
              memberdayakan orang-orang dengan keterampilan teknologi dan untuk
              transformasi digital di Indonesia.
            </Paragraph>
          </ServiceItem>
          <SpanSeparator></SpanSeparator>
          <ServiceItem>
            <H4>Focus Group Discussion</H4>
            <Paragraph>
              Kami adalah Startup teknologi non-profit pertama, yang
              memberdayakan orang-orang dengan keterampilan teknologi dan untuk
              transformasi digital di Indonesia.
            </Paragraph>
          </ServiceItem>
        </TestDiv>
      </Section>

      <Section>
        <Container>
          <SubheadingContainer>
            <SubHeading>Komunitas Teknologi</SubHeading>
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
        <TestDiv>
          <ServiceItem>
            <img
              src="https://media.istockphoto.com/photos/group-of-diversity-people-volunteer-charity-project-picture-id873780612?k=6&m=873780612&s=612x612&w=0&h=gNwnopwCU5RvIsgJHCxAwVmiePbQTfEqFgtPaWnA64k="
              alt=""
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "20px"
              }}
            />
            <H4>Sarasehan</H4>
            <Paragraph>
              Kami adalah Startup teknologi non-profit pertama, yang
              memberdayakan orang-orang dengan keterampilan teknologi dan untuk
              transformasi digital di Indonesia.
            </Paragraph>
          </ServiceItem>
          <SpanSeparator></SpanSeparator>
          <ServiceItem>
            <img
              src="https://media.istockphoto.com/photos/group-of-diversity-people-volunteer-charity-project-picture-id873780612?k=6&m=873780612&s=612x612&w=0&h=gNwnopwCU5RvIsgJHCxAwVmiePbQTfEqFgtPaWnA64k="
              alt=""
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "20px"
              }}
            />
            <H4>Deeptalk</H4>
            <Paragraph>
              Kami adalah Startup teknologi non-profit pertama, yang
              memberdayakan orang-orang dengan keterampilan teknologi dan untuk
              transformasi digital di Indonesia.
            </Paragraph>
          </ServiceItem>
          <SpanSeparator></SpanSeparator>
          <ServiceItem>
            <img
              src="https://media.istockphoto.com/photos/group-of-diversity-people-volunteer-charity-project-picture-id873780612?k=6&m=873780612&s=612x612&w=0&h=gNwnopwCU5RvIsgJHCxAwVmiePbQTfEqFgtPaWnA64k="
              alt=""
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "20px"
              }}
            />
            <H4>Relawan Teknologi</H4>
            <Paragraph>
              Kami adalah Startup teknologi non-profit pertama, yang
              memberdayakan orang-orang dengan keterampilan teknologi dan untuk
              transformasi digital di Indonesia.
            </Paragraph>
          </ServiceItem>
        </TestDiv>
      </Section>

      <Section>
        <Container style={{ justifyContent: "center", marginBottom: "10px" }}>
          <SubHeading>Kolaborator Kami</SubHeading>
        </Container>
        <Container
          style={{
            justifyContent: "center",
            marginTop: "10px",
            flexWrap: "wrap"
          }}
        >
          <LogoContainer>
            <BoxedLogo src={"logo/bri.png"}></BoxedLogo>
          </LogoContainer>
          <LogoContainer>
            <BoxedLogo src={"logo/hacktiv8.png"}></BoxedLogo>
          </LogoContainer>
          <LogoContainer>
            <BoxedLogo src={"logo/warpin.png"}></BoxedLogo>
          </LogoContainer>
          <LogoContainer>
            <BoxedLogo src={"logo/narasi.png"}></BoxedLogo>
          </LogoContainer>
          <LogoContainer>
            <BoxedLogo src={"logo/lkpp.png"}></BoxedLogo>
          </LogoContainer>
          <LogoContainer>
            <BoxedLogo src={"logo/feedloop.png"}></BoxedLogo>
          </LogoContainer>
          <LogoContainer>
            <BoxedLogo src={"logo/paragon.jpeg"}></BoxedLogo>
          </LogoContainer>
          <LogoContainer>
            <BoxedLogo src={"logo/maxima.png"}></BoxedLogo>
          </LogoContainer>
        </Container>
      </Section>
    </Layout>
  );
}

const DarkCardContainer = styled.div`
  color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  padding: 50px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-radius: 6px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(21, 29, 29, 0.8);

  ${mediaqueries.tablet`
    padding: 40px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    max-width: 100%;
  `}

  ${mediaqueries.phone`
    padding: 40px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    max-width: 100%;
  `}
`;

const TestDiv = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  padding: 50px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);

  ${mediaqueries.tablet`
        padding: 40px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
        max-width: 100%;
    `}

  ${mediaqueries.phone`
    padding: 40px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    max-width: 100%;
  `}
`;

const H4 = styled.h4`
  font-size: 1.3em;
  font-weight: 600;
  margin-bottom: 2vh;
  margin-top: 2vh;
`;

const SpanSeparator = styled.div`
  width: 1px;
  flex-grow: 0;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.1);
  margin-left: 36px;
  margin-right: 36px;

  ${mediaqueries.tablet`
    width: 100%;
    height: 1px;
    margin-top: 31px;
    margin-bottom: 31px;
    margin-left: 0px;
    margin-right: 0px;
  `}

  ${mediaqueries.phone`
    width: 100%;
    height: 1px;
    margin-top: 31px;
    margin-bottom: 31px;
    margin-left: 0px;
    margin-right: 0px;
  `}
`;

const HeroHeading = styled.h1`
  z-index: 10;
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 1.15;

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.tablet`
    margin-top: 20px;
    font-size: 38px;
  `}

  ${mediaqueries.phone`
    margin-top: 20px;
    font-size: 28px;
  `}
`;

const Parallax = styled.div`
  background-image: url(https://www.newszii.com/wp-content/uploads/2018/11/Video-Editing-Software-Tools.jpg);
  background-size: cover;
  height: auto;
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
  margin-bottom: 2vh;

  ${mediaqueries.tablet`
    width: 100%!important;
  `}

  ${mediaqueries.phone`
    width: 100%!important;
  `}
`;

const ParagraphWhite = styled.div`
  color: #fff;
  font-size: 1em;
  font-weight: 200;
  margin-top: 2vh;
  margin-bottom: 2vh;
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
  background-color: #000;

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
  position: relative;

  ${mediaqueries.tablet`
    position: relative;
    padding: 32px 34px;
    width: 100%;
  `}

  ${mediaqueries.phone`
    position: relative;
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

const ServiceItem = styled.div`
  flex: 1 1 0%;
  padding: 10px;

  ${mediaqueries.tablet`
    border-radius: 0 0 16px 16px;
    padding: 0;
  `}

  ${mediaqueries.phone`
    border-radius: 0 0 16px 16px;
    padding: 0;
  `}
`;

const LogoContainer = styled.div`
  padding: 25px;
`;

const LinkAnchor = styled.a`
  font-weight: 800;
  text-decoration: underline;
`;

const BoxedLogo = styled.img`
  height: 60px;
  width: auto;
  text-align: center;
`;

export default Programs;
