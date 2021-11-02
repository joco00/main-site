import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page">
        <div>
          <div style={{ height: '100vh' }}>
            <h1>Hi, my name is <span style={{ color: 'skyblue' }}>Jake OConnor</span><br></br>
              I code things
            </h1>
          </div>
          <div style={{ height: '100vh' }}>
            <h1>About Me</h1>
            <p> probably a photo of me traveling at somepoint :)</p>
          </div>
        </div>

      </Layout>

    </>
  )
}

export default IndexPage