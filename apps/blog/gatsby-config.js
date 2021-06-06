const title = `:-) 🏕`;
const author = "Keisuke Kan";

const GATSBY_ALGOLIA_APP_ID = `GATSBY_ALGOLIA_APP_ID`;

const plugins = [
  `gatsby-plugin-preact`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/blog`,
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/assets`,
      name: `assets`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        `gatsby-remark-prismjs`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
      ],
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: ["G-5SVZ0B41GD"],
      gtagConfig: {
        anonymize_ip: true,
        cookie_expires: 0,
      },
      pluginConfig: {
        head: false,
        respectDNT: true,
        exclude: [],
      },
    },
  },
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
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) =>
            allMarkdownRemark.edges.map((edge) =>
              Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }],
              })
            ),
          query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
          output: "/rss.xml",
          title: "Your Site's RSS Feed",
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: title,
      short_name: title,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `content/assets/profile-pic.jpg`,
    },
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    },
  },
  {
    resolve: "gatsby-plugin-sentry",
    options: {
      dsn: process.env.SENTRY_DSN,
    },
  },
  `gatsby-plugin-typescript`,
  "gatsby-plugin-typescript-checker",
];

if (process.env.ALGOLIA_APP_ID && process.env.ALGOLIA_ADMIN_KEY) {
  plugins.concat([
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env[GATSBY_ALGOLIA_APP_ID],
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia"),
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: [GATSBY_ALGOLIA_APP_ID, "GATSBY_ALGOLIA_SEARCH_KEY"],
      },
    },
  ]);
}

module.exports = {
  siteMetadata: {
    title,
    author,
    description: `Have fun, good luck`,
    siteUrl: `https://9renpoto.dev/`,
    social: {
      twitter: `9renpoto`,
    },
  },
  plugins,
};
