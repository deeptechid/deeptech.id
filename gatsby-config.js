require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `DeepTech`,
    name: `DeepTech Foundation`,
    siteUrl: `https://deeptech.id`,
    description: `Knowledge sharing, meaningful networking, self-improvement & transformation.`,
    hero: {
      heading: `Untuk Indonesia setara di bidang teknologi!`,
      heading_2: `Ikuti update kita di`,
      maxWidth: 652,
    },
    social: [
      // {
      //   name: `twitter`,
      //   url: `https://twitter.com/narative`,
      // },
      {
        name: `github`,
        url: `https://github.com/deeptechid`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/deeptech.id`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/deep-tech-id`,
      },
      // {
      //   name: `dribbble`,
      //   url: `https://dribbble.com/narativestudio`,
      // },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          // local: true,
          contentful: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
