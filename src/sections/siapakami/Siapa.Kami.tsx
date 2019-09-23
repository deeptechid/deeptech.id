import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import HeaderSection from '@components/HeaderSection';
import BodySection from '@components/BodySection';

// import Image from "@components/Image";

import SiapaKami_1 from '../../assets/SiapaKami_1.png';
import SiapaKami_2 from '../../assets/SiapaKami_2.png';
import SiapaKami_3 from '../../assets/SiapaKami_3.png';


function SiapaKami() {

//   const results = useStaticQuery(siapaKami);
//   const hero = results.site.edges[0].node.siteMetadata.siapakami;

  return (
    <BodySection relative id="SiapaKami__Hero">
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
    </BodySection>
  );
}

export default SiapaKami;

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