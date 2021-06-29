import Layout from '@/components/Layout'
import Article from '@/components/Article'
import { getNextArticle } from './index'

function BrandenPaillant() {
  return (
    <Layout title="Shopify App Project: Branden Paillant">
      <Article
        title="Branden Paillant"
        description="An online presence and e-commerce print shop for a photographer of urban industrial landscapes."
        preface={
          <ul>
            <li>
              In production at{' '}
              <a href="https://brandenpaillant.com">brandenpaillant.com</a>
            </li>
          </ul>
        }
        nextArticle={getNextArticle('branden-paillant')}
      >
        <h2>Challenges</h2>
        <ul>
          <li>
            The client, a gifted up-and-coming photographer of urban landscapes,
            had little online presence outside of Instagram.
          </li>
          <li>
            An online store to sell prints needed to be built from scratch or
            use commercial APIs.
          </li>
          <li>
            The client's work is scheduled to be featured in Hartsfield-Jackson
            Atlanta International Airport. Therefore a responsively-designed
            photo gallery would be needed for both through-travelers that would
            look him up on their mobile phones as well as other visitors that
            would be using larger screens to view high resolution versions of
            his works.
          </li>
          <li>
            An photo gallery should exhibit the artist's work elegantly without
            coming off as overly commercial; The design and functionality should
            not detract from the work, preserving and highlighting the artist's
            trademark{' '}
            <a href="https://stevemiddlehurstcontextandnarrative.wordpress.com/2015/02/24/the-deadpan-aesthetic/">
              deadpan aesthetic
            </a>
            .
          </li>
        </ul>

        <h2>Impact</h2>

        <p>
          <strong>
            Helped the client save over $500 a year, eliminating a large cost
            hurdle to starting his business and promoting his works.
          </strong>
          <ul>
            <li>
              Set up an account for the client as a{' '}
              <a href="https://www.shopify.com/partners">Shopify Partner</a>,
              then leveraged Shopify’s GraphQL API to build a website.
            </li>
            <li>
              This allowed the client to eliminate Shopify's online store
              altogether and use the cheapest pricing tier. The client paid less
              than 1/3 of the service fees had he used Shopify's full-featured
              service.
            </li>
            <li>
              Utilizing Shopify's CDN for static assets allowed the client to
              eliminate any additional costs besides the minimal hosting of the
              source code.
            </li>
          </ul>
        </p>
        <p>
          <strong>
            Developed and deployed a fast, performant, static photo gallery.
          </strong>
          <ul>
            <li>
              Deployed Next.js static export builds to provide fast user
              experience.
            </li>
            <li>
              Set up continuous integration processes using webhooks, pushing
              deployments automatically upon the client’s modifications to the
              Shopify backend. This removed the need for me to push updates
              manually when changes are made to the product database and
              preserved the fast, ultralight speed of a static website.
            </li>
          </ul>
        </p>
        <p>
          Designed a fully responsive, minimalist photo gallery that can be
          accessed on any screen size.
          <ul>
            <li>
              I felt the author's trademark aesthetic (described as "deadpan," a
              cool, detached, and unemotional presentation of a subject) could
              best be presented in a minimalist design absent of lines, buttons,
              graphics, and other common baubles.
            </li>
            <li>
              Achieved{' '}
              <a href="https://googlechrome.github.io/lighthouse/viewer/?gist=c5a254e96ea100d73378fc97cf7a5502">
                Accessibility score of 100
              </a>{' '}
              on Lighthouse
            </li>
          </ul>
          <picture>
            <source
              srcSet="/img/branden-paillant_design.webp"
              type="image/webp"
            />
            <img
              src="/img/branden-paillant_design.png"
              alt="Design choices on brandenpaillant.com"
            />
          </picture>
        </p>
      </Article>
    </Layout>
  )
}

export default BrandenPaillant
