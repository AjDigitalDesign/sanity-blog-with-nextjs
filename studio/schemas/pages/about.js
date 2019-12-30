export default {
  name: "about",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      description: "Title display"
    },
    {
      name: "desc",
      type: "string"
    },
    {
      name: "heroImage",
      title: " Hero Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "banner",
      type: "banner"
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    }
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "About"
      };
    }
  }
};
