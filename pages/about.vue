<template>
	<v-layout class="layout" cols="12">
		<SideIntro />
		<v-col cols="10">
			<v-card>
				<Education />

				<WorkExperience />

				<Skills />

				<Publications />

				<Awards />
			</v-card>
		</v-col>
	</v-layout>
</template>

<script>
import SideIntro from '../components/AboutPage/SideIntro'
import Education from '../components/AboutPage/Education'
import WorkExperience from '../components/AboutPage/WorkExperience'
import Skills from '../components/AboutPage/Skills'
import Publications from '../components/AboutPage/Publications'
import Awards from '../components/AboutPage/Awards'

export default {
	components: {
		SideIntro,
		Education,
		WorkExperience,
		Skills,
		Publications,
		Awards
	}
}
</script>

<style lang="scss" scoped>
.layout {
	padding-top: 8%;
}
.award-list {
	list-style: none;
	margin-left: 5%;
}
.years {
	color: gray;
}
</style>
