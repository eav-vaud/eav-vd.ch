module.exports = {
  siteMetadata: {
    title: `EAV Vaud`,
    author: `EAV Vaud`,
    description: `Association enseignants d'arts visuels.`,
    siteUrl: `https://eav-vd.ch/`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isUsingColorMode: false,
      },
    },
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "eav-vd",
        path: "/preview",
        previews: true,
        pages: [
          {
            type: "Page",
            match: "/:uid",
            path: "/pages",
            component: require.resolve("./src/templates/page.js"),
          },
          {
            type: "Blog_post",
            match: "/blog/:uid",
            path: "/blog-preview",
            component: require.resolve("./src/templates/blog-post.js"),
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EAV Vaud`,
        short_name: `EAV Vaud`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `392079`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
  ],
}
