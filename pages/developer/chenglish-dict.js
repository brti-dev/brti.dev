import Head from 'next/head'
import Layout from '../../components/Layout'
import Article from '../../components/Article'

function ChenglishDict() {
    return (
        <Layout>
            <Head>
                <title>Chenglish Dictionary - Project by Matt Berti</title>
            </Head>
            <Article
                title="Chenglish Dictionary"
                description="A Chinese-English dictionary and flash cards app for Chinese language learners."
                preface={(
                    <ul>
                        <li>In production at <a href="http://chenglishdict.com/">chenglishdict.com</a></li>
                        <li>Code at <a href="https://github.com/dr-spaceman/chenglish-dictionary/">Github</a></li>
                    </ul>
                )}
            >
                <p>As any learner of Chinese soon discovers, there are <i>a lot</i> of characters to learn. <a href="https://lingua.mtsu.edu/academic/dajun-4thtech.pdf">A 2004 study conducted by Jun Da</a>, a linguist at Middle Tennessee State University, found that there are an astounding 258,852,642 unique Chinese characters in use in classical and modern texts. Luckily for learners of the modern language, only about 8,000 are generally known by fluent speakers; Even better, Jun estimates only 3,500 characters are commonly used in modern texts like newspapers and novels.</p>
                <p>Still, the path to literacy in Chinese is a daunting task. As I myself discovered, learning 3,500 characters is time-consuming and nerve-wracking, especially after your weary eyes have come across that same character a hundred times and you still can&apos;t seem to get it saved in your memory bank.</p>
                <p>But the benefits of overcoming this hurdle and achieving bilingualism are huge, impacting life span and personal wealth. A landmark study published in the journal <i>Neurology</i> in 2013 found that <a href="https://n.neurology.org/content/81/22/1938">bilingualism delays the onset of dementia</a>. In 2014, The Economist used economic studies and the principle of compound interest to argue that <a href="https://www.economist.com/prospero/2014/03/11/johnson-what-is-a-foreign-language-worth">learning a second language can potentially add $128,000 to your retirement account</a>.</p>
                <p>As I tell my students, to effectively learn anything requires consistent practice (a little every day), and an efficient way to repetitively expose the brain to new information in a curtailing frequency (in other words, see something less frequently as that information is more concretely retained to memory). In my classroom we do this using <a href="http://lsc.cornell.edu/study-skills/cornell-note-taking-system/">Cornell Notes</a> and <a href="http://quizlet.com">Quizlet</a>. For my AP US History students, I created <a href="https://quizlet.com/mrberti/folders/ap-us-history?x=1xqt&i=s1e72">Quizlet study sets</a> for every learning module in the course. Student feedback consistently rates these flash card sets as the most helpful tool available for learning (almost always above my painstakingly-prepared lectures).</p>
                <p>So given what we know about effective learning, I was dismayed to discover that when I set out to learn those 3,500 Chinese characters, there wasn&apos;t much available for me to really learn efficiently. Thereafter I built this web app on top of <a href="https://cc-cedict.org/editor/editor.php">the data</a> that powers my favorite Chinese-English Dictionary, <a href="https://www.mdbg.net/chinese/dictionary">MDBG Chinese Dictionary</a>.</p>
                <p>I started by converting all 91,678 entries of the CC-CEDICT dictionary into MySQL data. I then built <a href="https://github.com/dr-spaceman/chenglish-dictionary/tree/master/src">three PHP class objects</a> to manage the data:</p>
                <ol>
                    <li>A <a href="https://github.com/dr-spaceman/chenglish-dictionary/blob/master/src/Zhongwen.php">Zhongwen class</a> to fetch the data</li>
                    <li>A <a href="https://github.com/dr-spaceman/chenglish-dictionary/blob/master/src/User.php">User class</a> to manage the activity of guests and registered members</li>
                    <li>A <a href="https://github.com/dr-spaceman/chenglish-dictionary/blob/master/src/Vocab.php">Vocab class</a> to manage and render personal vocabulary lists compililed by users</li>
                </ol>
                <p>The class objects are all covered by <a href="https://github.com/dr-spaceman/chenglish-dictionary/tree/master/tests">unit tests</a>, which were written in conjunction with the classes themselves.</p>
                <p>On the front end, I designed the app to be mobile-first since I mostly practice using my phone. The <a href="https://github.com/dr-spaceman/chenglish-dictionary/blob/master/public/assets/css/screen.css">CSS</a> is also designed to be fully responsive for users to use on any screen.</p>
            </Article>
        </Layout>
    )
}

export default ChenglishDict
