# Mattberti.com

This is the complete code behind mattberti.com, a personal web site mostly focused on a portfolio and blog. I am providing this as open source because I wanted to share my code to others.

## Built With

- Javascript
- Typescript
- React
- Next.js
- Sass

## Setup

To get this app running on your local machine:

1. Clone this repository
2. Install website dependencies by running `npm install`
3. Run the development server: `npm run dev`

Edit the constants in `src/lib/constants.ts`, then personalize `pages/index.tsx`. You can then delete all the other pages except `_app.tsx`, `_document.tsx`, and the `blog` folder (unless you will forego the blog, in which case it would be prudent to delete it).

### Blog

Posts within the `posts` directory are automatically generated as blog posts. To add a new post, manually create a new markdown file, or use the shortcut script: `npm run newpost`.

## Build

I recommend you deploy your app to [Vercel](https://vercel.app), in which case you can skip the build process instructions below.

To build for deployment: `npm run build`

The current build config utilizes [Next.js static export](https://nextjs.org/docs/advanced-features/static-html-export). To deploy this app on a server, use `next build`.

## Contributing

Feel free to file a PR if you want to help improve this project. :)
