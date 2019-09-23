module.exports = {
  siteMetadata: {
    title: `DeepTech`,
    name: `DeepTech Foundation`,
    siteUrl: `https://deeptech.id`,
    description: `Knowledge sharing, meaningful networking, self-improvement & transformation.`,
    hero: {
      heading: `Untuk Indonesia setara di bidang teknologi!`,
      heading_2: `Ikuti update kegiatan kami`,
      maxWidth: 580,
    },
    article_hero: {
      heading: `Ikuti Event kami untuk menunjang karir-mu`,
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
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Deeptech Foundation Indonesia`,
        short_name: `Deeptech`,
        start_url: `/`,
        background_color: `#FAFAFA`,
        theme_color: `#FAFAFA`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
