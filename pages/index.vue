<template>
	<div>
		<v-row class="intro">
			<IntroOne v-if="selectedIntro == 1" />
			<IntroTwo v-if="selectedIntro == 2" />
			<IntroThree v-if="selectedIntro == 3" />
			<IntroFour v-if="selectedIntro == 4" />
			<IntroFive v-if="selectedIntro == 5" />
		</v-row>
		<v-row class="mt-2">
			<v-spacer />
			<v-btn icon @click="selectedIntro = 1"
				><v-icon>mdi-checkbox-blank-circle-outline</v-icon></v-btn
			>
			<v-btn icon @click="selectedIntro = 2"
				><v-icon>mdi-checkbox-blank-circle-outline</v-icon></v-btn
			>
			<v-btn icon @click="selectedIntro = 3"
				><v-icon>mdi-checkbox-blank-circle-outline</v-icon></v-btn
			>
			<v-btn icon @click="selectedIntro = 4"
				><v-icon>mdi-checkbox-blank-circle-outline</v-icon></v-btn
			>
			<v-btn icon @click="selectedIntro = 5"
				><v-icon>mdi-checkbox-blank-circle-outline</v-icon></v-btn
			>
			<v-spacer />
		</v-row>
	</div>
</template>

<script>
import IntroOne from '../components/MainPage/IntroOne'
import IntroTwo from '../components/MainPage/IntroTwo'
import IntroThree from '../components/MainPage/IntroThree'
import IntroFour from '../components/MainPage/IntroFour'
import IntroFive from '../components/MainPage/IntroFive'

export default {
	components: { IntroOne, IntroTwo, IntroThree, IntroFour, IntroFive },
	data() {
		return {
			interval: undefined,
			selectedIntro: 1
		}
	},
	created() {
		this.interval = setInterval(this.changeIntro, 25000)
	},
	methods: {
		changeIntro() {
			if (this.selectedIntro < 5) {
				this.selectedIntro += 1
			} else {
				this.selectedIntro = 1
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.intro {
	padding-top: 7%;
	height: 90vh;
}
</style>
