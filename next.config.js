const path = require('path')

module.exports = {
	distDir: 'build',
	sassOptions: {
		includePaths: [path.join(__dirname, 'scss')],
		additionalData: `@import './src/scss/variables.scss';`
	},
	// i18n: {
	// 	locales: ['en-US'],
	// 	defaultLocale: 'en-US',
	// 	domains: [
	// 		{
	// 			domain: 'localhost:3000',
	// 			defaultLocale: 'en-US',
	// 		},
	// 	],
	// },
	async redirects() {
		return [
			{
				source: '/auth',
				destination: '/auth/signin',
				permanent: false
			}
		]
	}
}