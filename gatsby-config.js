/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "A totally different site name",
    author: "A big fish",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["JimmiScript"],
          urls: ["./static/Fonts/JimmyScript-Rg.ttf"],
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-source-contentful",
            options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
          },
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
