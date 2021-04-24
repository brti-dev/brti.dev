import Link from 'next/link'

import Layout from '../../components/Layout'
import classes from './index.module.scss'

const WORKS = [
    {
        label: 'Web App',
        slug: 'camval-produce',
        heading: 'Camval Produce',
        subheading: 'Project Lead',
        description: 'An e-commerce app for a small produce delivery buisiness in San Diego.',
        tags: ['Single Page App', 'Node and Express', 'MongoDB', 'GraphQL', 'React', 'Material UI', 'Webpack'],
    }, {
        label: 'Web App',
        slug: 'mern-tracker',
        heading: 'MERN Issue Tracker',
        description: 'A single-page app built to learn how to make single-page apps',
        tags: ['Single Page App', 'Node and Express', 'MongoDB', 'GraphQL', 'React', 'Material UI', 'Webpack'],
    }, {
        label: 'Web App',
        slug: 'axrn',
        heading: 'AXRN Animal Crossing Right Now',
        description: <>A web app for players of the Nintendo Switch game <i>Animal Crossing: New Horizons</i> to inform them what critters are available right now.</>,
        tags: ['Mobile-first', 'Responsive design', 'Web Scraping', 'Python/Flask', 'CSS Grid'],
    }, {
        label: 'Web App',
        slug: 'chenglish-dict',
        heading: 'Chenglish Dictionary',
        description: 'A Chinese-English dictionary and flash cards app for Chinese language learners.',
        tags: ['Test-Driven Development', 'Mobile-first', 'PHP', 'MySQL', 'Javascript and jQuery'],
    }, {
        label: 'Web Portal',
        slug: 'videogamin',
        heading: 'Videogam.in',
        description: 'An app to show off your videogame collection.',
        tags: ['Custom CMS', 'PHP', 'MySQL', 'jQuery', 'Photoshop'],
    }, {
        label: 'Web Portal',
        slug: 'square-haven',
        heading: 'Square Haven',
        description: 'A community for fans of the videogame publisher Square Enix.',
        tags: ['Community-Building', 'PHP', 'MySQL'],
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
                    I love working with data and have designed databases that scale to thousands of users.{' '}
                    I believe the internet is the greatest tool in our arsenal for leraning, but we have a resposibility to ensure credibility.
                </p>
            </section>
            <section className={classes.mywork}>
                <h2>My Work</h2>
                <div className={classes.workItems}>
                    {WORKS.map(work => (
                        <div className={classes.workItem} key={work.slug}>
                            <Link href={`/developer/${work.slug}`}>
                                <a title={work.heading}>
                                    <h3>{work.heading}</h3>
                                    {work.subheading && <strong>{work.subheading}</strong>}
                                    {work.description && <p>{work.description}</p>}
                                    <ul className={classes.tags}>
                                        {work.tags.map(tag => <li key={tag}>{tag}</li>)}
                                    </ul>
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
