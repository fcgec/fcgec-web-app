---
title: "How to post 3"
date: "2020-09-17"
author: "Vipul Chodankar"
---

# How to get started with blog posts

We'll follow the following structure to ensure things stay organized.

<br>
lol
## How to save the post

1. Fork the repo
1. Clone the forked repo
   > `git clone https://github.com/<YourUserName>/new-webapp`
1. Create a new branch (folder-name explained in the folder structure)
   > `git checkout -b blog-folder-name`
1. Add your files
   > Example `git add .` to add everything
1. Commit your changes with a meaning message
   > `git commit -m "Blog: folder-name"`
1. Push your changes to your forked repo
   > `git push -u origin blog-folder-name`
1. Create Pull Request on GitHub and add label 'blog'

<br>

## Folder Structure

![Random image](./folder-structure.jpeg)

1. Create a folder inside content/blog
1. Use kebab case to name the folder, the same name will be used for your file. For example, in the above picture, I name my file and folder as 'how-to-post'.
1. Create a markdown file with the same name as your folder.
1. Add any images that you will require to the folder or directly use their links.
   > Supported image types: PNG & JPEG

<br>

## Learning Markdown

- [Commonmark](https://commonmark.org/help/)
- [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/)

<br>

It's quite simple once you get the hang of it.

<br>

## Where do i see my post?

Your post will be visible at https://fcgec.netlify.app/blog/file-name

Example: this post is at https://fcgec.netlify.app/blog/how-to-post
