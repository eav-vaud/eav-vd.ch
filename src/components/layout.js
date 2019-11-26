/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <Styled.root
        sx={{
          display: `flex`,
          flexDirection: `column`,
          maxWidth: 720,
          minHeight: `100vh`,
          mx: `auto`,
        }}
      >
        <header>
          <h1>
            <Link to={`/`}>{title}</Link>
          </h1>
          <Link sx={{ mr: 3, textDecoration: `none` }} to="/actualites">
            Actualités
          </Link>
          <Link sx={{ mr: 3, textDecoration: `none` }} to="/apropos">
            À propos
          </Link>
          <Link sx={{ mr: 3, textDecoration: `none` }} to="/ressources">
            Ressources
          </Link>
          <Link sx={{ textDecoration: `none` }} to="/contact">
            Contact
          </Link>
        </header>
        <main sx={{ flexGrow: 1 }}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Styled.root>
    )
  }
}

export default Layout
