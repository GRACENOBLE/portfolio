import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({
          name: "tagline",
          type: "string",
        }),
        defineField({
          name: "description",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
});