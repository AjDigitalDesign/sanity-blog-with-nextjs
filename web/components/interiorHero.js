import React from 'react';
import imageUrlBuilder from '@sanity/image-url'

import client from '../client'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const interiorHero = (data) => {

    console.log(data);

    const {
        title,
        desc,
        heroImage,
        body,
    } = data.data[0];

    const backgroundImg = {
        backgroundImage: `url(${urlFor(heroImage) .url()})`
    };

    return(
        <header className="masthead" style={backgroundImg}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="page-heading">
                            <h1>{title}</h1>
                            <span className="subheading">{desc}</span>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                header.masthead {
                  margin-bottom: 50px;
                  background: #868e96 no-repeat scroll center center;
                  position: relative;
                  background-size: cover;
                }
                
                header.masthead .overlay {
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 100%;
                  width: 100%;
                  background-color: #212529;
                  opacity: 0.5;
                }
                
                header.masthead .page-heading,
                header.masthead .post-heading,
                header.masthead .site-heading {
                  padding: 150px 0 150px;
                  color: white;
                }
                
                @media only screen and (min-width: 768px) {
                  header.masthead .page-heading,
                  header.masthead .post-heading,
                  header.masthead .site-heading {
                    padding: 150px 0;
                  }
                }
                
                header.masthead .page-heading,
                header.masthead .site-heading {
                  text-align: center;
                }
                
                header.masthead .page-heading h1,
                header.masthead .site-heading h1 {
                  font-size: 50px;
                  margin-top: 0;
                }
                
                header.masthead .page-heading .subheading,
                header.masthead .site-heading .subheading {
                  font-size: 24px;
                  font-weight: 300;
                  line-height: 1.1;
                  display: block;
                  margin: 10px 0 0;
                  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                }
                
                @media only screen and (min-width: 768px) {
                  header.masthead .page-heading h1,
                  header.masthead .site-heading h1 {
                    font-size: 80px;
                  }
                }
                
                header.masthead .post-heading h1 {
                  font-size: 35px;
                }
                
                header.masthead .post-heading .meta,
                header.masthead .post-heading .subheading {
                  line-height: 1.1;
                  display: block;
                }
                
                header.masthead .post-heading .subheading {
                  font-size: 24px;
                  font-weight: 600;
                  margin: 10px 0 30px;
                  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                }
                
                header.masthead .post-heading .meta {
                  font-size: 20px;
                  font-weight: 300;
                  font-style: italic;
                  font-family: 'Lora', 'Times New Roman', serif;
                }
                
                header.masthead .post-heading .meta a {
                  color: #fff;
                }
                
                @media only screen and (min-width: 768px) {
                  header.masthead .post-heading h1 {
                    font-size: 55px;
                  }
                  header.masthead .post-heading .subheading {
                    font-size: 30px;
                  }
                }

              `}</style>
        </header>
    )
};



export default interiorHero;
