<template>
	<div>
		<h2 class="about-header ml-2">SKILLS</h2>
		<li v-for="skill in skills" :key="skill" class="skill-list">
			{{ skill }}
		</li>
	</div>
</template>

<script>
export default {
	data() {
		return {
			skills: ['Node.js', 'Python', 'Vue.js', 'SQL', 'Docker']
		}
	}
}
</script>

<style lang="scss" scoped>
.skill-list {
	list-style: none;
	margin-left: 5%;
}
.years {
	color: gray;
}
</style>