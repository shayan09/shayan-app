<template>
	<v-col class="pa-3 mt-3" cols="2" elevation="6">
		<v-card>
			<v-img src="images/my-photo.jpg" aspect-ratio="1" />
			<v-card-title style="word-break: break-word">Introduction</v-card-title>
			<v-card-text
				style="font-family: 'Montserrat', sans-serif"
				v-html="finalContent"
			></v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-icon v-if="icon" color="primary" @click="modifyContent(icon)"
					>mdi-chevron-down</v-icon
				>
				<v-icon v-else color="primary" @click="modifyContent(icon)"
					>mdi-chevron-up</v-icon
				>
				<v-spacer></v-spacer>
			</v-card-actions>
		</v-card>
	</v-col>
</template>

<script>
export default {
	data() {
		return {
			finalContent: '',
			whoAmI:
				"<p>Hi, I'm Shayan. Trying to make the society a better place through technology, currently based in 📍Dallas,TX. Alumna 🎓 of <em>The University of Texas at Dallas</em> and <em>University of Pune</em>. Intrigued by sports, traveling, great food, strategy, finance, history and even better conversations. Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me.</p>",
			icon: 1 //down
		}
	},
	mounted() {
		this.finalContent = this.whoAmI
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
</style>