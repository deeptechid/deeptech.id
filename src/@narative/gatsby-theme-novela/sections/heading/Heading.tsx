import React from "react";
import styled from "@emotion/styled";

import BodySection from "../../components/BodySection/BodySection";
import Header_bg from "../../../../assets/Indonesia_Map0.svg";
import Icons from "@narative/gatsby-theme-novela/src/icons";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

function Heading() {
  return (
    <BodySection relative id="Headers__Hero">
      <ImageContainer>
        <img
          src={Header_bg}
          style={{ alignSelf: "center", maxWidth: "100%", height: "100%" }}
        />
      </ImageContainer>
      <HeaderContainerGrid>
        <HeadingContainer
          style={{
            maxWidth: `580px`
          }}
        >
          <HeroHeading>
            Untuk Indonesia <span style={{ color: "#e40c2b" }}>setara</span> di
            bidang teknologi!
          </HeroHeading>
          <HeadingDescriptionContainer>
            <HeroDescription>Ikuti update kita di</HeroDescription>
            <IconContainer>
              <IconHeader>
                <a href="https://www.instagram.com/deeptech.id/">
                  <Icons.Instagram fill="#73737D" />
                </a>
              </IconHeader>
              <IconHeader>
                <a href="https://open.spotify.com/show/6grT1c7jDkhK4skm1YIsTs?si=vDkWO1srQViiu4gMiiq4jA">
                  <Icons.Spotify fill="#73737D" />
                </a>
              </IconHeader>
            </IconContainer>
          </HeadingDescriptionContainer>
        </HeadingContainer>
        <ImageHeaderContainer></ImageHeaderContainer>
      </HeaderContainerGrid>
    </BodySection>
  );
}

export default Heading;

const HeaderContainerGrid = styled.div`
  width: 100%;
  text-align: left;
  padding-top: 0px;
  display: grid;
  display: -ms-grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1.6fr 0.4fr;
  grid-template-areas: "HeadingContainer" "ImageHeaderContainer";
  grid-area: HeaderContainerGrid;
  align-items: left;
  justify-content: space-evenly;
  color: #111216;
  align-self: center;
  margin-left: 5vh;
  margin-right: 5vh;
`;

const HeadingContainer = styled.div`
  grid-area: "HeadingContainer"  
  display: flex;
  flex-flow: row;
  -ms-flex-flow: row;
  padding: 0vh;
  align-self: center;
  margin: 2vh 0;
  height: 60vh;
  z-index: 10;

  ${mediaqueries.desktop`
  width: 100%;
  `}

  ${mediaqueries.tablet`
  width: 100%;
  padding-top: 20vh;
  `}
`;

const HeroHeading = styled.h1`
  z-index: 10;
  margin-top: 25vh;
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

const HeadingDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  ${mediaqueries.desktop`
    width: 60%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;

const HeroDescription = styled.h3`
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 24px
  `}

  ${mediaqueries.phablet`
    font-size: 18px;
  `}
`;

const ImageHeaderContainer = styled.div`
  grid-area: "ImageHeaderContainer"  
  display: flex;
  flex-flow: row;
  -ms-flex-flow: row;
  padding: 0vh;
  align-self: center;
  height: 60vh;
  z-index: 0;

  ${mediaqueries.desktop`
    width: 50%;
  `}

  ${mediaqueries.tablet`
    
  `}
`;

const ImageContainer = styled.div`
  z-index: 0;
  width: auto !important;
  max-height: 100% !important;
  padding: 1vh;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  margin-left: 5%;
  margin-right: 5%;
  position: absolute;
  padding-top: 18vh;
`;

const IconContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  flex-grow: column;
`;

const IconHeader = styled.div`
  margin-left: 15px;
  padding-top: 5px;
  padding-bottom: 0px;
  align-items: center;
`;
