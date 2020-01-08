import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

function Blog() {
  const [loaded, error] = useScript(
    "https://medium-widget.pixelpoint.io/widget.js"
  );
  return (
    <BlogContainer>
      <SubheadingContainer>
        <BlogHeader>
          Ikuti perkembangan teknologi dari kami melalui Pujangga Teknologi.
        </BlogHeader>
      </SubheadingContainer>
      <div id="medium-widget"></div>
    </BlogContainer>
  );
}

function useScript(src: string) {
  const [state, setState] = useState({
    loaded: false,
    error: false
  });

  useEffect(() => {
    let script = document.createElement("script");
    script.src = src;
    script.async = true;

    const onScriptLoad = () => {
      setState({
        loaded: true,
        error: false
      });
      loadWidget();
    };

    const onScriptError = () => {
      script.remove();
      setState({
        loaded: true,
        error: true
      });
    };

    script.addEventListener("load", onScriptLoad);
    script.addEventListener("error", onScriptError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", onScriptLoad);
      script.removeEventListener("error", onScriptError);
    };
  }, [src]);

  return [state.loaded, state.error];
}

function loadWidget() {
  window.MediumWidget.Init({
    renderTo: "#medium-widget",
    params: {
      resource: "https://medium.com/pujanggateknologi",
      postsPerLine: 2,
      limit: 10,
      picture: "big",
      fields: ["description", "author", "claps", "publishAt"],
      ratio: "landscape"
    }
  });
}

const BlogHeader = styled.div`
  width: 100%;
  text-align: left;
  display: inline-block;
  align-items: center;
  color: #111216;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 5vh;

  ${mediaqueries.desktop`
    margin-bottom: 80px;
    `};

  ${mediaqueries.tablet`
    margin-top: 5vh;
    margin-bottom: 5vh;
    font-size: 32px;
    text-align: center;
    `};

  ${mediaqueries.phablet`
    margin-top: 5vh;
    margin-bottom: 5vh;
    font-size: 32px;
    text-align: center;
    `};
`;

const SubheadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mediaqueries.desktop`
    margin-bottom: 80px;
  `};

  ${mediaqueries.tablet`
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 60px;
    font-size: 0.6em;
    text-align: center;
  `};

  ${mediaqueries.phablet`
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 60px;
    font-size: 0.6em;
    text-align: center;
  `};
`;

const BlogContainer = styled.div`
  width: 100%;
  height: auto;
  text-align: left;
  margin: auto;
  position: relative;
  margin-bottom: 10%;
  margin-top: 10%;
  padding: 0;
`;

export default Blog;
