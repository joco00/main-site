import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, } from 'gatsby'
import { links } from './index.module.css'


const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page">
        <div>
          <div style={{ height: '100vh' }}>
            <h1>Hi, my name is <span style={{ color: 'skyblue' }}>Jake OConnor</span><br></br>
              I think about random things <br></br>
              and code sometimes<br></br>


            </h1>
          </div>
          <div style={{ height: '100vh' }}>
            <h1 style={{ color: 'skyblue' }}>About Me</h1>
            <p> I grew up on the west side of Cleveland <br></br>
              I studied Computer Science at The Ohio State University <br></br>
              I live in New York City<br></br>
              I am Software Integration Engineer @ <a className={links} href="https://broadwaytechnology.com/" > Broadway Technology </a>  <br></br>

              <br></br>
              My favorite activities are golf, rock climbing, playing boardgames and hiking <br></br>
              I am a foodie and I am a vegetarian. These conflict eachother at times <br></br>
              {/* I am deeply interested in computer science, math and philosphy <br></br> */}
              Here is my <Link to={"/blog/movies"} className={links}> Movie List </Link> <br></br>
              Here is my <Link to={"/blog/books"} className={links}> Book List </Link> <br></br>


            </p>
          </div>
        </div>

      </Layout>

    </>
  )
}

export default IndexPage