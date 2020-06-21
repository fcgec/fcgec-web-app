module.exports = {
  siteMetadata: {
    title: `FOSS Club GEC`,
    description: `The Official Webapp of The FOSS Club GEC. FOSS Club GEC is a club started by a group of FOSS enthusiasts to nurture the open source Club in Goa College of Engineering and encourage students across Goa to contribute to open source software projects and adopt the FOSS philosophy.`,
    author: `FCGEC`,
    siteUrl: `https://gecfoss.club`
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Nunito']
        }
      }
    },
    `gatsby-transformer-json`,
    {
      // For content like blog posts 
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
              withWebp: true,
              // wrapperStyle: "margin: 0"
            }
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    'gatsby-plugin-optimize-svgs',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FOSS Club GEC`,
        short_name: `FCGEC`,
        start_url: `/`,
        background_color: `#070813`,
        theme_color: `#070813`,
        display: `standalone`,
        icon: `src/images/FCGEC.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "${__dirname}/src/styles/variables";`,
      }
    },
    `gatsby-plugin-sitemap`
  ],
}
