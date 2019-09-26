module.exports = {
  siteMetadata: {
    title: `Karthik Menon | Front End Develoepr | UI/UX | Rajagiri College`,
    description: `Welcome to Karthik Menon's Web Resume. Karthik Menon is a final year undergrad at Rajagiri School of Engineering and Technology, Kakkanad, India. Karthik Menon is a Front End Developer and recently into Machine Learning and blockchain. mojojojo20, Karthik Menon, Rajagiri School of Engineering and Technology, RSET, Web Developers in kochi, Kochi, Kerala, India, UI/UX, travelngo, Rajagiri College, Front End Developers, Designers, Abhiyanthriki, Deadlock, Navrachana International School Vadodara, NISV, Machine Learning, Blockchain, Hyperledger`,
    author: `Karthik Menon, mojojojo20`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/`,
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    
  ],
}