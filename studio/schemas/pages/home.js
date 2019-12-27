export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name: "HeroTitle",
            title: "Hero Title",
            type: "string"
        },
        {
            name: "heroDesc",
            title: "Hero Description",
            type: "string"
        },
        {
            name: "heroImage",
            title: " Hero Image",
            type: "image",
            options: {
                hotspot: true
            }
        }

    ],

    preview: {
        select: {},
        prepare() {
            return {
                title: 'Home'
            };
        }
    }
};