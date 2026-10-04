/**
 * Builds /llms.txt (a curated link index) and /llms-full.txt (the full text)
 * for AI assistants, following https://llmstxt.org. Both are generated from
 * the same data the site renders from, so they can't drift from the pages.
 */

import {
  about,
  alsoLeading,
  journey,
  monarc,
  MONARC_EMAIL,
  MONARC_URL,
} from "@/data/profile";
import type { Project } from "@/types/project";
import { abs, SITE } from "./site";

const link = (title: string, url: string, note?: string) =>
  `- [${title}](${url})${note ? `: ${note}` : ""}`;

/** Collapses stray blank lines and ends with a single newline. */
const finish = (lines: string[]) =>
  `${lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd()}\n`;

export function buildLlmsIndex(): string {
  return finish([
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `${SITE.name} (full name ${SITE.alternateName}) is based in ${SITE.address.locality}, Uganda. The links below are the canonical sources for who Grace is, what Grace is building and how to get in touch.`,
    "",
    "## Profile",
    "",
    link("Home", SITE.url, "About Grace, current work, career history and contact details."),
    link("Full profile for AI agents", abs("/llms-full.txt"), "Everything on the site as one plain-text document."),
    "",
    `## Building: ${monarc.name}`,
    "",
    link(monarc.name, MONARC_URL, `${monarc.role}. ${monarc.tagline}.`),
    ...monarc.ventures.map((v) => link(`${v.name} (${v.sector})`, v.url, v.description)),
    "",
    "## Monarc Lab",
    "",
    ...monarc.lab.papers.map((p) => link(p.title, p.url, p.description)),
    ...monarc.lab.research.map((r) => link(`${r.name} (${r.area})`, r.url, r.description)),
    "",
    `## Leading: ${alsoLeading.name}`,
    "",
    link(alsoLeading.name, alsoLeading.url, `${alsoLeading.role}. ${alsoLeading.description}`),
    ...alsoLeading.projects.map((p) => link(`${p.name} (${p.sector})`, p.url, p.description)),
    "",
    "## Optional",
    "",
    link("Projects", abs("/all-projects"), "Software projects Grace has built."),
    ...SITE.socials.map((s) => link(s.name, s.url)),
  ]);
}

export function buildLlmsFull(projects: Project[]): string {
  const lines: string[] = [];
  const push = (...parts: string[]) => lines.push(...parts);

  push(`# ${SITE.name}: full profile`, "", `> ${SITE.description}`, "");
  push(
    `This document gathers everything on ${SITE.url} for large-context AI agents. For a curated index of links, see /llms.txt.`
  );

  push("", "## About", "");
  push(`Name: ${SITE.name} (full name ${SITE.alternateName})`);
  push(`Location: ${SITE.address.locality}, Uganda`);
  push(`Roles: ${monarc.role}, ${monarc.name}; ${alsoLeading.role}, ${alsoLeading.name}`);
  push("Education: ISBAT University", "");
  for (const paragraph of about.paragraphs) push(paragraph, "");

  push(`## ${monarc.name}`, `URL: ${MONARC_URL}`, "");
  push(`Role: ${monarc.role}`, `Tagline: ${monarc.tagline}`, "", monarc.description, "");
  push("### Ventures", "");
  for (const v of monarc.ventures) {
    push(`#### ${v.name} (${v.sector})`, `URL: ${v.url}`, "", v.description, "");
  }
  push("### Monarc Lab papers", "");
  for (const p of monarc.lab.papers) {
    push(`#### ${p.title}`, `URL: ${p.url}`, "", p.description, "");
  }
  push("### Monarc Lab research", "");
  for (const r of monarc.lab.research) {
    push(`#### ${r.name} (${r.area})`, `URL: ${r.url}`, "", r.description, "");
  }

  push(`## ${alsoLeading.name}`, `URL: ${alsoLeading.url}`, "");
  push(`Role: ${alsoLeading.role}`, "", alsoLeading.description, "");
  for (const p of alsoLeading.projects) {
    push(`### ${p.name} (${p.sector})`, `URL: ${p.url}`, "", p.description, "");
  }

  push("## Career", "");
  for (const item of journey) {
    push(`- ${item.role}, ${item.org} (${item.period})${item.note ? `: ${item.note}` : ""}`);
  }

  if (projects.length) {
    push("", "## Projects", `URL: ${abs("/all-projects")}`, "");
    for (const project of projects) {
      push(`### ${project.name}`, `URL: ${abs(`/projects/${project.slug.current}`)}`);
      if (project.technologies?.length) {
        push(`Technologies: ${project.technologies.join(", ")}`);
      }
      push("", project.description, "");
    }
  }

  push("", "## Contact", "");
  push(`Contact form: ${abs("/#connect")}`);
  push(`Monarc enquiries: ${MONARC_EMAIL}`);
  for (const s of SITE.socials) push(`${s.name}: ${s.url}`);

  return finish(lines);
}
