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
			max-height="800px"
			contain
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
				'dart-dallas.jpg',
				'goa-port.jpg',
				'grand-canyon.jpg',
				'hampi-ruins.jpg',
				'kedarkantha-view-gloomy.jpg',
				'mavs-nba.jpg',
				'nasa-space-center.jpg',
				'palo-duro-canyon-state-park.jpg',
				'san-antonio-river-walk.jpg',
				'san-diego-house.jpg',
				'san-diego-sunset.jpg',
				'texas-capitol.jpg',
				'top-of-the-rock-ny.jpg',
				'uttrakhand-pass.jpg',
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
	height: 100%;
}
.v-image {
	margin: auto;
}
</style>
