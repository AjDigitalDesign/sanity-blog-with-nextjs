export default {
    name: 'banner',
    type: 'object',
    options: { collapsible: true, collapsed: true },
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'image',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image'
        }
    }
};