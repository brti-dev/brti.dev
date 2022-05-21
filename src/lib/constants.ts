import { Color } from 'interfaces/theme'

export const COLORS: Color[] = [
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
  'dark',
  'light',
]

/**
 * Site title (your name)
 */
export const TITLE = 'Matt Berti'

/**
 * One-line bio, a short description
 */
export const BIO = 'full stack web developer and computer science teacher'

/**
 * Object to build nav and help router
 *
 * @prop link Link to index
 * @prop title Label title that will be used on nav
 * @prop imgSrc An optimized, preferred image thumbnail in .webp format located in `public/img` folder
 * @prop imgSrcFallback A fallback image in .png or .jpg format located in `public/img` folder
 */
export const PAGES = [
  {
    link: '/',
    title: 'someone',
    imgSrc: 'mattberti.webp',
    imgSrcFallback: 'mattberti.jpg',
  },
  {
    link: '/developer',
    title: 'web developer',
    imgSrc: 'mattberti-developer.webp',
    imgSrcFallback: 'mattberti-developer.png',
  },
  {
    link: '/teacher',
    title: 'teacher',
    imgSrc: 'mattberti-teacher.webp',
    imgSrcFallback: 'mattberti-teacher.png',
  },
  {
    link: '/blog',
    title: 'blogger',
    imgSrc: 'mattberti-blogger.webp',
    imgSrcFallback: 'mattberti-blogger.png',
  },
]

/**
 * Your forked repository root directory; Used to build source URL on page footers
 */
export const REPOSITORY_ROOT =
  'https://github.com/dr-spaceman/brti.dev/tree/main'

/**
 * Pathname-alias for source code link (@github)
 */
export const ALIASES = {
  '/developer': '/developer/index.tsx',
  '/blog': '/blog/index.tsx',
}

/**
 * Your email address
 * Optional; If nothing here, no email link will show up
 */
export const EMAIL = 'mat.berti@gmail.com'
