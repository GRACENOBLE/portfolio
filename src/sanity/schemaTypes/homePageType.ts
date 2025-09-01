import { defineType, defineField } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "heroTitle",
          title: "Hero Section Title",
          type: "string",
        }),
        defineField({
          name: "heroSubtitle",
          title: "Hero Section Subtitle",
          type: "text",
          rows: 2,
        }),
      ],
    }),
    defineField({
      name: "aboutMeSection",
      title: "About Me",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "array",
          of: [
            defineField({
              name: "paragraph",
              title: "Paragraph",
              type: "text",
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "skills",
      title: "Skills",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "skills",
          title: "Skills",
          type: "array",
          of: [
            defineField({
              name: "skill",
              title: "Skill",
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                }),
                defineField({
                  name: "technologies",
                  title: "Technologies",
                  type: "array",
                  of: [
                    defineField({
                      name: "technology",
                      title: "Technology",
                      type: "string",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "services",
          title: "Services",
          type: "array",
          of: [
            defineField({
              name: "service",
              title: "Service",
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "featuredProjects",
      title: "Featured Projects",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      hero: "heroSection",
    },
    prepare({ hero }) {
      return {
        title: hero.heroTitle,
      };
    },
  },
});
