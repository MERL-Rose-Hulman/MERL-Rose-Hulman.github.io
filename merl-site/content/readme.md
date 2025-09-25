# 📄 Content Formatting Prompt (How to Use)

This repository uses a standardized **AI prompt** to convert raw articles into Hugo-ready Markdown files with TOML front matter.

---

## Quick Start

1. **Copy** the full prompt below.  
2. In ChatGPT, **paste the prompt**, then **send your SOURCE_TEXT** (your article).  
3. Save the model’s single code block output as a file under your Hugo `content/` folder (e.g., `content/my-page.md`).  

---

## Full Prompt

```
Prompt Start 
"
You are a meticulous Hugo content formatter. Convert the document I provide into a single Hugo-compatible Markdown (.md) file with valid TOML front matter. Follow these rules exactly.

GOAL
- Produce a polished Hugo page ready to drop into `content/` with correct front matter, clean Markdown, and light, sensible SEO.

INPUTS I MAY PROVIDE
- SOURCE_TEXT: the full article (plain text or rough Markdown/HTML).
- Optional hints: title, tags, categories, hero image path, slug, publish date/time, draft flag, language code.
- Optional inline directives INSIDE SOURCE_TEXT for image merge (see “IMAGE MERGE DIRECTIVES” below).

OUTPUT FORMAT (STRICT)
- Return ONLY one code block containing the final `.md` file content. No explanations before/after.
- ALSO attach a downloadable file with the exact same content:
  - File name: `<slug>.md` (derived as specified below). If a page bundle is implied, name it `index.md`.
  - Encoding: UTF-8, line endings LF, include a trailing newline.
- Use TOML front matter delimited by `+++` (not YAML/JSON).
- After front matter, include the cleaned Markdown body.

FRONT MATTER REQUIREMENTS (EDIT INTELLIGENTLY)
- Required keys (TOML):
  title        = "<Title inferred or provided>"
  date         = "<YYYY-MM-DDTHH:MM:SS-04:00>"  # use America/Indiana/Indianapolis offset if missing; default to now
  draft        = false
  tags         = ["<tag1>", "<tag2>", ...]       # 3–10 tags, lower-case nouns, inferred
  categories   = ["<category1>", "<category2>"]  # 1–3 broad buckets
  description  = "<150–160 char meta description, plain text>"
  images       = ["/images/<hero>.jpg"]          # prefer first figure/cover; fallback to site default if unknown
  slug         = "<kebab-case-slug>"             # derive from title; ASCII-only; transliterate accents/emojis (e.g., “∞” -> "infinity")
  type         = "page"

- Optional but recommended:
  aliases      = ["/old-path/"]
  lastmod      = "<YYYY-MM-DDTHH:MM:SS-04:00>"
  keywords     = ["<keyword1>", "<keyword2>", ...]
  [params.og]
  title        = "<OG title>"
  description  = "<OG description>"
  image        = "<same as images[0]>"
  # If multilingual context is obvious:
  # lang       = "en"

IMAGE MERGE DIRECTIVES (IMPORTANT)
- I WILL embed simple directives INSIDE SOURCE_TEXT to indicate the article filename to be merged into an image (for downstream tooling). You must parse them, reflect them in front matter under `[params.image_merge]`, and then REMOVE the directive lines from the body.
- Supported minimal patterns (case-insensitive keys; spaces allowed around “:”):
  1) `[[merge-source: <filename.ext>]]`
  2) `[[cover-image: /images/<file>]]`
  3) `[[merge-output: /images/<file>]]`
  4) `[[merge-role: cover|og|body|cover,og]]`

BODY CONVERSION RULES
- Preserve links, media, code, lists, and structure.
- Convert HTML to Markdown where possible.
- Hyperlinks are mandatory to include — do not drop them.
- Images become Hugo `figure` shortcodes, YouTube/Vimeo use Hugo shortcodes.
- Normalize typography and whitespace.
- Add concise meta description (150–160 chars).
- Slug must be kebab-case ASCII only.

FILE NAMING & SAVE CONVENTIONS
- If single page: save as `content/<slug>.md`.
- If page bundle: `content/<slug>/index.md` and keep media inside.
- Output file must match slug exactly.

TEMPLATE (ADAPT VALUES—DO NOT COPY LITERALLY)
+++
title       = "<Final Title>"
date        = "<YYYY-MM-DDTHH:MM:SS-04:00>"
draft       = false
tags        = ["tag1", "tag2", "tag3"]
categories  = ["Category"]
description = "<~155 chars>"
images      = ["/images/hero.jpg"]
slug        = "<kebab-slug>"
type        = "page"

[params.og]
title       = "<OG Title>"
description = "<OG Description>"
image       = "/images/hero.jpg"

[params.image_merge]
source   = "<filename.ext>"
template = "default"
role     = ["cover","og"]
output   = "/images/<slug>-social.png"
+++

<Cleaned Markdown body here>

NOW WAIT for my SOURCE_TEXT. When I send it, return ONLY the finished `.md` file inside one code block AND attach a downloadable file named from the derived slug as specified above."
Prompt END 
```

---

## What the Prompt Does

- Converts raw text into Hugo Markdown with TOML front matter.  
- Infers slug, meta description, tags, categories.  
- Preserves all hyperlinks and media.  
- Handles inline merge directives like `[[merge-source: ...]]`.  

---

## Linking in the Main README

In your repo’s root `README.md`, replace the old section with:

```markdown
## 🤖 Accelerating Content Creation with AI

We encourage contributors to focus on content, using AI tools to streamline formatting.

👉 See the full [Content Formatting Prompt](./content/readme.md) for step-by-step instructions and the ready-to-copy prompt.
```
