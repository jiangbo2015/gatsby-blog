require("dotenv").config({
    path: `.env`,
})

module.exports = {
    pathPrefix: `/`,
    siteMetadata: {
        author: "jiangbo",
        title: `姜波的博客`,
        siteUrl: `https://www.bobjiang.cn`,
        description: `个人博客，分享前后端技术，做技术积累`,
    },

    plugins: [
        "gatsby-plugin-catch-links",
        `gatsby-plugin-styled-components`,
        "gatsby-plugin-react-helmet",
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-sharp`,
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/blog`,
                name: "blog",
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            linkImagesToOriginal: false,
                        },
                    },
                    `gatsby-remark-prismjs`,
                ],
            },
        },
        {
            resolve: "gatsby-source-yuque",
            options: {
                login: "jiangbobo",
                repo: "vh61x5",
                mdNameFormat: "title",
            },
        },
    ],
}
