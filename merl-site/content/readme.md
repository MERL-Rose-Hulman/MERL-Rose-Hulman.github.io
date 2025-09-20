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
Here’s your text formatted in clean Markdown:

# What the prompt does
- Converts any pasted article (plain text / rough Markdown / HTML) into a Hugo-ready `.md` file.
- Adds/cleans TOML front matter (`+++ ... +++`), generates a good slug, meta description, and optional Open Graph fields.
- Parses your inline image-merge directives (filenames you embed in the body) and moves them into `[params.image_merge]`.

---

# Before you run it
- Decide your title, tags, categories, cover image (if any), and publish date.
- If you’ll auto-create a social image from another document, add inline directives (see below).
- Timezone default is **America/Indiana/Indianapolis (-04:00)**. If you need a different offset, edit the prompt’s rule 7 or include an explicit date.

---

# Basic workflow (3 steps)
1. Copy the prompt into ChatGPT.  
2. Paste your `SOURCE_TEXT` (your full article). Put any special hints at the top or bottom.  
3. The model will return one code block containing the complete `.md` file (front matter + cleaned body). Save it to your Hugo `content/` folder.

---

# Inline directives (cheat sheet)

Put these inside your `SOURCE_TEXT` (each on its own line). The formatter will read them, use them in front matter, then remove them from the body.

- `[[merge-source: <filename.ext>]]`  
  Example: `[[merge-source: welcome-to-merl.pdf]]`  
  Sets `[params.image_merge].source`. If no output is given, it defaults to `/images/<slug>-social.png` and also sets that as your cover/OG image.

- `[[merge-output: /images/<file>]]`  
  Example: `[[merge-output: /images/welcome-cover.png]]`  
  Sets `[params.image_merge].output`. If no cover image is set yet, this becomes `images[0]` and `[params.og].image`.

- `[[merge-role: cover|og|body|cover,og]]`  
  Example: `[[merge-role: cover,og]]`  
  Controls where the merged image is used. If it includes `body`, the page body will include a figure referencing the merged output.

- `[[cover-image: /images/<file>]]`  
  Example: `[[cover-image: /images/merl-hero.jpg]]`  
  Forces `images[0]` and `[params.og].image` to this file.

---

# Minimal example input

[[merge-source: welcome-to-merl.pdf]]
[[merge-output: /images/welcome-to-merl-cover.png]]
[[merge-role: cover,og]]

Title: Welcome to MERL
Tags: MERL, robotics, open-source, STEM Education
Categories: Lab, Education
Hero: /images/avatar.jpeg

Welcome to the Multidisciplinary Educational Robotics Lab (MERL)

At MERL, we design inclusive, open-source robotics platforms…

**What you’ll get back:**  
One fenced code block with a complete `.md` file—TOML front matter filled, clean Markdown body, directives removed, and `[params.image_merge]` populated.

---

# Where to save & how to reference
- **Page file:** `content/welcome-to-merl.md` (or page bundle: `content/welcome-to-merl/index.md`).  
- **Images:** Use absolute paths (`/images/...`) unless your theme expects bundle-relative paths.  
- **Type:** Stays `"page"` unless targeting a section with list templates (e.g., `type = "post"`).

---

# Do’s & don’ts

**Do**
- Keep tags 3–10, lower-case nouns.  
- Keep categories broad (1–3 items).  
- Write a 150–160 char meta description (the prompt will create/refine one).  
- Use meaningful link text (the prompt converts raw URLs).  

**Don’t**
- Duplicate the H1 in the body if your theme renders `.Title` by default.  
- Mix YAML/JSON front matter—this prompt is TOML only (`+++`).  
- Paste multiple articles at once.  

---

# Multilingual tips (if you use i18n)
- Put language variants under `content/en/...`, `content/zh/...`, etc., or add `lang = "en"` in `[params.og]` if supported.  
- Use `aliases = ["/old-path/"]` to preserve old URLs when renaming slugs.  

---

# Quick QA checklist
- Front matter keys exist: `title`, `date`, `draft`, `tags`, `categories`, `description`, `images`, `slug`, `type`.  
- Description length ~150–160 chars, no emoji.  
- Slug is kebab-case ASCII only.  
- `images[0]` and `[params.og].image` point to a real file.  
- If `merge-role` includes `body`, confirm there’s a figure shortcode at the top.  

---

# Troubleshooting
- If ChatGPT adds commentary outside the code block, say:  
  *“Return ONLY the finished .md file inside one code block.”*  
- If your theme needs a different figure shortcode (e.g., `figurex`), mention it in the source.  
- If dates are wrong, include a precise ISO timestamp with offset in your `SOURCE_TEXT`.  

---

That’s it—paste the prompt, drop in your article + optional directives, and save the returned code block as your Hugo page.



