import { FiDownload as DownloadIcon } from 'react-icons/fi'

import { Timeline, TimelineItem } from '../components/Timeline'
import Layout from '../components/Layout'

function Teacher() {
    return (
        <Layout title="Teacher">
            <div>
                <p>
                    I am a certified teacher of Advanced Placement Histories,
                    Human Geography, and Capstone. As teacher and counselor, I
                    have prepared hundreds of students for academic life abroad,
                    culminating in being appointed leader to launch the AP
                    Capstone research program in our school, one of the first
                    such programs introduced in China. I'm an expert on active
                    learning techniques and inquiry-based learning through
                    primary source documents.
                </p>
                <h2>Experience</h2>
                <Timeline>
                    <TimelineItem label="2016&mdash;2021">
                        <h3>
                            Ningbo Foreign Language School Advanced Placement
                            Center
                        </h3>
                        <p>
                            Instructor of AP US History, AP European History, AP
                            Human Geography, and AP Capstone/Seminar.
                        </p>
                        <p>
                            Accredited from College Board in all subjects. My
                            history students focused on inquiry-based learning
                            and analysis of historical primary and secondary
                            sources. In 2018, I was chosen by the school
                            principal to launch the AP Capstone program to
                            better equip our students with the independent
                            research, collaborative teamwork, and communication
                            skills valued by colleges. We are one of the first
                            schools in mainland China to offer the AP Capstone
                            program.
                        </p>
                    </TimelineItem>

                    <TimelineItem label="2011&mdash;2016">
                        <h3>
                            Sino-Canadian International College at Guangxi
                            University
                        </h3>
                        <p>
                            ESL teacher, lecturer on British and American
                            history and culture.
                        </p>
                        <p>
                            I began as an ESL teacher in reading and writing. In
                            my second year I was chosen by school leadership to
                            teach an elective course in Intercultural
                            Communication. Developed lesson plans, chose all the
                            class materials, wrote tests, and planned class
                            activities around certain themes focused on
                            historical and current events in Britain, America,
                            Canada, and Australia. A major focus of the course
                            was cross-culture studies between these
                            English-speaking countries and China.
                        </p>
                    </TimelineItem>

                    <TimelineItem label="2010&mdash;2011">
                        <h3>Hezhou College</h3>
                        <p>
                            ESL teacher, lecturer on Intercultural
                            Communication.
                        </p>
                    </TimelineItem>

                    <TimelineItem label="2008&mdash;2009">
                        <h3>Xi’an Technological University</h3>
                        <p>
                            ESL teacher, lecturer on British and American
                            history and culture.
                        </p>
                    </TimelineItem>
                </Timeline>
            </div>
        </Layout>
    )
}

export default Teacher
