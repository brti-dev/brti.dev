This is a starter for a Next.js app bootstrapped with TypeScript. It includes CSS for a responsive app, themes based on `prefers-color-scheme` media query, and common UI components.

## Getting Started

If using as a starter for a new app:

```bash
npx create-next-app nextjs-blog --use-npm --example "https://github.com/dr-spaceman/next.js-starter"
```

To merge config to an existing app, see section on merging below.

After initializing the app run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Config

Currently configured for [static export](https://nextjs.org/docs/advanced-features/static-html-export). To deploy another way:

1. In `next.config.js` set `trailingSlash` to `false`.
2. Run `next export` instead of `npm run build`

## Merging after changes to this repo

1. Add this remote to the other project repo, eg. `git remote add starter ./path_to_this_repo/next.js-starter/.git`
2. Pull the files `git pull starter`
3. Merge the files `git merge starter/main`

## Used to Build

- [mattberti.com](http://mattberti.com)
- [brandonpaillant.com](http://brandenpaillant.com)
- [Customer Direct](https://customerdirect.net)
