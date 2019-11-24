import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          minHeight: `100vh`,
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          {header}
          <Link style={{ marginRight: rhythm(1) }} to="/actualites">
            Actualités
          </Link>
          <Link style={{ marginRight: rhythm(1) }} to="/apropos">
            À propos
          </Link>
          <Link style={{ marginRight: rhythm(1) }} to="/ressources">
            Ressources
          </Link>
          <Link to="/contact">Contact</Link>
        </header>
        <main
          style={{
            flexGrow: 1,
          }}
        >
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
