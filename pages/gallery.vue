/* eslint-disable prettier/prettier */
<template>
	<v-container fluid class="gallery-container mb-10 text-center justify-center">
		<v-btn class="back-button ml-2 mt-3 pa-2" to="/" :small="isSmallScreen">
			<v-icon color="black"> mdi-arrow-left </v-icon>
		</v-btn>
		<v-img
			class="mt-5"
			transition="scale-transition"
			max-width="800px"
			:src="require(`../assets/gallery/${currentPicture}`)"
			@click="getRandomPicture"
		/>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			pictures: [
				'carlsbad-caverns-national-park.jpg',
				'nasa-space-center.jpg',
				'palo-duro-canyon-state-park.jpg',
				'white-sands-national-monument.jpg'
			],
			currentPicture: 'click-me.gif',
			isSmallScreen: false
		}
	},
	mounted() {
		this.isSmallScreen = window.innerWidth < 868
	},
	methods: {
		getRandomPicture() {
			if (this.pictures.length > 0)
				this.currentPicture = this.pictures.splice(
					Math.floor(Math.random() * this.pictures.length),
					1
				)
			else this.currentPicture = 'the-end.gif'
		}
	}
}
</script>

<style lang="scss" scoped>
.gallery-container {
	background-color: white;
	height: 100%;
}
.v-image {
	margin: auto;
}
</style>
