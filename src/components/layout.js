import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div>
        <header>
          <h1>
            <Link to={`/`}>{title}</Link>
          </h1>
          <Link to="/actualites">Actualités</Link>
          <Link to="/apropos">À propos</Link>
          <Link to="/ressources">Ressources</Link>
          <Link to="/contact">Contact</Link>
        </header>
        <main>{children}</main>
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
