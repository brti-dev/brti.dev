import Head from 'next/head'
import Layout from '../../components/Layout'
import Article from '../../components/Article'

function SquareHaven() {
    return (
        <Layout>
            <Head>
                <title>Videogam.in - Project by Matt Berti</title>
            </Head>
            <Article
                title="Videogam.in"
                description="An app to show off your videogame collection."
                preface={(
                    <ul>
                        <li>In development at <a href="http://videogamin.squarehaven.com/">videogamin.squarehaven.com</a></li>
                    </ul>
                )}
            >
                <h2>Design</h2>
                <p>This app was designed with the general goal of being a place for gamers to read and contribute information about their favorite games. Because the app was highly dependent on user-generated content, the interfaces had to be easy to use and understand. The result of the user's contribution must be immediate and visually appealing, so I configured a CMS that was open to all registered users but was manageable by administrators.</p>

                <h4>Development</h4>
                <p>Built using JavaScript and jQuery for interfaces and asynchronous requests, on top of PHP and MySQL.</p>

                <img src="/img/videogamin_character_cropped.jpg" alt="A videogame character page" />
                <img src="/img/videogamin_editpage.png" alt="Edit a Videogam.in page using CMS" />

                <p>One of the primary features is the videogame shelf for users to manage and show off their collection of games. Because the purpose is to show off swag, the shelf had to be elegant to maximize boastfulness. I used Photoshop to make custom jewel case overlays -- transparent PNGs -- for different platforms.</p>

                <img src="/img/videogamin_shelf.png" alt="Game collection shelf at Videogam.in" />

                <p>The landing page to a user profile shows a stream of activity organized chronologically. There are also various badges users can earn. These are meant to stimulate activity and contributions.</p>

                <img src="/img/videogamin_userstream.png" alt="A user activity stream on Videogam.in" />
                <img src="/img/videogamin_badges.png" alt="Badges on Videogam.in to spark user contributions" />

            </Article>
        </Layout>
    )
}

export default SquareHaven
