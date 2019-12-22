const { name } = require("./package.json")

module.exports = {
	pathPrefix: `/`,
	siteMetadata: {
		author: "jiangbo",
		title: `姜波的博客`,
		siteUrl: `https://www.bobjiang.cn`
	},

	plugins: [
		"gatsby-plugin-catch-links",
		`gatsby-plugin-styled-components`,
		"gatsby-plugin-react-helmet",
		`gatsby-plugin-sitemap`,
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/blog`,
				name: "blog"
			}
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							linkImagesToOriginal: false
						}
					},
					`gatsby-remark-prismjs`
				]
			}
		}
	]
}
