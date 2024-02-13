import { Button, Container } from 'matterial'
import Link from 'next/link'
import { FiDownload as DownloadIcon } from 'react-icons/fi'
import {
  FaLinkedin as LinkedinIcon,
  FaGithub as GithubIcon,
  FaExpand as ExpandIcon,
} from 'react-icons/fa'

import Layout from 'components/Layout'
import classes from 'styles/developer.module.scss'

const WORKS = [
  // WORKS[0] must be showable!!!
  {
    label: 'Design System',
    slug: 'matterial-ui',
    heading: 'Matterial UI',
    subheading: 'Designer & Developer',
    description:
      'A React component library for building user interfaces, fully typed, tested, and documented',
    tags: ['React', 'typescript', 'design system', 'monoreopo', 'unit testing'],
  },
  {
    label: 'Single-Page App',
    slug: 'boat-daddy',
    heading: 'Boat Daddy',
    subheading: 'Lead Developer & Product Designer',
    description: 'The Uber of Boats',
    tags: [
      'Single Page App',
      'Next.js',
      'PostgreSQL',
      'Prisma',
      'GraphQL',
      'Typescript',
      'custom auth',
      'Cloudinary API',
      'Mapbpx API',
      'SASS',
    ],
  },
  {
    show: false,
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
    show: false,
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
    show: false,
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
    show: false,
    heading: 'MERN Issue Tracker',
    label: 'Single-Page App',
    slug: 'mern-tracker',
    description:
      'A single-page app built to learn how to make single-page apps.',
    tags: [
      'Single Page App',
      'Node and Express',
      'MongoDB',
      'GraphQL',
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
    show: false,
    label: 'Web Community',
    slug: 'square-haven',
    heading: 'Square Haven',
    description: 'A community for fans of the videogame publisher Square Enix.',
    tags: ['Community-Building', 'PHP', 'MySQL'],
  },
]

const APPS = [
  {
    label: 'Vanilla Javascript',
    link: 'https://github.com/dr-spaceman/ascii-emoji-scrapbook',
    heading: 'ASCII Emoji Scrapbook',
    description:
      'A web app to save and share your favorite ASCII art. Actually you can save and share almost anything.',
    image: (
      <img src="/img/ascii-emoji.webp" alt="ASCII Emoji Scrapbook web app" />
    ),
    footer: <b>¯\_(ツ)_/¯</b>,
  },
  {
    label: 'Web App',
    link: '/work/chenglish-dict/',
    heading: 'Chenglish Dictionary',
    description: 'A mobile-first app to learn Chinese characters and phrases.',
    image: (
      <img
        src="/img/chenglishdict_work.png"
        alt="Chenglish Dictionary screenshots"
      />
    ),
    footer: <>你好，你看得懂妈？如果看得懂的话你不需要这件软件</>,
  },
  {
    heading: 'AXRN Animal Crossing Right Now',
    label: 'Python',
    link: '/work/axrn/',
    description: (
      <>
        A web app for players of the Nintendo Switch game{' '}
        <i>Animal Crossing: New Horizons</i> to inform them what critters are
        available right now.
      </>
    ),
    footer: (
      <>
        Helped <b>1,359 users</b> clear debts totaling <b>1.6 trillion bells</b>
      </>
    ),
    image: (
      <img
        src="/img/axrn.png"
        alt="AXRN Animal Crossing Right Now screenshots"
      />
    ),
  },
  {
    label: 'Vanilla Javascript',
    link: 'https://github.com/dr-spaceman/nato-alphabet',
    heading: 'NATO Alphabet',
    description: 'A web app to convert text to the NATO phonetic alphabet.',
    image: <img src="/img/nato-alphabet.png" alt="NATO Alphabet web app" />,
    footer: <b>India Lima Oscar Victor Echo Uniform</b>,
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
    let indexOffset = 0
    while (!nextArticle) {
      indexOffset++
      if (WORKS[currentArticleIndex + indexOffset]?.show !== false) {
        nextArticle = WORKS[currentArticleIndex + indexOffset]
      }
      if (currentArticleIndex + indexOffset >= WORKS.length) {
        nextArticle = WORKS[0]
      }
    }
  }

  return <Link href={`/work/${nextArticle.slug}`}>{nextArticle.heading}</Link>
}

function Work() {
  return (
    <Layout
      title="Full Stack Web Developer"
      description="Matt Berti is a full stack software engineer focused on responsive, minimalist design on top of clean code, React, and GraphQL."
    >
      <section>
        <p>
          Hi I'm Berti, a software engineer laser-focused on responsive,
          accessible, and lovable user experiences. I love building apps that
          help people learn and stay informed. I'm an expert in building
          Frontend Architecture and Design Systems.
        </p>
        <Container row>
          <Button
            to="https://www.linkedin.com/in/mrberti/"
            variant="outlined"
            prepend={<LinkedinIcon />}
          >
            Connect with Me
          </Button>
          <Button
            to="https://github.com/dr-spaceman"
            variant="outlined"
            prepend={<GithubIcon />}
          >
            My Code
          </Button>
          <Button
            to="https://www.dropbox.com/s/ncbdr2qfvzh4qyk/MathewBerti_resume_frontenddev.pdf?dl=0"
            variant="outlined"
            prepend={<DownloadIcon />}
          >
            Resume
          </Button>
        </Container>
      </section>
      <section className={classes.techList}>
        <h2>I enjoy working with</h2>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>a11y</li>
          <li>Jest</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>GraphQL</li>
          <li>REST API</li>
          <li>SQL</li>
          <li>PHP</li>
          <li>Vue</li>
          <li>Python</li>
          <li>VS Code</li>
          <li>People ❤️</li>
        </ul>
      </section>
      <section className={classes.mywork}>
        <h2 className="h1">My Work</h2>
        <div className={classes.workItems}>
          {WORKS.filter(work => work.show !== false).map(work => (
            <div key={work.slug} className={classes.workItem}>
              <Link href={`/work/${work.slug}`}>
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

        <h2 className="h1">My Apps</h2>
        <div className={classes.appsItems}>
          {APPS.map(app => (
            <div key={app.link} className={classes.appsItem}>
              {app.image}
              <div>
                <small className="label">{app.label}</small>
                <h5>
                  <Link href={app.link}>{app.heading}</Link>
                </h5>
                <div className="description">{app.description}</div>
                <hr />
                <footer>
                  <span>{app.footer}</span>
                  <ExpandIcon className="action" aria-hidden="true" />
                </footer>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Work
