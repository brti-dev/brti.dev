import Link from 'next/link'
import React from 'react'
import { FiDownload as DownloadIcon } from 'react-icons/fi'

import Layout from '../../components/Layout'
import Button from '../../components/Button'
import classes from './index.module.scss'

const WORKS = [
    {
        label: 'Single-Page App',
        slug: 'camval-produce',
        heading: 'Camval Produce',
        subheading: 'Project Lead',
        description: 'An e-commerce app for a small produce delivery buisiness in San Diego.',
        tags: ['Single Page App', 'Node and Express', 'MongoDB', 'GraphQL', 'React', 'Material UI', 'Webpack'],
    }, {
        label: 'Single-Page App',
        slug: 'mern-tracker',
        heading: 'MERN Issue Tracker',
        description: 'A single-page app built to learn how to make single-page apps',
        tags: ['Single Page App', 'Node and Express', 'MongoDB', 'GraphQL', 'React', 'Material UI', 'Webpack'],
    }, {
        heading: 'AXRN Animal Crossing Right Now',
        label: 'Web App',
        slug: 'axrn',
        description: <>A web app for players of the Nintendo Switch game <i>Animal Crossing: New Horizons</i> to inform them what critters are available right now.</>,
        tags: ['Mobile-first', 'Responsive design', 'Web Scraping', 'Python/Flask', 'CSS Grid'],
        image: (
            <picture>
                <source srcSet="img/axrn.webp" type="image/webp" />
                <img src="img/axrn.png" alt="AXRN Animal Crossing Right Now screenshots" />
            </picture>
        ),
    }, {
        label: 'Web App',
        slug: 'chenglish-dict',
        heading: 'Chenglish Dictionary',
        description: 'A Chinese-English dictionary and flash cards app for Chinese language learners.',
        tags: ['Test-Driven Development', 'Mobile-first', 'PHP', 'MySQL', 'Javascript and jQuery'],
        image: (
            <picture>
                <source srcSet="img/chenglishdict_work.webp" type="image/webp" />
                <img src="img/chenglishdict_work.png" alt="Chenglish Dictionary screenshots" />
            </picture>
        ),
    }, {
        label: 'Web Portal',
        slug: 'videogamin',
        heading: 'Videogam.in',
        description: 'An app to show off your videogame collection.',
        tags: ['Custom CMS', 'PHP', 'MySQL', 'jQuery', 'Photoshop'],
        image: (
            <picture>
                <source srcSet="img/videogamin_shel_sm.webp" type="image/webp" />
                <img src="img/videogamin_shel_sm.png" alt="Videogam.in game shelf mock" />
            </picture>
        ),
    }, {
        label: 'Web Portal',
        slug: 'square-haven',
        heading: 'Square Haven',
        description: 'A community for fans of the videogame publisher Square Enix.',
        tags: ['Community-Building', 'PHP', 'MySQL'],
        image: (
            <picture>
                <source srcSet="img/squarehaven_gamepage_sm.webp" type="image/webp" />
                <img src="img/squarehaven_gamepage_sm.png" alt="Square Haven game page mock" />
            </picture>
        ),
    },
];

function Work() {
    return (
        <Layout>
            <section>
                <h2>Capabilities</h2>
                <p>
                    I am versatile, flexible, and see myself as a lifelong learner.{' '}
                    I enjoy building delightful and accessible user interfaces that are simple and clean.{' '}
                    I love working with data and have designed databases that scale to thousands of users.
                </p>
                <p>
                    <Button
                        to="https://www.dropbox.com/s/5z4xkdnf27tdimb/MathewBerti_resume_webdeveloper.pdf"
                        variant="outlined"
                    >
                        <DownloadIcon />
                        Download Résumé
                    </Button>
                </p>
            </section>
            <section className={classes.mywork}>
                <h2>My Work</h2>
                <div className={classes.workItems}>
                    {WORKS.map(work => (
                        <div className={classes.workItem} key={work.slug}>
                            <Link href={`/developer/${work.slug}`}>
                                <a title={work.heading}>
                                    <small className="text-label">{work.label}</small>
                                    <h3>{work.heading}</h3>
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
