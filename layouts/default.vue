<template>
	<v-app class="main-container">
		<v-app-bar
			:height="isSmallScreen ? '50px' : '64px'"
			prominent
			elevate-on-scroll
			light
			color="#2F61A5"
			app
		>
			<v-tooltip bottom>
				<template #activator="{ on, attrs }">
					<v-btn
						v-if="$vuetify.theme.dark"
						icon
						dark
						v-bind="attrs"
						v-on="on"
						@click="$vuetify.theme.dark = !$vuetify.theme.dark"
					>
						<v-icon>mdi-white-balance-sunny</v-icon>
					</v-btn>
					<v-btn
						v-else
						icon
						dark
						v-bind="attrs"
						v-on="on"
						@click="$vuetify.theme.dark = !$vuetify.theme.dark"
					>
						<v-icon>mdi-weather-night</v-icon>
					</v-btn>
				</template>
			</v-tooltip>

			<v-spacer></v-spacer>
			<v-app-bar-title
				class="name-title"
				:style="isSmallScreen ? 'font-size: 30px; margin:auto;' : 'font-size: 40px;'"
				>SHAYAN SADAR</v-app-bar-title
			>
			<v-spacer></v-spacer>

			<v-tooltip bottom>
				<template #activator="{ on, attrs }">
					<v-btn icon dark v-bind="attrs" v-on="on">
						<v-icon>mdi-book</v-icon>
					</v-btn>
				</template>
				<span>Blogs</span>
			</v-tooltip>

			<v-tooltip bottom>
				<template #activator="{ on, attrs }">
					<v-btn icon dark v-bind="attrs" to="/contact" v-on="on">
						<v-icon>mdi-email</v-icon>
					</v-btn>
				</template>
				<span>Contact</span>
			</v-tooltip>
		</v-app-bar>

		<v-main>
			<nuxt />
		</v-main>

		<v-footer
			class="footer font-weight-medium"
			absolute
			style="background-color: transparent"
		>
			<v-btn icon absolute style="bottom: 0; right: 0" @click="showFooter = !showFooter"
				><v-icon color="#596678"> mdi-information-outline</v-icon></v-btn
			>
			<v-col v-if="showFooter" cols="12">
				<v-row class="justify-center">
					<span class="footer-text"
						>{{ new Date().getFullYear() }}&#169; <strong>Made with ❤️ |</strong></span
					>
					<v-btn href="https://github.com/shayan09" target="_blank" color="#596678" icon
						><v-icon> mdi-github</v-icon></v-btn
					>
					<v-btn
						href="https://stackoverflow.com/users/8147086/shayan"
						target="_blank"
						color="#596678"
						icon
						><v-icon> mdi-stack-overflow</v-icon></v-btn
					>
					<v-btn
						href="https://www.linkedin.com/in/shayansadar/"
						target="_blank"
						color="#596678"
						icon
						><v-icon> mdi-linkedin</v-icon></v-btn
					>
				</v-row>
			</v-col>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			showFooter: false,
			isSmallScreen: null
		}
	},
	mounted() {
		this.isSmallScreen = window.innerWidth < 868
	}
}
</script>
<style lang="scss">
.main-container {
	width: 100%;
}
.name-title {
	color: white;
	font-family: 'Crimson Pro', serif;
	font-weight: bold;
	font-size: 30px;
}
.footer-text {
	color: #596678;
	margin: auto 0px;
}
</style>
