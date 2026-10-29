import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const experience = defineCollection({
  loader: file('src/content/experience.yaml'),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    url: z.string().url().optional(),
    location: z.string(),
    start: z.string(), // "2021-11"
    end: z.string().nullable(), // null = emprego atual
    summary: z.array(z.string()),
    stack: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: file('src/content/projects.yaml'),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    repo: z.string().url().optional(),
    language: z.string(),
    year: z.number(),
    kind: z.enum(['oss', 'work']).default('oss'),
  }),
});

export const collections = { experience, projects };
