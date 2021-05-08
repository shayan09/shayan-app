<template>
	<v-app class="main-container">
		<v-app-bar
			:height="isSmallScreen ? '50px' : '64px'"
			prominent
			elevate-on-scroll
			light
			color="#2F61A5"
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

			<v-btn icon dark>
				<v-icon>mdi-email</v-icon>
			</v-btn>
		</v-app-bar>
		<nuxt />
		<v-footer class="font-weight-medium mt-5" absolute style="background-color: #fff">
			<v-btn icon absolute style="bottom: 0; right: 0" @click="showFooter = !showFooter"
				><v-icon> mdi-information-outline</v-icon></v-btn
			>
			<v-col v-if="showFooter" cols="12">
				<v-row class="justify-center">
					{{ new Date().getFullYear() }}&#169; <strong>Made with ❤️</strong>
				</v-row>
				<v-row class="justify-center">
					<v-btn href="https://github.com/shayan09" target="_blank" icon
						><v-icon> mdi-github</v-icon></v-btn
					>
					<v-btn
						href="https://stackoverflow.com/users/8147086/shayan"
						target="_blank"
						icon
						><v-icon> mdi-stack-overflow</v-icon></v-btn
					>
					<v-btn href="https://www.linkedin.com/in/shayansadar/" target="_blank" icon
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
	color: aliceblue;
	font-family: 'Crimson Pro', serif;
	font-weight: bold;
	font-size: 30px;
}
</style>
