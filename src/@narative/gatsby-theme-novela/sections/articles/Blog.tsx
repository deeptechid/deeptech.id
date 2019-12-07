import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

function Blog() {
  const [loaded, error] = useScript(
    "https://medium-widget.pixelpoint.io/widget.js"
  );
  return (
    <BlogContainer>
      <BlogHeader>Ikuti Terus Blog Kita Di Kanal Medium</BlogHeader>
      <div id="medium-widget"></div>
    </BlogContainer>
  );
}

let cachedScripts = [];

function useScript(src) {
  const [state, setState] = useState({
    loaded: false,
    error: false
  });

  useEffect(() => {
    if (cachedScripts.includes(src)) {
      setState({
        loaded: true,
        error: false
      });
    } else {
      cachedScripts.push(src);

      let script = document.createElement("script");
      script.src = src;
      script.async = true;

      const onScriptLoad = () => {
        setState({
          loaded: true,
          error: false
        });
        window.MediumWidget.Init({
          renderTo: "#medium-widget",
          params: {
            resource: "https://medium.com/pujanggateknologi",
            postsPerLine: 2,
            limit: 4,
            picture: "big",
            fields: ["description", "author", "claps", "publishAt"],
            ratio: "landscape"
          }
        });
      };

      const onScriptError = () => {
        const index = cachedScripts.indexOf(src);
        if (index >= 0) cachedScripts.splice(index, 1);
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
    }
  }, [src]);

  return [state.loaded, state.error];
}

const BlogHeader = styled.div`
  width: 100%;
  text-align: center;
  padding: 1vh;
  display: inline-block;
  align-items: center;
  color: #111216;
  font-size: 36px;
  font-weight: 600;
  padding-left: 17%;
  padding-right: 17%;
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
