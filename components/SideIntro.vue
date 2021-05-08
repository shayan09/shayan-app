<template>
	<v-card class="intro-card pa-3 mt-3" elevation="6">
		<v-row class="my-2" justify="center">
			<v-avatar :size="isSmallScreen ? 96 : 128">
				<v-img :src="require('../assets/images/my-photo.jpeg')" class="image" />
			</v-avatar>
		</v-row>
		<v-card-title class="justify-center" style="word-break: break-word"
			>Introduction</v-card-title
		>
		<v-card-text
			style="font-family: 'Montserrat', sans-serif"
			v-html="finalContent"
		></v-card-text>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-icon v-if="icon" color="primary" @click="modifyContent(icon)"
				>mdi-chevron-down</v-icon
			>
			<v-icon v-else color="primary" @click="modifyContent(icon)">mdi-chevron-up</v-icon>
			<v-spacer></v-spacer>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			finalContent: '',
			whoAmI:
				"<p>Hi, I'm Shayan. Trying to make the society a better place through technology, currently based in 📍Dallas,TX. Alumna 🎓 of <em>The University of Texas at Dallas</em> and <em>University of Pune</em>. Intrigued by sports, traveling, great food, strategy, finance, history and even better conversations. Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me.</p>",
			icon: 1, //down,
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
					"<p>Thank you for your curosity to know more, but I don't have anything else at the moment.</p>"
			else this.finalContent = this.whoAmI
			this.icon = !this.icon
		}
	}
}
</script>

<style lang="scss" scoped>
.v-icon {
	text-decoration: none;
}
.image {
	// border-radius: 50% 50%;
}
</style>
