import React, { useEffect, useState } from 'react'
import client from "../client";
import apiHome from "./api/apiHome";
import Layout from "../components/layout";
import HeroImage from "../components/HeroImage";
import HomeContent from "../components/HomeContent";





const Home = (dataSet) => {

    const {
        HeroTitle,
        heroDesc,
        heroImage,

    } = dataSet.data[0];


    return (
        <Layout title="Home">
            <HeroImage data={heroImage} heroTitle={HeroTitle} heroDesc={heroDesc}/>
            <HomeContent data={dataSet}/>
        </Layout>
    )
};

const query = `
{
 "data":*[_type == "home"]{
    HeroTitle,
    heroDesc,
    heroImage,
    ...
 },
 
  "posts": *[_type == "post"]|order(publishedAt desc){
      title,
      "name": author->name,
      "categories": categories[]->title,
      "authorImage": author->image,
      body,
      ...
  }

}
   
`;


Home.getInitialProps = async (context)  => {
    const {slug = ''} = context.query;
    const dataSet = await client.fetch(query, {slug});
    return dataSet;
};


export default Home;



