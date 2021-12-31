import Layout from 'components/Layout'
import Article from 'components/Article'
import { getNextArticle } from './index'

function Camval() {
  return (
    <Layout title="Single Page App Project: Camval Produce">
      <Article
        title="Camval Produce"
        description="A responsive e-commerce app for a produce delivery business in San Diego."
        preface={
          <ul>
            <li>
              In development at{' '}
              <a href="https://camval.customerdirect.net">
                camval.customerdirect.net
              </a>
            </li>
          </ul>
        }
        nextArticle={getNextArticle('camval-produce')}
      >
        <p>
          I was excited to receive a contract to build this app because its
          scale was perfect for a single-page web app, which I never built
          before. It was a chance to try something new. I prepared by diving
          into the{' '}
          <abbr title="MongoDB, Express.js, React, Node.js">MERN stack</abbr>{' '}
          and built <a href="./mern-tracker">Mern Issue Tracker</a>, then used
          the technical understanding and boilerplate to develop this e-commerce
          app. I separated backend and frontend services into two servers to
          facilitate testing and allow the app to scale more easily later.
        </p>

        <h2>Back End</h2>
        <p>
          Node, Express, and Apollo Server power an API, which fetches data from
          a MongoDB database, made available at a GraphQL endpoint.
        </p>

        <h2>Front End</h2>
        <p>
          The UI is React with Material UI components, bundled with a custom
          Webpack config.
        </p>

        <h3>Custom GraphQL Client</h3>
        <p>
          Initializing the frontend was easy enough with my previously built
          boilerplate. I decided not to use Apollo's GraphQL client to save on
          build size and learn how to query GraphQL on my own. Most of the work
          is done with two React hooks, <code>useQuery</code> and{' '}
          <code>useMutation</code>, each of which utilize Javascript's{' '}
          <code>fetch</code> API while managing the state of the fetch. The
          client handles errors based on the following maxims{' '}
          <a
            href="https://itnext.io/the-definitive-guide-to-handling-graphql-errors-e0c58b52b5e1"
            title="The Definitive Guide to Handling GraphQL Errors"
          >
            described by Matt Krick
          </a>
          :
        </p>
        <ul>
          <li>
            If GraphQL gives you a result with data, even if that result
            contains errors, it is not an error.
          </li>
          <li>
            If the viewer should see the error, include the error as a field in
            the response payload
          </li>
        </ul>

        <h3>React Hooks</h3>
        <p>
          I set a goal to only used React Hooks to build the UI, leaving out
          class components completely. By the end of this project, I felt
          comfortable using hooks and also felt the code was cleaner and more
          elegant.
        </p>

        <h2>Deployment</h2>
        <p>
          My initial enthusiasm for this project was seriously checked when it
          came time to deploy the backend to the cloud. The split-serviced app
          was built to be deployed to Heroku, but the cost of hosting two
          services on Heroku secured by SSL encryption exceeded the client's
          budget (Heroku supplies SSL certificates only for apps that use at
          least one{' '}
          <a href="https://devcenter.heroku.com/articles/ssl">paid dyno</a>
          ). The frontend was easily dispatched to{' '}
          <a href="https://aws.amazon.com/amplify/">AWS Amplify</a>, where the
          Github repo is pulled and a webpack build can be done. However, the
          custom backend could not be so easily deployed because the various
          microservices built into it.
        </p>
        <p>
          My solution was to keep the backend only on Heroku, secure it with SSL
          encryption, and use JSON web tokens instead of cookies to make secure
          calls to between the UI and API and authenticate user sessions. The
          end result is approximately 30% cheaper while still maintaining the
          separate services for easy testing and scaling later.
        </p>

        <h2>Future Plans</h2>
        <p>
          Were I to have more time to improve the app, I would research
          Progressive Web App features like installation and push notifications.
          Because most customers are regular, an install feature would allow
          quick access to regular orders, while managers could receive push
          notifications at the point of purchase, or alert a customer upon the
          change of an order status.
        </p>
      </Article>
    </Layout>
  )
}

export default Camval
