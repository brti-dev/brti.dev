import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Article from '@/components/Article'

function SquareHaven() {
    return (
        <Layout title="Web Community Project: Square Haven">
            <Article
                title="Square Haven"
                description="A community for fans of the videogame publisher Square Enix"
                preface={
                    <ul>
                        <li>
                            Preserved at{' '}
                            <a href="http://squarehaven.com/">
                                squarehaven.com
                            </a>
                        </li>
                    </ul>
                }
                nextArticle={
                    <Link href="/developer/camval-produce">Camval Produce</Link>
                }
            >
                <p>
                    I cut my digital teeth on Square Haven. I learned digital
                    technologies to express my interest in the videogames of the
                    great RPG publisher, Squaresoft, creator of the{' '}
                    <i>Final Fantasy</i> series. It was my goal to create an
                    online community for friends with the same passion.
                </p>

                <h2>Development</h2>
                <p>
                    A database of hundreds of games is maintained using PHP and
                    MySQL. Each game has a hub page linking to relates modules
                    -- news articles, videogame developers and creators, game
                    guides, reader reviews, and more.
                </p>
                <p>
                    One of the main features is a series of comprehensive game
                    guides written in HTML or PHP backed by data. These features
                    bring in the most traffic from search engines, often from
                    users searching for hints, items, or quests as they play the
                    game. Some of our top entry points on Google are:
                </p>
                <ul>
                    <li>
                        &quot;hypello potion ffx&quot;:{' '}
                        <a href="http://squarehaven.com/games/PlayStation-2/Final-Fantasy-X/guide/item/?Hypello%20Potion">
                            Square Haven Guides || Final Fantasy X items
                        </a>
                    </li>
                    <li>
                        &quot;secret of mana armor&quot;:{' '}
                        <a href="http://squarehaven.com/games/Super-NES/Secret-of-Mana/guide/equipment/armor.php">
                            Secret of Mana Guide - Armor - Square Haven
                        </a>
                    </li>
                    <li>
                        &quot;ff12 bazaar recipes&quot;:{' '}
                        <a href="http://squarehaven.com/games/PlayStation-2/Final-Fantasy-XII/guide/bazaar.php">
                            Final Fantasy XII Bazaar Goods List & Database --
                            Square Haven
                        </a>
                    </li>
                </ul>

                <img
                    src="/img/squarehaven_gamepage.png"
                    alt="The Final Fantasy Tactics hub at Square Haven"
                />

                <p>
                    In <b>February 2020</b> I updated the backend PHP code to
                    reflect the{' '}
                    <a href="https://wiki.php.net/rfc/mysql_deprecation">
                        deprecation
                    </a>{' '}
                    of the ancient <code>mysql_...</code> functions. Because the
                    functions were so extensively used throughout the code, I
                    opted to replace it with <code>mysqli_...</code> functions.
                    At the same time, I updated the code to better secure the
                    backend from SQL injection by using prepared statements and{' '}
                    <code>mysqli_real_escape_string</code>.
                </p>
            </Article>
        </Layout>
    )
}

export default SquareHaven
