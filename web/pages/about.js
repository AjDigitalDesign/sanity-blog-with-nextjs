import React from "react";
import Layout from "../components/layout";
import InteriorHero from "../components/interiorHero";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";


const About = (data) => {

    const {
        title,
        desc,
        heroImage,
        body,
    } = data[0];

    return(
        <Layout title={title}>
            <InteriorHero data={data}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <BlockContent
                            blocks={body}
                            imageOptions={{ w: 320, h: 240, fit: 'max' }}
                            {...client.config()}
                        />
                    </div>
                </div>
            </div>
            <hr/>
        </Layout>
    )
};


const query = `
     *[_type == "about"]{
       title,
       desc,
       heroImage,
       body,
        ...
     }
`;



About.getInitialProps = async () =>{
    const data = await client.fetch(query);
    return data;
};


export default About;