module.exports = 
  ({
  contentAuthors = 'content/authors',
  contentPosts = 'content/posts',
  sources: { local, contentful },
  }) => ({
  mapping: {
    'Mdx.frontmatter.author': `AuthorsYaml`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        setup: ({
          query: {
            site: { siteMetadata },
          },
          ...rest
        }) => {
          siteMetadata.feed_url = siteMetadata.siteUrl + '/rss.xml';
          siteMetadata.image_url =
            siteMetadata.siteUrl + '/icons/icon-512x512.png';
          const siteMetadataModified = siteMetadata;
          siteMetadataModified.feed_url = `${siteMetadata.siteUrl}/rss.xml`;
          siteMetadataModified.image_url = `${siteMetadata.siteUrl}/icons/icon-512x512.png`;

          return {
            ...siteMetadataModified,
            ...rest,
          };
        },
        feeds: [
          {
            serialize: ({ query: { site, allArticle, allContentfulPost } }) => {
              if (local && !contentful) {
                return allArticle.edges
                  .filter(edge => !edge.node.secret)
                  .map(edge => {
                    return {
                      ...edge.node,
                      description: edge.node.excerpt,
                      date: edge.node.date,
                      url: site.siteMetadata.siteUrl + edge.node.slug,
                      guid: site.siteMetadata.siteUrl + edge.node.slug,
                      // custom_elements: [{ "content:encoded": edge.node.body }],
                      author: edge.node.author,
                    };
                  });
              } else if (!local && contentful) {
                return allContentfulPost.edges
                  .filter(edge => !edge.node.secret)
                  .map(edge => {
                    return {
                      ...edge.node,
                      description: edge.node.excerpt,
                      date: edge.node.date,
                      url: site.siteMetadata.siteUrl + edge.node.slug,
                      guid: site.siteMetadata.siteUrl + edge.node.slug,
                      // custom_elements: [{ "content:encoded": edge.node.body }],
                      author: edge.node.author,
                    };
                  });
              } else {
                const allArticlesData = { ...allArticle, ...allContentfulPost };
                return allArticlesData.edges
                  .filter(edge => !edge.node.secret)
                  .map(edge => {
                    return {
                      ...edge.node,
                      description: edge.node.excerpt,
                      date: edge.node.date,
                      url: site.siteMetadata.siteUrl + edge.node.slug,
                      guid: site.siteMetadata.siteUrl + edge.node.slug,
                      // custom_elements: [{ "content:encoded": edge.node.body }],
                      author: edge.node.author,
                    };
                  });
              }
            },
            query:
              local && !contentful
                ? `
              {
                allArticle(sort: {order: DESC, fields: date}) {
                  edges {
                    node {
                      excerpt
                      date
                      slug
                      title
                      author
                      secret
                    }
                  }
                }
              }
              `
                : !local && contentful
                ? `
              {
                allContentfulPost(sort: {order: DESC, fields: date}) {
                  edges {
                    node {
                      excerpt
                      date
                      slug
                      title
                      author {
                        name
                      }
                      secret
                    }
                  }
                }
              }
              `
                : `
              {
                allArticle(sort: {order: DESC, fields: date}) {
                  edges {
                    node {
                      excerpt
                      date
                      slug
                      title
                      author
                      secret
                    }
                  }
                }
              }
              {
                allContentfulPost(sort: {order: DESC, fields: date}) {
                  edges {
                    node {
                      excerpt
                      date
                      slug
                      title
                      author {
                        name
                      }
                      secret
                    }
                  }
                }
              }
              `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
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
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPosts,
        name: contentPosts,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentAuthors,
        name: contentAuthors,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 10000,
              linkImagesToOriginal: false,
              quality: 80,
              withWebp: true,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-numbered-footnotes` },
          { resolve: `gatsby-remark-smartypants` },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer', // eslint-disable-line unicorn/prevent-abbreviations
            },
          },
        ],
        remarkPlugins: [require(`remark-slug`)], // eslint-disable-line global-require
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        displayName: process.env.NODE_ENV === `development`,
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
  ],
});