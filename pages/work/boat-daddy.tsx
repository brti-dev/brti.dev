import { Article } from 'matterial'

import Layout from 'components/Layout'
import { getNextArticle } from '.'

function BoatDaddy() {
  return (
    <Layout title="Web App Project: Boat Daddy">
      <Article
        title="Boat Daddy"
        description="The Uber of boats. Hail your boat daddy now."
        preface={
          <ul>
            <li>
              In development at{' '}
              <a href="https://boatdaddy.app/">boatdaddy.app</a>
            </li>
            <li>
              Open Source Code at{' '}
              <a href="https://github.com/dr-spaceman/boatdaddy">Github</a>
            </li>
          </ul>
        }
        nextArticle={getNextArticle('boat-daddy')}
      >
        <p>
          This app is a prototype of a product that combines boat-hailing,
          making new friends, and summer adventures.
        </p>
        <p>
          The purpose of the app was to learn and use some of the tech an
          enterprise-level startup would use. I followed{' '}
          <a href="https://courses.leighhalliday.com/">
            Leigh Halliday's Next Level Next.js course
          </a>{' '}
          as a basis for the app, with some notable changes. The app leverages
          several libraries and frameworks that are new to me and unnecessary
          for this scale of the app, some of which I stuck with and others I
          abandoned throughout the course of development. For example, while
          Prisma ORM is overkill, I stuck with it. However I have TypeGraphQL
          the axe in favor of my own type definitions and configurations.
        </p>

        <h2>Custom Authentication: Challenges and Solutions</h2>
        <p>
          Leigh uses Firebase for auth providers, but I used AWS Amplify because
          I have been wanting to give it a try. After setting up an auth
          interface several times using their UI console, pushing, pulling, etc
          etc, I had the auth working but could not imagine going through the
          same process again on my next app.
        </p>
        <p>
          <a href="https://next-auth.js.org/">NextAuth.js</a> was much more
          accessible and plugged in nicely with my{' '}
          <a href="https://github.com/dr-spaceman/next.js-starter">
            Next.js starter setup
          </a>
          .
        </p>
        <p>
          Ultimately I designed my own authorization process that could process
          a login feature neither Amplify nor NextAuth could do: A mock log-in
          without having any credentials.
        </p>
        <p>
          I used JWT with credentials attached as a bearer token to all API
          calls to authorize the user. In addition, there are third-party auth
          providers like Google, and a password sign in.
        </p>
      </Article>
    </Layout>
  )
}

export default BoatDaddy
