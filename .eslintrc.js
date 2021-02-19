module.exports = {
	root: true,
	// eslint-disable-next-line prettier/prettier
	env: {
		// eslint-disable-next-line prettier/prettier
		node: true,
		browser: true
	},
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended',
		'prettier/vue',
		'plugin:prettier/recommended'
	],
	"rules": {
		"prettier/prettier": {
			"error": 1
		  }, },
	globals: {
		$nuxt: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
