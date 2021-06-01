import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Article from '@/components/Article'

function MernTracker() {
    return (
        <Layout title="Single Page App Project: MERN Issue Tracker">
            <Article
                title="MERN Issue Tracker"
                description="An app to track issues on an app, built for learning purposes."
                preface={
                    <ul>
                        <li>
                            Code on{' '}
                            <a href="https://github.com/dr-spaceman/mern-issue-tracker">
                                Github
                            </a>
                        </li>
                    </ul>
                }
                nextArticle={
                    <Link href="/developer/axrn">
                        AXRN Animal Crossing Right Now
                    </Link>
                }
            >
                <p>
                    I previously started to learn React and wanted to enhance my
                    understanding of it while learning other modern frameworks.
                    I used Subramanian&#39;s{' '}
                    <a href="https://www.apress.com/in/book/9781484243909">
                        &quot;Pro MERN Stack&quot;
                    </a>{' '}
                    as a primary reference, but also consulted other sources to
                    make the modifications I desired. Essential sources include{' '}
                    <a href="https://reactjs.org/docs/hooks-intro.html">
                        React Hooks documentation
                    </a>
                    ,{' '}
                    <a href="https://reactrouter.com/web/guides/quick-start">
                        React Router documentation
                    </a>
                    ,{' '}
                    <a href="https://material-ui.com/getting-started/usage/">
                        Material UI documentation
                    </a>
                    ,{' '}
                    <a href="https://docs.mongodb.com/">
                        MongoDB documentation
                    </a>
                    , and, of course, Stack Overflow.
                </p>

                <h2>Modifications and Considerations</h2>
                <p>
                    When building this app I chose to make several architectural
                    changes from Subramanian&#39;s original. I&#39;ve documented
                    the major modifications below.
                </p>

                <h3>Use of React Hooks instead of classes</h3>
                <p>
                    Subramanian&#39;s code utilizes{' '}
                    <a href="https://reactjs.org/docs/react-component.html">
                        React component classes
                    </a>
                    . When building my own app, I refactored all classes into
                    more functional{' '}
                    <a href="https://reactjs.org/docs/hooks-intro.html">
                        React Hooks
                    </a>
                    . I think the final result is more elegant and concise.
                </p>
                <p>
                    In order to refactor the classes, I found I had to use these
                    hooks:
                </p>
                <ul>
                    <li>
                        <code>useState</code> and <code>useReducer</code> manage
                        state previously handled by <code>this.state</code>.
                        Reducer was especially useful for complex state
                        management, such as the{' '}
                        <a href="https://github.com/dr-spaceman/mern-issue-tracker/ui/src/IssueEdit.jsx">
                            IssueEdit
                        </a>{' '}
                        component that must fetch data, load data into form,
                        track changes on form, and submit changes to API.
                    </li>
                    <li>
                        <code>useEffect</code> manages functions that need to
                        opt into the component lifecycle. This was necessary
                        where Subramanian used the class methods{' '}
                        <code>componentDidMount</code>,{' '}
                        <code>componentDidUpdate</code>, and{' '}
                        <code>componentWillUnmount</code>. For the{' '}
                        <a href="https://github.com/dr-spaceman/mern-issue-tracker/ui/src/IssueTable.jsx">
                            IssueTable
                        </a>{' '}
                        component, I found I needed to combine the side effect
                        hook with a memoized callback (<code>useCallback</code>)
                        to filter the table when the router parameters changed.
                    </li>
                    <li>
                        <code>useRef</code> allowed accessing child components
                        in a form imperatively, such as in the{' '}
                        <a href="https://github.com/dr-spaceman/mern-issue-tracker/ui/src/IssueAdd.jsx">
                            IssueAdd
                        </a>{' '}
                        component where a form was referenced in order to access
                        child input values.
                    </li>
                </ul>

                <h3>Use of Material UI instead of Bootstrap</h3>
                <p>
                    Subramanian made the case for Bootstrap over Meterial UI in
                    his book:
                </p>
                <blockquote>
                    <p>
                        Material UI has an interesting CSS-in-JS and
                        inline-style approach of styling that fits well into
                        React’s philosophy of isolating everything needed by a
                        component, with the component itself. But this framework
                        is much less popular and seems to be a work in progress.
                        And, perhaps the inline-style approach is too drastic a
                        deviation from convention. React-Bootstrap is a safe
                        alternative that is built on top of the very popular
                        Bootstrap and fits our needs (except for the lack of a
                        date picker).
                    </p>
                </blockquote>
                <p>
                    Despite this sound argument, I went with Material UI because
                    of curiosity and style preference. Having some experience
                    with Bootstrap previously and keeping consistent with the
                    goal of learning something new, I chose an alternate path.
                    As I implement Material UI in this app, I want to test how
                    easy it is to implement styled components into my React
                    components, and how easy it is to implement my own custom
                    styles to prevent the app design from looking bland and
                    uniform.
                </p>
            </Article>
        </Layout>
    )
}

export default MernTracker
