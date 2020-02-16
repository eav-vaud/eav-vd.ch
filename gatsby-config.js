module.exports = {
  siteMetadata: {
    title: `EAV Vaud`,
    author: `EAV Vaud`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
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
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'eav-vd',
        pages: [{
          type: 'Page',
          match: '/:uid',
          path: '/pages',
          component: require.resolve('./src/templates/page.js'),
        },
        {
          type: 'Blog_post',
          match: '/blog/:uid',
          path: '/blog-preview',
          component: require.resolve('./src/templates/blog-post.js'),
        }],
      }
    }
  ],
}
