import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'poster',
  title: 'Image',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'caption',
      type: 'string',
    }),
    defineField({
      name: 'attribution',
      type: 'string',
    }),
  ],
});
