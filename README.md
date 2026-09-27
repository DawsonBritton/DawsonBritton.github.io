# dawsonbritton.github.io

My engineering portfolio, hosted free on GitHub Pages. GitHub rebuilds the site
about a minute after any change.

## Editing on github.com (no software needed)

Open a file, click the pencil icon, make changes, and click **Commit changes**.

| To change... | Edit this |
|---|---|
| A project page | `_projects/<name>.md` |
| The home page intro | `index.md` |
| Email, GitHub, LinkedIn links | `_config.yml` |
| Colors and fonts | `assets/css/style.css` |
| Resume download | Replace `assets/Dawson_Britton_Resume.pdf` |

### Adding a project

Copy an existing file in `_projects/` and change the part between the `---` lines:

```yaml
title: My New Project
category: Personal project        # small label above the title
date_range: 2026
order: 6                          # position on the home page
summary: One or two sentences for the home page card.
role: What I did
status: In progress               # small badge on the card
image: /assets/img/my-photo.jpg   # optional cover photo
specs:                            # optional spec boxes
  - { label: Motor, value: AeroTech J350 }
tools: [Onshape, OpenRocket]
```

Everything below the second `---` is the page itself, written in Markdown:
`## Heading`, `**bold**`, `- bullet`, `[link text](https://...)`.

### Adding photos

Upload photos to `assets/img/` (**Add file → Upload files**), then use them:

- As a card and page cover: `image: /assets/img/photo.jpg` in the header
- Inside a page: `![What the photo shows](/assets/img/photo.jpg)`

Keep photos under about 1 MB each. Resize large phone photos first.

Lines like `<!-- Add: ... -->` are notes to myself that don't show on the site.
Replace them with real content, or delete them.
