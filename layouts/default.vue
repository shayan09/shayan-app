<template>
	<v-app class="main-container" style="background-color: #596678">
		<v-app-bar
			:height="isSmallScreen ? '50px' : '64px'"
			prominent
			elevate-on-scroll
			light
			color="#2F61A5"
			app
		>
			<v-spacer></v-spacer>

			<v-app-bar-title
				class="name-title"
				:style="isSmallScreen ? 'font-size: 30px; margin:auto;' : 'font-size: 40px;'"
				>SHAYAN SADAR</v-app-bar-title
			>
			<v-spacer></v-spacer>

			<v-btn icon dark>
				<v-icon>mdi-camera</v-icon>
			</v-btn>

			<v-btn icon dark>
				<v-icon>mdi-book</v-icon>
			</v-btn>

			<v-btn icon dark to="/contact">
				<v-icon>mdi-email</v-icon>
			</v-btn>
		</v-app-bar>

		<v-content>
			<nuxt />
		</v-content>

		<v-footer
			class="footer font-weight-medium"
			absolute
			style="background-color: #596678"
		>
			<v-btn icon absolute style="bottom: 0; right: 0" @click="showFooter = !showFooter"
				><v-icon color="white"> mdi-information-outline</v-icon></v-btn
			>
			<v-col v-if="showFooter" cols="12">
				<v-row class="justify-center" style="color: white">
					{{ new Date().getFullYear() }}&#169; <strong>Made with ❤️</strong>
				</v-row>
				<v-row class="justify-center color--white">
					<v-btn href="https://github.com/shayan09" target="_blank" color="white" icon
						><v-icon> mdi-github</v-icon></v-btn
					>
					<v-btn
						href="https://stackoverflow.com/users/8147086/shayan"
						target="_blank"
						color="white"
						icon
						><v-icon> mdi-stack-overflow</v-icon></v-btn
					>
					<v-btn
						href="https://www.linkedin.com/in/shayansadar/"
						target="_blank"
						color="white"
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
</style>
