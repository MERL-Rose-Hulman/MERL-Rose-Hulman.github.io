# 🧠 MERL Website (v0.2)

Welcome to the github homepage repository for the **Multidisciplinary Educational Robotics Lab (MERL)** at Rose-Hulman. Built using [Hugo](https://gohugo.io), a fast and flexible static site generator, combined with the elegant [hugo-narrow](https://github.com/tom2almighty/hugo-narrow) theme.

[Hugo](https://gohugo.io) is a modern static site generator that builds websites from markdown content at lightning speed. It’s great for technical teams who want flexibility, performance, and easy deployment.

[hugo-narrow](https://github.com/tom2almighty/hugo-narrow) is a minimalist, typography-focused theme designed for clean, distraction-free websites.  
⚠️ Note: hugo-narrow is a clean and visually appealing theme, but documentation is limited. Luckily, it follows most Hugo conventions, so it’s easy to work with once you get used to it.

---

## 📖 Table of Contents

- [🧠 MERL Website (v0.2)](#-merl-website-v02)
  - [📖 Table of Contents](#-table-of-contents)
  - [📁 Project Structure Overview](#-project-structure-overview)
  - [✍️ Creating and Managing Content](#️-creating-and-managing-content)
    - [🗂️ Adding Sections and Subpages](#️-adding-sections-and-subpages)
    - [➕ Adding Pages Under Existing Sections (e.g., Projects, About)](#-adding-pages-under-existing-sections-eg-projects-about)
    - [📝 Adding Blog Posts](#-adding-blog-posts)
    - [🔗 Linking Pages](#-linking-pages)
  - [🧩 Custom Shortcodes](#-custom-shortcodes)
    - [🔄 Loop Carousel](#-loop-carousel)
    - [📂 LoopFolder Carousel](#-loopfolder-carousel)
  - [🤖 Accelerating Content Creation with AI](#-accelerating-content-creation-with-ai)
  - [🚀 Deployment Process](#-deployment-process)
  - [🎨 Theme Customization](#-theme-customization)
    - [🔧 General Theme Customization](#-general-theme-customization)
    - [✏️ Fonts Customization](#️-fonts-customization)
  - [📦 Project Information](#-project-information)

---

## 📁 Project Structure Overview

```
/content        # Markdown content: pages and posts
/layouts        # Custom HTML templates
/assets         # CSS, JS, images for processing
/static         # Raw static files
/themes         # Git submodule: hugo-narrow theme
/config.toml    # Hugo configuration
```

> **Important**: Ensure each content file includes `draft: false` to appear publicly.

---


## ✍️ Creating and Managing Content

> 📌 If you're adding content under sections defined in `[menu]` (like Projects or About), see the guide below on [Adding Pages Under Existing Sections](#-adding-pages-under-existing-sections-eg-projects-about).


### 🗂️ Adding Sections and Subpages

To create a new site section:

1. Add a new folder inside `/content` (e.g., `/content/projects`).
2. Create an `_index.md` or separate `.md` files with front matter:

```markdown
---
title: "Projects"
weight: 1
draft: false
---
```

3. Add new items to the main navigation in `hugo.toml` (if you want the section to appear in the top menu):

```toml
[[menu.main]]
  name = "Projects"
  url = "/projects/"
  weight = 2
```

---

### ➕ Adding Pages Under Existing Sections (e.g., Projects, About)

If you want to add new content under an existing menu section (like **Projects** or **About**), do the following:

1. Navigate to the corresponding folder under `/content/`, for example:

```
/content/projects/
/content/about/
```

2. Add a new markdown file with front matter:

```markdown
---
title: "Your Page Title"
date: 2025-06-14
draft: false
---
```

3. Hugo will automatically include it as a subpage. You do **not** need to modify the `[menu]` again unless you want the new subpage to appear in the top navigation.

> ✅ These subpages will be listed automatically if the section layout supports it (e.g., via `_index.md` with `.Pages` rendering).

### 📝 Adding Blog Posts

1. Create a new markdown file under `content/posts/`:

```
content/posts/2025-06-14-my-post.md
```

2. Add Hugo front matter:

```markdown
---
title: "My First Post"
date: 2025-06-14
tags: ["AI", "Robotics"]
draft: false
---
```

3. Write content using markdown.

### 🔗 Linking Pages

Use markdown syntax to create links:

```markdown
[Visit MERL GitHub](https://github.com/MERL-Rose-Hulman)
[Projects](/projects/)
```

---

## 🧩 Custom Shortcodes

We have two special shortcodes for creating image carousels with Swiper.js:

### 🔄 Loop Carousel

Explicitly specify image paths:

```markdown
{{< loop "/img/1.jpg,/img/2.jpg,/img/3.jpg" >}}
```

Enable in `config.toml`:

```toml
[params]
enableimgloop = true
```

### 📂 LoopFolder Carousel

Automatically reads images from a specified folder:

```markdown
{{< loopFolder "img/gallery" >}}
```

Enable in `config.toml`:

```toml
[params]
enableimgFolderloop = true
```

---

## 🤖 Accelerating Content Creation with AI

We encourage contributors to focus on content, using AI tools to streamline formatting. Recommended AI prompt:

> “Format this content into a Hugo markdown file, including proper front matter (title, date, tags, draft: false).”

---

## 🚀 Deployment Process

Branches:
- `main`: Development
- `deployment`: Production (GitHub Pages)

Deploying steps:

```bash
git switch main
git add .
git commit -m "Describe changes"
git push

# Deploy to production
git switch deployment
git merge --ff-only main
git push
```

GitHub Actions automatically build and deploy to GitHub Pages.

---

## 🎨 Theme Customization

### 🔧 General Theme Customization

To modify the theme without losing updates:
- Copy the file from `themes/hugo-narrow/layouts/...` to `/layouts/...`.
- Customize safely within your local overrides.

### ✏️ Fonts Customization

We customized fonts using extended CSS:

1. Added fonts in `layouts/partials/extend_head.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Roboto+Mono&display=swap" rel="stylesheet">
```

2. Set font variables in `assets/css/extended/custom.css`:

```css
:root {
  --font-body: "Fira Sans", sans-serif;
  --font-heading: "Fira Sans", sans-serif;
  --font-mono: "Roboto Mono", monospace;
}
```

---

## 📦 Project Information

| Detail        | Information                                                       |
|---------------|-------------------------------------------------------------------|
| **Version**   | `v0.2`                                                            |
| **Live URL**  | [MERL Website](https://merl-rose-hulman.github.io)                |
| **Repository**| [MERL GitHub](https://github.com/MERL-Rose-Hulman/MERL-Rose-Hulman.github.io) |
| **Created by**| Yueqiao Wang (wangy61@rose-hulman.edu)                            |
| **Maintainer**| Yueqiao Wang                                                      |
| **Note**      | Some content enhanced with AI                                     |

---

Happy contributing! 🚀🌟