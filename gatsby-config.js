let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: ${activeEnv}`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Bryan Leighton`,
    description: `Bryan Leighton's site`,
    author: `@bdlb77`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // token: required by the GitHub API
        token: process.env.GITHUB_TOKEN,

        // GraphQLquery: defaults to a search query
        graphQLQuery: `
        query Repository ($owner1: String!, $name1: String!, $owner2: String!, $name2: String!, $owner3: String!, $name3: String!) {
          mateStack: repository(name: $name1, owner: $owner1) {
            owner {
              login
              avatarUrl(size: 150)
            }
            name
            url
            description
            stargazers {
              totalCount
            }
            primaryLanguage {
              name
            }
          }
            secretsStore: repository(name: $name2, owner: $owner2) {
            owner {
              login
              avatarUrl(size: 150)
            }
            name
            url
            description
            stargazers {
              totalCount
            }
            primaryLanguage {
              name
            }
          }
          devTo: repository(name: $name3, owner: $owner3){
            owner {
              login
              avatarUrl(size: 150)
            }
            name
            description
            url
            stargazers{
              totalCount
            }
						primaryLanguage {
              name
            }
          }
        }
`,

        // variables: defaults to variables needed for a search query
        variables: { 
          owner1: "matestack", name1: "matestack-ui-core",
          owner2: "Azure",  name2: "secrets-store-csi-driver-provider-azure",
          owner3: "thepracticaldev",  name3: "dev.to"
        },
      },
    },
    {
      resolve: "gatsby-source-dev",
      options: {
        // This is your username on Dev.to
        username: "bdlb77",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bryan_logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
