import Layout from 'components/Layout'
import Article from 'components/Article'
import { getNextArticle } from './index'

function Axrn() {
  return (
    <Layout title="Web App Project: AXRN Animal Crossing Right Now">
      <Article
        title="AXRN Animal Crossing Right Now"
        description={
          <>
            A web app for players of the Nintendo Switch game{' '}
            <i>Animal Crossing: New Horizons</i> to inform them what critters
            are available right now.
          </>
        }
        preface={
          <ul>
            <li>
              In production at{' '}
              <a href="https://axnh.herokuapp.com/">axnh.herokuapp.com</a>
            </li>
            <li>
              Code at <a href="https://github.com/dr-spaceman/axnh">Github</a>
            </li>
          </ul>
        }
        nextArticle={getNextArticle('axrn')}
      >
        <p>
          In what can only be described as exceptionally timely, Nintendo
          released the latest installment of the{' '}
          <a href="https://nookipedia.com/wiki/Animal_Crossing_(series)">
            Animal Crossing videogame series
          </a>{' '}
          right at the start of the 2020 Coronavirus lockdown. In the newest
          installment,{' '}
          <i>
            <a href="https://animal-crossing.com/new-horizons/">New Horizons</a>
          </i>
          , players inhabit a tropical island full of endemic wildlife,
          specifically bugs, fish, and anthropomorphic animal inhabitants. With
          the latter you build relationships (or rivalries) with, while the bugs
          and fish can be caught and put on display in a delightfully
          atmospheric little town museum.
        </p>
        <p>
          These critters, however, are only available at certain times of the
          day or months of the year. I had the idea of a web app that can notify
          the player which critters are available at the time of playing to help
          them build up their museums.
        </p>
        <p>
          I had also been wanting to learn Python for some time now, especially
          after{' '}
          <a href="https://insights.stackoverflow.com/survey/2019">
            Stack Overflow&apos;s 2019 Developer Survey
          </a>{' '}
          showed Python as the{' '}
          <a href="https://insights.stackoverflow.com/survey/2019#most-popular-technologies">
            fastest growing tech
          </a>{' '}
          and among the{' '}
          <a href="https://insights.stackoverflow.com/survey/2019#most-loved-dreaded-and-wanted">
            most loved and wanted
          </a>
          . I took the lockdown as an opportunity to dive in. I learned the
          basics from the excellent{' '}
          <a href="https://docs.python.org/3/tutorial/index.html">
            Python Tutorial
          </a>
          , then set out researching a web framework. I worked with{' '}
          <a href="https://palletsprojects.com/p/flask/">Django</a> at first and
          loved all the additional features and packages that came with the
          software. However, I eventually went with{' '}
          <a href="https://palletsprojects.com/p/flask/">Flask</a> because its
          small footprint was perfect for a simple app like mine.
        </p>
      </Article>
    </Layout>
  )
}

export default Axrn
