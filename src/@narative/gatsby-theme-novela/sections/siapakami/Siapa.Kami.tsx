import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import HeaderSection from '@components/HeaderSection';
import BodySection from '@components/BodySection';

import mediaqueries from '@styles/media';

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

              {/* SiapaKamiGrid is for Desktop 1080px above */}
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
                  <EventImageContainer>
                    <img src={SiapaKami_3} style={{ width:'auto', maxHeight:'220px' }}/>
                  </EventImageContainer>
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

              {/* SiapaKamiGrid_Mobile is for Tablet 768px below */}
              <SiapaKamiGrid_Mobile>
              <SiapaKamiContainer_Mobile>
                  <SiapaKamiContainer_Inner>
                    <ContentContainer_Mobile>
                        <img src={SiapaKami_1} style={{ alignSelf:'center', maxHeight:'100%', maxWidth:'100%' }}/>
                      <HeaderSiapaKamiBody>
                      Siapa Kami ?
                      </HeaderSiapaKamiBody>
                      <ParagraphSiapaKami>
                      Kami adalah Startup teknologi non-profit pertama, yang memberdayakan orang-orang dengan keterampilan teknologi dan untuk transformasi digital di Indonesia.
                      </ParagraphSiapaKami>
                    </ContentContainer_Mobile>
                  </SiapaKamiContainer_Inner>
              </SiapaKamiContainer_Mobile>
              </SiapaKamiGrid_Mobile>
              <SiapaKamiGrid_Mobile>
              <SiapaKamiContainer_Mobile>
                  <SiapaKamiContainer_Inner>
                      <ContentContainer_Mobile>
                        <img src={SiapaKami_2} style={{ alignSelf:'center', maxHeight:'100%', maxWidth:'100%' }}/>
                        <HeaderSiapaKamiBody>
                        Apa tujuan kami?
                        </HeaderSiapaKamiBody>
                        <ParagraphSiapaKami>
                        Seperti tagline kami “Untuk Indonesia setara di bidang teknologi”, kami ada untuk mengatasi masalah kapabilitas talenta teknologi di Indonesia.
                        </ParagraphSiapaKami>
                      </ContentContainer_Mobile>
                  </SiapaKamiContainer_Inner>
              </SiapaKamiContainer_Mobile>
              </SiapaKamiGrid_Mobile>
              <SiapaKamiGrid_Mobile>
              <SiapaKamiContainer_Mobile>
                  <SiapaKamiContainer_Inner>
                      <ContentContainer_Mobile>
                        <img src={SiapaKami_3} style={{ alignSelf:'center', maxHeight:'100%', maxWidth:'100%' }}/>
                        <HeaderSiapaKamiBody>
                        Jadi bagian kami
                        </HeaderSiapaKamiBody>
                        <ParagraphSiapaKami>
                        Mari bersama menjadi bagian dari gerakan kami, “Untuk Indonesia setara di bidang teknologi”.
                        </ParagraphSiapaKami>
                      </ContentContainer_Mobile>
                  </SiapaKamiContainer_Inner>
              </SiapaKamiContainer_Mobile>
              </SiapaKamiGrid_Mobile>
            </SiapaKamiContainer>
        </div>
    </BodySection>
  );
}

export default SiapaKami;

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

    ${mediaqueries.tablet`
    width: 90%;
    margin-bottom: 30vh;
    `}

    ${mediaqueries.phone`
    width: 90%;
    margin-bottom: 30vh;
    `}
`;

const SiapaKamiGrid_Mobile = styled.div`
    width: 100%;
    text-align: left;
    padding-top: 25px;
    padding-bottom: 25px;
    display: grid;
    display: -ms-grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "SiapaKamiContainer_Mobile";
    grid-area: SiapaKamiGrid_Mobile;
    align-items: left;
    justify-content: space-evenly;
    color: #111216;
    padding: 1vh;
    display: none;

    ${mediaqueries.tablet`
    display: block;
    `}

    ${mediaqueries.phone`
    display: block;
    `}
`;

const SiapaKamiContainer_Mobile = styled.div`
    grid-area: "SiapaKamiContainer_Mobile"  
    display: flex;
    flex-flow: row;
    -ms-flex-flow: row;
    padding: 1vh;
    align-self: center;
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

    ${mediaqueries.tablet`
    display: none;
    `}

    ${mediaqueries.phone`
    display: none;
    `}
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

    ${mediaqueries.phone`
    font-size:1.6em;
    line-height:1.6em;
    `}
`;

const SiapaKamiContainer_Inner = styled.div`
    align-self: center;
`;

const ContentContainer_Mobile = styled.div`
  z-index: 0;
  width: auto !important;
  max-height: 100% !important;
  padding: 1vh;

  justify-content: center;
  align-items: center;
  align-self: center;
  top: 0;
  right: 0;
  left: 0;
  position: relative;
  text-align: center;

  margin-bottom: 2vh;
`;

const HeaderSiapaKamiBody = styled.div`
    margin:0;
    font-size:2em;
    font-weight:bold; 
    line-height:2em;

    ${mediaqueries.tablet`
    font-size:1.6em;
    line-height:1.6em;
    `}

    ${mediaqueries.phone`
    font-size:1.2em;
    line-height:1.2em;
    `}
`;

const ParagraphSiapaKami = styled.div`
    font-family:"Helvetica", sans-serif; 
    color: #111216;
    font-size: 1em;
    font-weight: 200;
    margin-top: 2vh;
    margin-bottom: 0;
`;

const EventImageContainer = styled.div`
    width: auto !important;
    max-height: 100% !important;
    padding: 1vh;
`;