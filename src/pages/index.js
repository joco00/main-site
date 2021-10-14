import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page">
        <h1>Hi, my name is <span style={{ color: 'skyblue' }}>Jake OConnor</span><br></br>
          I code things
        </h1>


      </Layout>

    </>
  )
}

export default IndexPage