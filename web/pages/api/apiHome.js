import client from "../../client";

const getData = async () => {
  const q = `
  {
    "data":*[_type == "home"][0]{
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
  const data = await client.fetch(q);
  return data;
};

export default async (req, res) => {
  res.send(await getData());
};
