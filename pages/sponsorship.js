import React from 'react'
import * as ui from '../ui'
import Layout from '../components/Layout'


const About = () => (
  <Layout
    title="Sponsorship"
  >
    <ui.ArticleContainer>
      <h1>Become a Sponsor of the Weekly</h1>
      <p>
        Do you have a product, ebook, or SaaS you want to promote to 460+ devs?
        Pass me an email at <a href="mailto:info@wweb.dev">info@wweb.dev</a> if you are interested.
      </p>

      <h2>What does it include?</h2>
      <ul style={{ listStyle: 'none' }}>
        <li>📧 A spot in the E-Mail newsletter with <i>460+</i> subscribers, An opening rate of <b>40-45%</b>, and <b>30-45%</b> clicks per unique open</li>
        <li>🖥 A link on <a href="https://dev.to/vincenius/weekly-web-development-resources-120-4clh" target="_blank" rel="noopener noreferrer">Dev.to</a> with around <b>250-400</b> clicks in the first week</li>
        <li>🌐 A permanent link on the <a href="https://wweb.dev/weekly/120/" target="_blank" rel="noopener noreferrer">wweb.dev weekly</a> with usually around <b>50-100</b> clicks in the first week and more over time</li>
        <li>🐤 A shoutout on the weekly announcement on <a href="https://twitter.com/wweb_dev/status/1582606878630379521" target="_blank" rel="noopener noreferrer">Twitter</a> to <b>520+</b> followers</li>
      </ul>

      <h2>How much is it?</h2>
      <p>
        This whole package costs <b>40€</b> for one weekly or <b>120€</b> for four weeklies.
      </p>
      <p>
        If you have any questions feel free to reach out at <a href="mailto:info@wweb.dev">info@wweb.dev</a> or <a href="https://twitter.com/wweb_dev" target="_blank" rel="noopener noreferrer">Twitter</a>.
      </p>
    </ui.ArticleContainer>
  </Layout>
)

export default About
