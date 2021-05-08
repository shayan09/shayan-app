<template>
	<v-container fluid class="mb-10">
		<div class="main-container">
			<v-row>
				<v-col :class="isSmallScreen ? 'col-md-12' : 'col-md-2'">
					<SideIntro />
				</v-col>
				<v-col :class="isSmallScreen ? 'col-md-12' : 'col-md-10'">
					<v-card class="pa-3 mt-3">
						<div class="row">
							<Education />

							<WorkExperience />
						</div>

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
.main-container {
	width: 100%;
	overflow: hidden;
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

<style lang="scss">
.desktop-header {
	font-family: 'Farro', sans-serif;
	font-weight: 500;
	letter-spacing: 0.0125em;
	line-height: 2rem;
	font-size: 24px;
}
.mobile-header {
	font-family: 'Farro', sans-serif;
	font-size: 16px;
}
</style>
