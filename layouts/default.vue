<template>
	<v-app class="main-container">
		<!-- <v-toolbar class="header" height="64px" flat color="#143D67">
			<v-toolbar-title class="name-title">SHAYAN SADAR</v-toolbar-title>
		</v-toolbar> -->
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
.main-container {
	width: 100%;
}
.name-title {
	color: aliceblue;
	font-family: 'Crimson Pro', serif;
	font-weight: bold;
	font-size: 30px;
}
.v-toolbar__content {
	justify-content: center;
	width: 100%;
	margin: auto;
}
</style>
