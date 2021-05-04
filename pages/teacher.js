import Layout from '../components/Layout'
import classes from '../styles/teacher.module.scss'

function Teacher() {
    return (
        <Layout title="Teacher">
            <div className={classes.root}>
                <p>As a teacher, my aim has been to use inquiry and active learning techniques to get students more directly involved in the learning process in order to develop vital skills, such as communication, problem-solving, consensus-building, and critical thinking.</p>
                <h2>Experience</h2>
                <dl>
                    <dt>Ningbo Foreign Language School Advanced Placement Center</dt>
                    <dd className="date">2016&mdash;2021</dd>
                    <dd>Instructor of AP US History, AP European History, AP Human Geography, and AP Capstone/Seminar.</dd>
                    <dd>Accredited from College Board in all subjects. My history students focused on inquiry-based learning and analysis of historical primary and secondary sources. In 2018, I was chosen by the school principal to launch the AP Capstone program to better equip our students with the independent research, collaborative teamwork, and communication skills valued by colleges. We are one of the first schools in mainland China to offer the AP Capstone program.</dd>
                    
                    <dt>Sino-Canadian International College at Guangxi University</dt>
                    <dd className="date">2011&mdash;2016</dd>
                    <dd>ESL teacher, lecturer on British and American history and culture.</dd>
                    <dd>I began as an ESL teacher in reading and writing. In my second year I was chosen by school leadership to teach an elective course in Intercultural Communication. Developed lesson plans, chose all the class materials, wrote tests, and planned class activities around certain themes focused on historical and current events in Britain, America, Canada, and Australia. A major focus of the course was cross-culture studies between these English-speaking countries and China.</dd>
                    
                    <dt>Hezhou College</dt>
                    <dd className="date">2010&mdash;2011</dd>
                    <dd>ESL teacher, lecturer on Intercultural Communication.</dd>
                    
                    <dt>Xi’an Technological University</dt>
                    <dd className="date">2008&mdash;2009</dd>
                    <dd>ESL teacher, lecturer on British and American history and culture.</dd>
                </dl>
            </div>
        </Layout>
    )
}

export default Teacher
