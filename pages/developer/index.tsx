import Link from 'next/link'
import React from 'react'
import { FiDownload as DownloadIcon } from 'react-icons/fi'

import Layout from 'components/Layout'
import Button from 'components/Button'
import classes from 'styles/developer.module.scss'

const WORKS = [
  {
    label: 'Single-Page App',
    slug: 'camval-produce',
    heading: 'Camval Produce',
    subheading: 'Project Lead',
    description:
      'An e-commerce app for a produce delivery business in San Diego.',
    tags: [
      'Single Page App',
      'E-commerce',
      'Node and Express',
      'MongoDB',
      'GraphQL',
      'React',
      'Material UI',
      'Webpack',
    ],
  },
  {
    label: 'Shopify App',
    slug: 'branden-paillant',
    heading: 'Branden Paillant',
    subheading: 'Project Lead',
    description:
      'An online presence and e-commerce print shop for a photographer of urban industrial landscapes.',
    tags: ['Single Page App', 'E-commerce', 'Next.js', 'Shopify'],
  },
  {
    label: 'Web App',
    slug: 'chenglish-dict',
    heading: 'Chenglish Dictionary',
    description: 'Learn Chinese characters and phrases.',
    tags: [
      'Test-Driven Development',
      'Mobile-first',
      'PHP',
      'MySQL',
      'Javascript and jQuery',
    ],
    image: (
      <picture>
        <source srcSet="/img/chenglishdict_work.webp" type="image/webp" />
        <img
          src="/img/chenglishdict_work.png"
          alt="Chenglish Dictionary screenshots"
        />
      </picture>
    ),
  },
  {
    heading: 'AXRN Animal Crossing Right Now',
    label: 'Web App',
    slug: 'axrn',
    description: (
      <>
        A web app for players of the Nintendo Switch game{' '}
        <i>Animal Crossing: New Horizons</i> to inform them what critters are
        available right now.
      </>
    ),
    tags: [
      'Mobile-first',
      'Responsive design',
      'Web Scraping',
      'Python/Flask',
      'CSS Grid',
    ],
    image: (
      <picture>
        <source srcSet="/img/axrn.webp" type="image/webp" />
        <img
          src="/img/axrn.png"
          alt="AXRN Animal Crossing Right Now screenshots"
        />
      </picture>
    ),
  },
  {
    label: 'Single-Page App',
    slug: 'mern-tracker',
    heading: 'MERN Issue Tracker',
    description:
      'A single-page app built to learn how to make single-page apps.',
    tags: [
      'Single Page App',
      'Node and Express',
      'MongoDB',
      'GraphQL',
      'React',
      'Material UI',
      'Webpack',
    ],
  },
  {
    label: 'Web Community',
    slug: 'videogamin',
    heading: 'Videogam.in',
    description: 'Show off your videogame collection.',
    tags: ['Custom CMS', 'PHP', 'MySQL', 'jQuery', 'Photoshop'],
    image: (
      <picture>
        <source srcSet="/img/videogamin_shel_sm.webp" type="image/webp" />
        <img
          src="/img/videogamin_shel_sm.png"
          alt="Videogam.in game shelf mock"
        />
      </picture>
    ),
  },
  {
    label: 'Web Community',
    slug: 'square-haven',
    heading: 'Square Haven',
    description: 'A community for fans of the videogame publisher Square Enix.',
    tags: ['Community-Building', 'PHP', 'MySQL'],
  },
]

export function getNextArticle(slug: string) {
  const currentArticleIndex = WORKS.findIndex(work => work.slug === slug)
  if (currentArticleIndex === -1) {
    throw new Error(`Article slug ${slug} doesn't exist`)
  }

  let nextArticle
  if (currentArticleIndex === WORKS.length - 1) {
    nextArticle = WORKS[0]
  } else {
    nextArticle = WORKS[currentArticleIndex + 1]
  }

  return (
    <Link href={`/developer/${nextArticle.slug}`}>{nextArticle.heading}</Link>
  )
}

function Work() {
  return (
    <Layout
      title="Full Stack Web Developer"
      description="Matt Berti is a full stack web developer focused on responsive, minimalist
                    design on top of clean code, React, and GraphQL. Come see my full project portfolio."
    >
      <section>
        <p>
          Hi I'm Matt, a full stack web developer focused on responsive,
          accessible, minimalist design on top of clean code, React, and
          GraphQL. I love building apps that help people learn and stay
          informed.
        </p>
        <Button
          to="https://www.dropbox.com/s/5z4xkdnf27tdimb/MathewBerti_resume_webdeveloper.pdf"
          variant="outlined"
        >
          <DownloadIcon />
          <strong>Download Résumé</strong>
        </Button>
      </section>
      <section className={classes.techList}>
        <h2>I enjoy working with</h2>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Jest</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>a11y</li>
          <li>GraphQL</li>
          <li>REST API</li>
          <li>SQL</li>
          <li>PHP</li>
          <li>Python</li>
          <li>VS Code</li>
          <li>People ❤️</li>
        </ul>
      </section>
      <section className={classes.mywork}>
        <h2 className="h1">My Work</h2>
        <div className={classes.workItems}>
          {WORKS.map(work => (
            <div className={classes.workItem} key={work.slug}>
              <Link href={`/developer/${work.slug}`}>
                <a title={work.heading}>
                  <small className="text-label">{work.label}</small>
                  <h3 className="h2">{work.heading}</h3>
                  {work.subheading && <strong>{work.subheading}</strong>}
                  {work.description && <p>{work.description}</p>}
                  {work.image ? work.image : ''}
                  {/* <ul className={classes.tags}>
                                        {work.tags.map(tag => <li key={tag}>{tag}</li>)}
                                    </ul> */}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Work
