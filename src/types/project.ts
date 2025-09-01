export interface Project {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  description: string;
  tags: string[];
  image: {
    url: string;
    alt?: string;
  };
  link?: string;
  githubLink?: string;
  content?: any[]; // Block content from Sanity
  technologies?: string[];
  featured?: boolean;
  gallery?: {
    url: string;
    alt?: string;
    caption?: string;
  }[];
}
