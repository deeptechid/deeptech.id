require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `DeepTech`,
    name: `DeepTech Foundation`,
    siteUrl: `https://deeptech.id`,
    description: `Knowledge sharing, meaningful networking, self-improvement & transformation.`,
    hero: {
      heading: `Berbagai blog teknologi kami`,
      maxWidth: 788,
    },
    hero_blog: {
      heading: `Berbagai blog teknologi kami`,
      maxWidth: 788,
      // category for later use
      category: `Blog`, 
    },
    hero_kegiatan: {
      heading: `Berbagai kegiatan kami`,
      maxWidth: 788,
      // category for later use
      category: `Kegiatan`, 
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
          contentful: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENV,
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
