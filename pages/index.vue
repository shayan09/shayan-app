<template>
	<v-container fluid class="mb-10">
		<div v-if="isSmallScreen" class="mobile-view">
			<div
				v-for="rowIdx in Math.ceil(components.length / 3)"
				:key="rowIdx"
				class="row subheader-list"
			>
				<div
					v-for="(item, index) in components.slice(3 * (rowIdx - 1), 3 * rowIdx)"
					:key="index"
					class="subheader-item"
				>
					<v-btn class="item-btn ma-2" @click="activeComponent = item">{{ item }}</v-btn>
				</div>
			</div>
			<v-row v-if="activeComponent == 'Intro'" class="mx-2">
				<SideIntro />
			</v-row>
			<v-row v-else class="mx-2">
				<v-card elevation="6">
					<Education v-if="activeComponent == 'Education'" />
					<WorkExperience v-else-if="activeComponent == 'WorkEx'" />
					<Skills v-else-if="activeComponent == 'Skills'" />
					<Publications v-else-if="activeComponent == 'Publications'" />
					<Awards v-else-if="activeComponent == 'Awards'" />
				</v-card>
			</v-row>
		</div>
		<div v-else class="desktop-view">
			<v-row>
				<v-col cols="2">
					<SideIntro />
				</v-col>
				<v-col cols="10">
					<v-card>
						<Education />

						<WorkExperience />

						<Skills />

						<Publications />

						<Awards />
					</v-card>
				</v-col>
			</v-row>
		</div>
	</v-container>
</template>

<script>
import SideIntro from '../components/SideIntro'
import Education from '../components/Education'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Publications from '../components/Publications'
import Awards from '../components/Awards'

export default {
	components: {
		SideIntro,
		Education,
		WorkExperience,
		Skills,
		Publications,
		Awards
	},
	data() {
		return {
			components: ['Intro', 'Education', 'WorkEx', 'Skills', 'Publications', 'Awards'],
			isSmallScreen: null,
			activeComponent: 'Intro'
		}
	},
	mounted() {
		this.isSmallScreen = window.innerWidth < 868
	}
}
</script>

<style lang="scss" scoped>
.mobile-view .desktop-view {
	width: 100%;
}
.subheader-item {
	list-style: none;
}
.subheader-list {
	width: 100%;
	justify-content: space-evenly;
	// margin: auto;
}
.item-btn {
	font-size: 12px;
	width: 100px;
}
</style>
