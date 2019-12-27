import client from "../../client";

const getData = async () => {
    const q = `
    {
        *[_type == "home"][0]{
            HeroTitle,
            heroDesc,
            heroImage,
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
