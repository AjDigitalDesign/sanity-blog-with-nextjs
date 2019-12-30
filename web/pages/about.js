import React from "react";
import Layout from "../components/layout";
import InteriorHero from "../components/interiorHero";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import HeroImage from "../components/HeroImage";

const About = data => {
  const { title, banner, body } = data;

  return (
    <Layout title={title}>
      <HeroImage {...banner} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <BlockContent
              blocks={body}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              {...client.config()}
            />
          </div>
        </div>
      </div>
      <hr />
    </Layout>
  );
};

const query = `
     *[_type == "about"][0]
`;

About.getInitialProps = async () => {
  const data = await client.fetch(query);
  return data;
};

export default About;
