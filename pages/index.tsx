import { TITLE, BIO, EMAIL, PAGES } from 'lib/constants'
import Layout from 'components/Layout'
import NavLink from 'components/NavLink'
import classes from 'styles/index.module.css'

function HomePage() {
  return (
    <Layout description={`Official website of ${TITLE}, ${BIO}. Come meet me.`}>
      <div
        style={{ display: 'none' }}
        itemScope
        itemType="http://schema.org/Person"
      >
        {/* Update the following lines with your alternate spellings, nicknames, aliases, alter-egos, etc. */}
        <span itemProp="name">Matt Berti</span>
        <span itemProp="additionalName">Mathew Berti</span>
        <span itemProp="additionalName">Matthew Berti</span>
        <span itemProp="additionalName">Mathew Ryan Berti</span>
        <span itemProp="additionalName">BahaMatt</span>
        <span itemProp="additionalName">DrSpaceman</span>
        {EMAIL && (
          <a href={`mailto:${EMAIL}`} itemProp="email">
            {TITLE}
          </a>
        )}
        <img
          src={`/img/${PAGES[0]['imgSrcFallback']}`}
          alt={TITLE}
          itemProp="image"
        />
      </div>
      {/* Customize the following component with your desired layout */}
      <section>
        <p>
          Hi I&apos;m Matt, a{' '}
          <NavLink
            navIndex={2}
            href="/teacher"
            title="Matt Berti's teaching experience and CV"
          >
            computer science teacher
          </NavLink>{' '}
          by day and{' '}
          <NavLink
            navIndex={1}
            href="/developer"
            title="Matt Berti's portfolio of full stack web projects"
          >
            full stack web developer
          </NavLink>{' '}
          by night. I&apos;m passionate about <strong>education</strong>,{' '}
          <strong>the outdoors</strong>, <strong>videogames</strong>, and the
          Oxford Comma. Occasionally I{' '}
          <NavLink navIndex={3} href="/blog" title="Blog index">
            write
          </NavLink>{' '}
          about the aforementioned topics.
        </p>
        <p>
          This web project is{' '}
          <a
            href="https://github.com/dr-spaceman/brti.dev"
            title="Open source Github repo codebase for brti.dev"
          >
            🔎open source
          </a>{' '}
          and can be modified for your own personal site/porfolio/blog. It is
          the basis for a{' '}
          <a
            href="https://github.com/dr-spaceman/next.js-starter"
            title="Github repo: Next.js starter with typescript"
          >
            Next.js app starter and UI component library
          </a>
          , which is also open source.
        </p>
        <dl className={classes.social}>
          <dt>Find Me</dt>
          {/* <dd><a href="https://twitter.com/bahamatt64">@bahamatt64</a></dd> */}
          <dd>
            <a
              href="https://github.com/dr-spaceman"
              title="Collaborate with Matt Berti (@dr-spaceman) on Github"
            >
              Github
            </a>
          </dd>
          <dd>
            <a
              href="https://www.linkedin.com/in/mrberti/"
              title="Connect with Matt Berti on Linkedin"
            >
              Linkedin
            </a>
          </dd>
          <dd>
            <a
              href="https://steamcommunity.com/id/bahamatt/"
              title="Matt Berti's Steam profile and games library"
            >
              Steam
            </a>
          </dd>
          <dd>
            <a
              href="https://letterboxd.com/dr_spaceman/"
              title="Matt Berti's film reviews on Letterboxd"
            >
              Letterboxd
            </a>
          </dd>
          <dd>
            <a href={`mailto:${EMAIL}`} title="Email Matt Berti">
              {EMAIL}
            </a>
          </dd>
        </dl>
      </section>
    </Layout>
  )
}

export default HomePage
