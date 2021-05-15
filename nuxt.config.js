export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: '%s',
		title: 'Shayan Sadar',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ hid: 'og:title', name: 'og:title', content: 'Shayan Sadar' },
			{
				hid: 'og:site_name',
				name: 'og:site_name',
				content: 'Shayan Sadar'
			},
			{
				hid: 'og:description',
				name: 'og:description',
				content: 'Personal Website'
			},
			{
				hid: 'og:image',
				name: 'og:image',
				content: 'https://twitter.com/shayansadar/photo'
			},
			{ hid: 'description', name: 'description', content: 'Shayan Sadar' },
			{
				hid: 'keywords',
				name: 'keywords',
				content:
					'Shayan Sadar, Developer, Senior Software Engineer, Hire, Backend Engineer, NLP, Node.js, Python, Vue.js, FullStack developer, DevOps'
			}
		],
		link: [
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Crimson+Pro'
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap'
			},
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Inconsolata:wght@500&display=swap'
			}
		]
	},
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [{ src: '~/plugins/vue-typed-js', mode: 'client' }],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa'
	],

	serverMiddleware: ['~/api/index.js'],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: { browserBaseURL: 'http://localhost:3000' },

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		icon: {
			source: '~/static/icon.png'
		},
		manifest: {
			lang: 'en'
		}
	},

	vuetify: {
		optionsPath: './vuetify.options.js'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extend(config) {
			config.module.rules.push({
				enforce: 'pre',
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				exclude: /(node_modules)/,
				options: {
					fix: true
				}
			})
		}
	}
}
