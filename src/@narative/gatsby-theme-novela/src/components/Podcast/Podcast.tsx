import React, { useContext } from 'react';
import styled from '@emotion/styled';

import BodySection from '@components/BodySection';

function Podcast() {

  return (
    <BodySection relative id="Podcast__Hero">
        <PodcastContainer>
            <PodcastHeader>
            Dapatkan berbagai insight para tech expert hanya untukmu
            </PodcastHeader>
            <PodcastContainerGrid>
            <PodcastContainer_l>
                <iframe title='episode_mas-gio' src="https://open.spotify.com/embed-podcast/episode/2iwmgi3FfASMhgSs8SYbHN" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </PodcastContainer_l>
            <PodcastContainer_r>
                <PodcastContainer_Inner>
                    <HeaderPodcastBody>
                    “Kepuasan tersendiri ketika menyelesaikan masalah dengan ngoding.”
                    </HeaderPodcastBody>
                    <ParagraphPodcastBody>
                    Setelah lulus dari ITB jurusan Teknik Informatika di tahun 2009, Gio dan beberapa rekannya membangun sebuah software house Starqle Indonesia hingga berkembang menjadi perusahaan berbasis produk dan mampu bertahan hingga lebih dari 8 tahun.
                    </ParagraphPodcastBody>
                </PodcastContainer_Inner>
            </PodcastContainer_r>
            </PodcastContainerGrid>
        </PodcastContainer>
    </BodySection>
  );
}

export default Podcast;

const PodcastContainer = styled.div`
    width: 85%;
    height: auto;
    text-align: left;
    margin: auto;
    position: relative;
    margin-bottom: 20%;
    padding: 2vh;
`;

const PodcastContainerGrid = styled.div`
    width: 100%;
    text-align: left;
    padding-top: 25px;
    display: grid;
    display: -ms-grid;
    grid-template-rows: 1fr;
    grid-template-columns: 0.7fr 1.3fr;
    grid-template-areas: "PodcastContainer_l" "PodcastContainer_r";
    grid-area: PodcastContainerGrid;
    align-items: left;
    justify-content: space-evenly;
    color: #111216;
    padding: 3vh;
`;

const PodcastHeader = styled.div`
    width: 100%;
    text-align: center;
    padding: 1vh;
    display: flex;
    display: -ms-flex;
    align-items: center;
    color: #111216;
    font-size: 36px;
    font-weight: 600;
    padding-left: 12%;
    padding-right: 12%;
    margin-bottom: 15vh;
`;

const PodcastContainer_l = styled.div`
    grid-area: "PodcastContainer_l"  
    display: flex;
    flex-flow: row;
    -ms-flex-flow: row;
    padding: 2vh;
    align-self: center;
`;


const PodcastContainer_r = styled.div`
    grid-area: "PodcastContainer_r"  
    display: flex;
    flex-flow: row;
    -ms-flex-flow: row;
    padding: 2vh;
    align-self: center;
`;

const PodcastContainer_Inner = styled.div`
    align-self: center;
`;

const HeaderPodcastBody = styled.div`
    margin:0;
    font-size:1.5em;
    font-weight:bold; 
    line-height:1.2em;
    margin-bottom: 2vh;
`;

const ParagraphPodcastBody = styled.div`
    font-family:"Helvetica"; 
    color: #111216;
    font-size: 1em;
    font-weight: 200;
    line-height: 1em;
    margin-bottom: 0;
`;