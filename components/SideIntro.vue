<template>
	<v-card class="intro-card pa-3 mt-3" elevation="6">
		<v-row class="my-2" justify="center">
			<v-avatar :size="isSmallScreen ? 96 : 128">
				<v-img :src="require('../assets/images/my-photo.jpeg')" class="image" />
			</v-avatar>
		</v-row>
		<v-card-title
			:class="[
				'intro-header justify-center pa-1',
				{ 'mobile-header': isSmallScreen, 'desktop-header': !isSmallScreen }
			]"
			>INTRODUCTION</v-card-title
		>
		<v-card-text class="mt-4" style="font-family: 'Montserrat', sans-serif">
			<p>
				Hi, I'm Shayan Sadar
				<v-btn x-small @click="playPronouncation">
					<v-icon>mdi-volume-source</v-icon>
					<audio
						id="pronounciation"
						:src="require('@/assets/audio/pronounce.mp3')"
						hidden
					></audio>
				</v-btn>
				Trying to make the society a better place through technology, currently based in
				📍Dallas,TX. Alumnus 🎓 of <em>The University of Texas at Dallas</em> and
				<em>University of Pune</em>. Intrigued by sports, travelling, great food,
				strategy, finance, history and even better conversations. Seeking to be inspired,
				to envision the unlikely, to work hard for things that are worth it, and to be
				surrounded by those who bring out the best in me.
			</p>
			<p v-if="expandContent">
				Thank you for your curosity to know more, but I don't have anything else at the
				moment. Meanwhile, checkout some
				<NuxtLink to="/gallery" style="font-weight: bold; letter-spacing: 3px"
					>photos</NuxtLink
				>
				I clicked.
			</p>
		</v-card-text>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-icon v-if="expandContent" color="primary" @click="expandContent = !expandContent"
				>mdi-chevron-up</v-icon
			>
			<v-icon v-else color="primary" @click="expandContent = !expandContent"
				>mdi-chevron-down</v-icon
			>
			<v-spacer></v-spacer>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			expandContent: 0, //0: down-arrow, 1: up-arrow
			isSmallScreen: false
		}
	},
	mounted() {
		this.finalContent = this.whoAmI
		this.isSmallScreen = window.innerWidth < 868
	},
	methods: {
		modifyContent(show) {
			if (show)
				this.finalContent =
					this.whoAmI +
					"<p>Thank you for your curiosity to know more, but I don't have anything else at the moment. Meanwhile, check out some <a href='http://shayansadar.com/gallery' style='font-weight: bold; letter-spacing: 3px;'>photos</a> I clicked.</p>"
			else this.finalContent = this.whoAmI
			this.icon = !this.icon
		},
		playPronouncation() {
			document.getElementById('pronounciation').play()
		}
	}
}
</script>

<style lang="scss" scoped>
.v-icon {
	text-decoration: none;
}
</style>
