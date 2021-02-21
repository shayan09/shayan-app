<template>
	<v-app>
		<v-toolbar class="header justify-center" flat color="blue">
			<v-btn class="pa-2 mt-2 mr-2" to="/about">
				About Me<v-icon right dark> mdi-face </v-icon></v-btn
			>
			<v-btn class="pa-2 mt-2" to="/blogs"
				>Blogs <v-icon right dark> mdi-file-word </v-icon></v-btn
			>
			<v-spacer></v-spacer>
			<nuxt-link to="/" class="white--text mt-5" style="text-decoration: none"
				><v-toolbar-title class="pa-2 mt-5" style="font-size: 10em"
					>SHAYAN SADAR</v-toolbar-title
				></nuxt-link
			>
			<v-spacer></v-spacer>
			<v-btn class="pa-2 mt-2 mr-2" to="/captures"
				>Captures<v-icon right dark> mdi-camera </v-icon></v-btn
			>
			<v-btn class="pa-2 mt-2" to="/contact"
				>Contact<v-icon right dark> mdi-card-account-mail </v-icon></v-btn
			>
		</v-toolbar>
		<nuxt />
		<v-footer class="font-weight-medium" absolute style="background-color: #fff">
			<v-btn icon absolute style="bottom: 0; right: 0" @click="showFooter = !showFooter"
				><v-icon> mdi-information-outline</v-icon></v-btn
			>
			<v-col v-if="showFooter" class="text-center" cols="12">
				{{ new Date().getFullYear() }}&#169; <strong>Made with ❤️</strong>
			</v-col>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			showFooter: false
		}
	}
}
</script>
<style lang="scss">
.header {
	color: white;
	position: fixed;
	z-index: 9;
	height: 15% !important;
	width: 100% !important;
	display: flex;
	font-family: 'Crimson Pro', serif;
	font-weight: bold;
}
.v-toolbar__content {
  width: 100%;
}
</style>
