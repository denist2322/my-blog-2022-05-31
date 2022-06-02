import React from "react";
import Layout from "../components/layout";
import catGIF from "../images/cat.gif";

function AboutPage() {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <img src={catGIF} alt="Otter dancing with a fish" />
    </Layout>
  );
}

export default AboutPage;
//
