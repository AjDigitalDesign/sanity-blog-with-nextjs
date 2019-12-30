import React, { useEffect, useState } from "react";
import client from "../client";
import apiHome from "./api/apiHome";
import Layout from "../components/layout";
import HeroImage from "../components/HeroImage";
import HomeContent from "../components/HomeContent";

const Home = dataSet => {
  const { banner } = dataSet.data;

  return (
    <Layout title="Home">
      <HeroImage {...banner} />
      <HomeContent data={dataSet} />
    </Layout>
  );
};

const query = `
{
  "data":*[_type == "home"][0],
 
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

import fetch from "isomorphic-unfetch";

import { getApiUrl } from "../lib/api";

Home.getInitialProps = async context => {
  // const {slug = ''} = context.query;
  // const dataSet = await client.fetch(query, {slug});
  // return dataSet;

  const data = await fetch(getApiUrl(context) + "/api/apiHome").then(res =>
    res.json()
  );
  return data;
};

export default Home;
