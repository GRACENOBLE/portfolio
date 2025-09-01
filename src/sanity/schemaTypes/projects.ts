// schemas/project.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "link",
      title: "Project URL",
      type: "url",
      description: "The URL for the project (optional).",
    }),
    defineField({
      name: "githubLink",
      title: "GitHub Repository",
      type: "url",
      description: "Link to the GitHub repository (optional).",
    }),
    defineField({
      name: "content",
      title: "Project Content",
      type: "array",
      of: [{ type: "block" }],
      description: "Detailed description and content about the project.",
    }),
    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      description: "List of technologies and tools used in this project.",
    }),
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
      description: "Mark this project as featured.",
    }),
    defineField({
      name: "gallery",
      title: "Project Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
      description: "Additional images for the project gallery.",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "mainImage",
    },
    prepare({ title, media }) {
      return {
        title: title || "Untitled Project",
        media: media,
      };
    },
  },
});
