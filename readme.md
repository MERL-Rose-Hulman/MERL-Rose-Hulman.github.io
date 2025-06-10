


## 🛠️ Customizing Fonts in PaperMod Using Hugo Extended CSS

To improve the typography of the MERL website, we customized fonts using [PaperMod’s recommended method](https://github.com/adityatelange/hugo-PaperMod/wiki/Features#extended-custom-css).

### ✅ What We Did:

1. **Loaded Google Fonts**  
   We added `Fira Sans` and `Roboto Mono` via `layouts/partials/extend_head.html`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Roboto+Mono&display=swap" rel="stylesheet">
   ```

2. **Used Hugo Extended CSS Mechanism**  
   We placed our custom styles in:
   ```
   assets/css/extended/custom.css
   ```
   PaperMod automatically includes all CSS files from this folder at build time, allowing us to extend or override default styles safely.

3. **Defined Font Variables and Mappings**  
   In `custom.css`, we set and applied font variables like this:
   ```css
   :root {
     --font-body: …
     --font-heading: …
     --font-mono: …
   }

   body {
     font-family: var(--font-body) !important;
   }

   h1, h2, h3, h4, h5, h6 {
     font-family: var(--font-heading) !important;
   }

   code, pre {
     font-family: var(--font-mono) !important;
   }
   ```

---

### 📌 Why This Approach Works Best:
- **Cleaner than overriding config.toml**
- **No need for manual CSS links**
- **Preserves theme upgradability and performance**

 https://github.com/tom2almighty/hugo-narrow


 commit and deploy


 # on main
git switch main
git add # things changed
git commit -m "" #commit message
git push

# fast-forward the deployment branch and trigger a release
git switch deployment
git merge --ff-only main
git push