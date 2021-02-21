<template>
	<div>
		<h2 class="about-header pa-3 mt-3">SKILLS</h2>
		<div class="row">
			<li v-for="skill in skills" :key="skill" class="skill-list">
				<div
					class="icon"
					:style="{
						'background-image': 'url(' + require(`../../assets/logos/${skill}`) + ')'
					}"
				/>
			</li>
		</div>
		<br />
	</div>
</template>

<script>
export default {
	data() {
		return {
			skills: ['node.png', 'python.png', 'vue.png', 'sql.png', 'docker.png', 'ml.png', 'redis.png']
		}
	}
}
</script>

<style lang="scss" scoped>
.skill-list {
	list-style: none;
	margin-left: 5%;
}
.icon {
	display: inline-block;
	width: 120px;
	height: 120px;
	background-position: 50% 50%;
	background-size: cover;
	border-radius: 30%;
}
</style>
