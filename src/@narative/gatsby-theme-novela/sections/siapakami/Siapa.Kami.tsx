import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

import HeaderSection from '@components/HeaderSection';
import BodySection from '@components/BodySection';

// import Image from "@components/Image";

import Header_bg from '../../../../assets/Map_blurlinear.png';
import SiapaKami_1 from '../../../../assets/SiapaKami_1.png';
import SiapaKami_2 from '../../../../assets/SiapaKami_2.png';
import SiapaKami_3 from '../../../../assets/SiapaKami_3.png';

import Icons from '@icons';


function SiapaKami() {

//   const results = useStaticQuery(siapaKami);
//   const hero = results.site.edges[0].node.siteMetadata.siapakami;

  return (
    <BodySection relative id="SiapaKami__Hero">
        <div>
            <SiapaKamiContainer>
                <SiapaKamiGrid>
                <SiapaKamiContainer_l>
                    <img src={SiapaKami_1} style={{ width:'auto', maxHeight:'280px' }}/>
                </SiapaKamiContainer_l>
                <SiapaKamiContainer_r>
                    <SiapaKamiContainer_Inner>
                        <HeaderSiapaKamiBody>
                        Siapa Kami ?
                        </HeaderSiapaKamiBody>
                        <ParagraphSiapaKami>
                        Kami adalah Startup teknologi non-profit pertama, yang memberdayakan orang-orang dengan keterampilan teknologi dan untuk transformasi digital di Indonesia.
                        </ParagraphSiapaKami>
                    </SiapaKamiContainer_Inner>
                </SiapaKamiContainer_r>
                </SiapaKamiGrid>
                <SiapaKamiGrid>
                <SiapaKamiContainer_l>
                    <SiapaKamiContainer_Inner>
                        <HeaderSiapaKamiBody>
                        Apa tujuan kami?
                        </HeaderSiapaKamiBody>
                        <ParagraphSiapaKami>
                        Seperti tagline kami “Untuk Indonesia setara di bidang teknologi”, kami ada untuk mengatasi masalah kapabilitas talenta teknologi di Indonesia.
                        </ParagraphSiapaKami>
                    </SiapaKamiContainer_Inner>
                </SiapaKamiContainer_l>
                <SiapaKamiContainer_r>
                    <EventImageContainer>
                        <img src={SiapaKami_2} style={{ width:'auto', maxHeight:'240px' }}/>
                    </EventImageContainer>
                </SiapaKamiContainer_r>
                </SiapaKamiGrid>
                <SiapaKamiGrid>
                <SiapaKamiContainer_l>
                    <img src={SiapaKami_3} style={{ width:'auto', maxHeight:'220px' }}/>
                </SiapaKamiContainer_l>
                <SiapaKamiContainer_r>
                    <SiapaKamiContainer_Inner>
                        <HeaderSiapaKamiBody>
                        Jadi bagian dari kami
                        </HeaderSiapaKamiBody>
                        <ParagraphSiapaKami>
                        Mari bersama menjadi bagian dari gerakan kami, “Untuk Indonesia setara di bidang teknologi”.
                        </ParagraphSiapaKami>
                    </SiapaKamiContainer_Inner>
                </SiapaKamiContainer_r>
                </SiapaKamiGrid>
            </SiapaKamiContainer>
        </div>
    </BodySection>
  );
}

export default SiapaKami;
// Header Section
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
  `}
`;

const HeroHeading = styled.h1`
  z-index: 10;
  margin-top: 16vh;
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
    font-size: 32px;
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
    display: none;
  `}
`;

const ImageContainer = styled.div`
  z-index: 0;
  width: auto !important;
  max-height: 100% !important;
  padding: 1vh;import { BodySection } from '@components/BodySection';

  align-self: center;
  top: 5%;
  right: 15%;
  position: absolute;
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



// SiapaKami Section
const SiapaKamiContainer = styled.div`
    width: 75%;
    height: auto;
    text-align: left;
    margin: auto;
    position: relative;
    margin-bottom: 20%;
    margin-top: 20%;
    padding: 2vh;
`;

const SiapaKamiGrid = styled.div`
    width: 100%;
    text-align: left;
    padding-top: 25px;
    display: grid;
    display: -ms-grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "SiapaKamiContainer_l" "SiapaKamiContainer_r";
    grid-area: SiapaKamiGrid;
    align-items: left;
    justify-content: space-evenly;
    color: #111216;
    padding: 3vh;
`;

const SiapaKamiContainer_l = styled.div`
    grid-area: "SiapaKamiContainer_l"  
    display: flex;
    flex-flow: row;
    -ms-flex-flow: row;
    padding: 2vh;
    align-self: center;
`;


const SiapaKamiContainer_r = styled.div`
    grid-area: "SiapaKamiContainer_r"  
    display: flex;
    flex-flow: row;
    -ms-flex-flow: row;
    padding: 2vh;
    align-self: center;
`;

const SiapaKamiContainer_Inner = styled.div`
    align-self: center;
`;

const HeaderSiapaKamiBody = styled.div`
    margin:0;
    font-size:2em;
    font-weight:bold; 
    line-height:2em;
`;

const ParagraphSiapaKami = styled.div`
    font-family:"Helvetica", sans-serif; 
    color: #111216;
    font-size: 1em;
    font-weight: 200;
    line-height: 1em;
    margin-bottom: 0;
`;

const EventImageContainer = styled.div`
    width: auto !important;
    max-height: 100% !important;
    padding: 1vh;
`;