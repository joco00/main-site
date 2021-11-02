import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


import {
  container,
  topContainer,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  footer,
  imageLink
} from './layout.module.css'
import NavBar from './navBar'


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <>
      <div className={topContainer} >
        <NavBar
          links={[
            { 'url': '/', 'name': 'home', },
            { 'url': '/projects', 'name': 'projects' },
            { 'url': '/blog', 'name': 'blog' }
          ]}
        />

        <div className={container}>
          <title>{pageTitle}|{data.site.siteMetadata.title}</title>
          {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header>

        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/projects" className={navLinkText}>
                Projects
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
          </ul>
        </nav> */}
          <main >
            {/* <h1 className={heading}>{pageTitle}</h1> */}
            {children}
          </main>


        </div>


      </div>

      <footer className={footer}>
        <a className={imageLink} href="https://github.com/joco00"> <img src="https://img.icons8.com/material-outlined/54/000000/github.png" /> </a>
        <a className={imageLink} href="https://twitter.com/jakeocon14" > <img src="https://img.icons8.com/ios/54/000000/twitter--v1.png" /> </a>
        <a className={imageLink} href="https://www.linkedin.com/in/jacob-o-connor-ba2232170/" >  <img src="https://img.icons8.com/ios/54/000000/linkedin-2--v1.png" /> </a>
        {/* <img src="https://img.icons8.com/ios/54/000000/instagram-new--v1.png" /> */}
        {/* <a href="https://icons8.com/icon/61956/linkedin-2">icons by Icons8</a> */}
      </footer>
    </>
  )
}

export default Layout