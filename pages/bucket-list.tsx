import Layout from 'components/Layout'

function BucketList() {
  return (
    <Layout title="Bucket List">
      <section>
        <ul>
          <li>
            Visit Woodstock, IL, film location of <i>Groundhog Day</i>
          </li>
          <li>Visit the British Museum</li>
          <li>Earn HSK Level 4</li>
          <li>Learn Japanese</li>
          <li>Learn Italian</li>
          <li>Get an engineering job at a startup</li>
          <li>Donate $10,000 to cancer research</li>
          <li>{"Donate $10,000 to St. Jude Children's Research Hospital"}</li>
          <li>Travel along the same path taken by Lewis and Clark</li>
          <li>Hike John Muir Trail</li>
          <li>Become immortal</li>
          <li>Live in Japan for 6 months</li>
        </ul>
      </section>
    </Layout>
  )
}

export default BucketList
