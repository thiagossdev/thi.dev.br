import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';

/** Campo traduzido: um valor para cada idioma do site. */
const localized = <T extends z.ZodType>(schema: T) =>
  z.object({ en: schema, 'pt-br': schema, es: schema });

const experience = defineCollection({
  loader: file('src/content/experience.yaml'),
  schema: z.object({
    company: z.string(),
    url: z.url().optional(),
    location: z.string(),
    start: z.string(), // "2021-11"
    end: z.string().nullable(), // null = emprego atual
    role: localized(z.string()),
    summary: localized(z.array(z.string())),
    stack: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: file('src/content/projects.yaml'),
  schema: z.object({
    name: z.string(),
    description: localized(z.string()),
    repo: z.url().optional(),
    language: z.string(),
    year: z.number(),
    kind: z.enum(['oss', 'work']).default('oss'),
    order: z.number(), // posição na lista, menor primeiro
  }),
});

export const collections = { experience, projects };
