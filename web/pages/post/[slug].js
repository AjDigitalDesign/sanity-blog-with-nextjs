import React from "react";
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import client from "../../client";
import  { useRouter} from "next/router";
import Layout from '../../components/layout'
import HeroImage from "../../components/HeroImage";

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const Post = (props) => {

    const {
        title,
        name,
        categories,
        authorImage,
        mainImage,
        _updatedAt,
        body = []
    } = props;

    const backgroundImg = {
        backgroundImage: `url(${urlFor(mainImage) .url()})`
    };

   return(
        <Layout title={title}>
            <header className="masthead" style={backgroundImg}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="post-heading">
                                <h1>{title}</h1>
                                <span className="meta">Posted by
                                <a> {name} </a>
                                on {new Date(_updatedAt).toDateString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    header.masthead {
                      margin-bottom: 50px;
                      background: no-repeat center center;
                      background-color: #868e96;
                      background-attachment: scroll;
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
                      padding: 200px 0 150px;
                      color: white;
                    }
                    
                    @media only screen and (min-width: 768px) {
                      header.masthead .page-heading,
                      header.masthead .post-heading,
                      header.masthead .site-heading {
                        padding: 200px 0;
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
            <article>
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
            </article>
            <hr />

        </Layout>
    )
};


const query = `
*[_type == "post" && slug.current == $slug][0]{
    title, 
    "name": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    mainImage,
    body,
    ...
}`;

Post.getInitialProps = async function(context) {
    const { slug = " "} = context.query;
    return await client.fetch(query, { slug})

};

export default Post;