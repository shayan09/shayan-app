<template>
	<v-layout cols="12">
		<SideIntro />
		<v-col cols="10"
			><v-card>
				<Education />
        <WorkExperience />
				
				<h2 class="about-header ml-2">SKILLS</h2>
				<li v-for="skill in skills" :key="skill" class="skill-list">
					{{ skill }}
				</li>
				<h2 class="about-header ml-2">PUBLICATIONS</h2>
				<li
					v-for="publication in publications"
					:key="publication"
					class="publication-list"
				>
					{{ publication }}
				</li>
				<h2 class="about-header ml-2">AWARDS</h2>
				<ul>
					<li v-for="award in awards" :key="award" class="award-list">
						{{ award }}
					</li>
				</ul>
			</v-card></v-col
		>
	</v-layout>
</template>

<script>
import SideIntro from '../components/AboutPage/SideIntro'
import Education from '../components/AboutPage/Education'
import WorkExperience from '../components/AboutPage/WorkExperience'

export default {
  components: {
    SideIntro,
    Education,
    WorkExperience
  },
	data() {
		return {
			skills: ['Node.js', 'Python', 'Vue.js', 'SQL', 'Docker'],
			publications: ['LipVision - A Deep Learning Approach'],
			awards: [
				'HackDFW Challenge 2nd Runners Up',
				'RACE 2018 Academic Conference - Best Research Paper',
				'Runner-Up Trophy Basketball',
				'Best Sportsman in High School',
				'Most Promising Student By Ishanya Foundation',
				'Best Basketball Player'
			],
		}
	}
}
</script>

<style lang="scss" scoped>
.skill-list,
.publication-list,
.about-list {
	list-style: none;
	margin-left: 5%;
}
.years {
	color: gray;
}
</style>
