import { Timeline, TimelineItem } from 'components/Timeline'
import Layout from 'components/Layout'
import { Tooltip } from 'matterial'

function Teacher() {
  return (
    <Layout
      title="Teacher"
      description="Matt Berti is a certified teacher of Advanced Placement Histories and other AP subjects. He has experience preparing students for academic life abroad and is an expert on active learning techniques."
    >
      <div>
        <p>
          I am a certified teacher of Computer Sciences, Histories, Geography,
          and Academic Research. As teacher and counselor, I have prepared
          hundreds of students for academic life abroad, culminating in being
          appointed leader of the AP Computer Sciences program and AP Capstone
          research program, an intensive academic research course and one of the
          first such programs introduced in China. I'm an expert on computer
          program modeling, active learning techniques, and inquiry-based
          learning through primary source documents.
        </p>
        <h2>Experience</h2>
        <Timeline>
          <TimelineItem label="2021&mdash;2022">
            <h3>Barstow Kent School Ningbo</h3>
            <p>
              <strong>Instructor of AP Computer Sciences</strong>
            </p>
            <p>
              Introduced and led the AP Computer Sciences program to the school,
              with over 100 students enrolled and educated in modern computing
              concepts, data structures, networks, development and testing
              processes.
            </p>
            <p>
              Set standards for{' '}
              <abbr title="User eXperience, how a person interacts with a product, service, or system">
                UX
              </abbr>{' '}
              and code design based on{' '}
              <a
                href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                title="WCAG Web Content Accessibility Guidelines"
              >
                industry
              </a>{' '}
              <a
                href="https://google.github.io/styleguide/jsguide.html"
                title="Google JavaScript Style Guide"
              >
                standards
              </a>{' '}
              in order ro empower students to produce accessible, consistent,
              quality interfaces and code for the final AP Performance Task.
            </p>
            <p>
              Role required communicating complex technical concepts in a simple
              manner, mentoring students in building software, and preparing
              high schoolers for higher-education abroad in rigorous computer
              science disciplines.
            </p>
            <p>
              <b>Outcomes:</b> Students performed 18% above the national average
              in the combined AP Performance Task and AP Exam, and 25% above the
              global average; 15 students were enrolled in competitive
              university CS programs, including at Carnegie Mellon, ETH Zurich,
              University of Illinois, Sydney University, and Columbia
              University.
            </p>
          </TimelineItem>
          <TimelineItem label="2016&mdash;2021">
            <h3>
              <strong>
                Ningbo Foreign Language School Advanced Placement Center
              </strong>
            </h3>
            <p>
              <strong>
                Instructor of AP US History, AP European History, AP Human
                Geography, and AP Capstone/Seminar.
              </strong>
            </p>
            <p>
              Accredited from College Board in all subjects. My history students
              focused on inquiry-based learning and analysis of historical
              primary and secondary sources.
            </p>
            <p>
              Chosen by the school principal to launch the AP Capstone program
              to better equip our students with the independent research,
              collaborative teamwork, and communication skills valued by
              colleges. We are one of the first schools in mainland China to
              offer the AP Capstone program.
            </p>
            <p>
              <b>Outcomes:</b> Counceled, mentored, and instructed over 500
              students, preparing them for academic life abroad in competitive
              university programs in the US, UK, Australia, and elsewhere.
            </p>
          </TimelineItem>

          <TimelineItem label="2011&mdash;2016">
            <h3>Sino-Canadian International College at Guangxi University</h3>
            <p>
              <strong>
                Lecturer on British and American history and culture, ESL/TEFL
                teacher
              </strong>
            </p>
            <p>
              Instructed over 100 students in TEFL instruction, with the aim of
              performing a level 7.
            </p>
            <p>
              Chosen by school leadership to teach an elective course in
              Intercultural Communication. Developed lesson plans, chose all the
              class materials, wrote tests, and planned class activities around
              certain themes focused on historical and current events in
              Britain, America, Canada, and Australia. A major focus of the
              course was cross-culture studies between these English-speaking
              countries and China.
            </p>
            <p>
              <b>Outcomes:</b> By my final year, my students performed 5% above
              the school average, and 12% above the national average for TEFL
              scores.
            </p>
          </TimelineItem>

          <TimelineItem label="2010&mdash;2011">
            <h3>Hezhou College</h3>
            <p>ESL teacher, lecturer on Intercultural Communication.</p>
          </TimelineItem>

          <TimelineItem label="2008&mdash;2009">
            <h3>Xi’an Technological University</h3>
            <p>
              ESL teacher, lecturer on British and American history and culture.
            </p>
          </TimelineItem>
        </Timeline>
      </div>
    </Layout>
  )
}

export default Teacher
