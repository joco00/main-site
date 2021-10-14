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
    <div className={topContainer} >
      <NavBar
        links={[
          { 'url': '/', 'name': 'home' },
          { 'url': '/projects', 'name': 'projects' },
          { 'url': '/blog', 'name': 'blog' }
        ]}
      />

      <div className={container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
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
        <main>
          {/* <h1 className={heading}>{pageTitle}</h1> */}
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout