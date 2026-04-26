import { defineCollection, z } from "astro:content";

const certificates = defineCollection({
  schema: z.object({
    title: z.string(),
    logo: z.string(),
    certificates: z.array(
      z.object({
        title: z.string(),
        date: z.string(),
        credentialId: z.string().optional(),
        skills: z.string().optional(),
        link: z.string(),
        description: z.string().optional(),
      }),
    ),
  }),
});

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    projectTitle: z.string().optional(),
    projectTechs: z.array(z.string()).optional(),
    image: z.string().optional(),
    link: z.string().url().optional(),
    github: z.string().url().optional(),
  }),
});

export const collections = { certificates, services };
