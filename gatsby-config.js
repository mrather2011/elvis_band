/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Elvis Experience",
    author: "Landmark Digital Designs",
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
        name: "songs",
        path: `${__dirname}/src/playlist/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/img/`,
      },
    },
    {
      resolve: "gatsby-background-image",
      options: {
        specialChars: "/:",
      },
    },
    "gatsby-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-remark-audio",
      options: {
        preload: "auto",
        loop: false,
        controls: true,
        muted: false,
        autoplay: false,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-remark-relative-images",
  ],
}
