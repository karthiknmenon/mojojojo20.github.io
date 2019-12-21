module.exports = {
  siteMetadata: {
    title: `Karthik Menon | Front End Develoepr | UI/UX | Rajagiri College`,
    description: `Welcome to Karthik Menon's Web Resume. Karthik Menon is a final year undergrad at Rajagiri School of Engineering and Technology, Kakkanad, India. Karthik Menon is a Front End Developer and recently into Machine Learning and blockchain. mojojojo20, Karthik Menon, Rajagiri School of Engineering and Technology, RSET, Web Developers in kochi, Kochi, Kerala, India, UI/UX, travelngo, Rajagiri College, Front End Developers, Designers, Abhiyanthriki, Deadlock, Navrachana International School Vadodara, NISV, Machine Learning, Blockchain, Hyperledger. iTRAXX, Rajagiri, IT Department, APJ KTU`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-144718643-1",
      },
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Karthik Menon",
        short_name: "Karthik Menon",
        start_url: "https://karthikmenon.me/",
        background_color: "#1f2b3b",
        theme_color: "#1f2b3b",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
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
