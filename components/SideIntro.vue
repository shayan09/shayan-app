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
			<span>
				<p>
					Hi, I'm Shayan. Trying to make the society a better place through technology,
					currently based in 📍Dallas,TX. Alumnus 🎓 of
					<em>The University of Texas at Dallas</em> and <em>University of Pune</em>.
					Intrigued by sports, travelling, great food, strategy, finance, history and even
					better conversations. Seeking to be inspired, to envision the unlikely, to work
					hard for things that are worth it, and to be surrounded by those who bring out
					the best in me.
				</p>
				<p v-if="expandContent">
					Thank you for your curosity to know more, but I don't have anything else at the
					moment. Meanwhile, checkout some
					<NuxtLink to="/gallery" style="font-weight: bold; letter-spacing: 3px"
						>photos</NuxtLink
					>
					I clicked.
				</p>
			</span>
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
	}
}
</script>

<style lang="scss" scoped>
.v-icon {
	text-decoration: none;
}
</style>
