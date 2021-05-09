<template>
	<div>
		<p
			:class="[
				'skills-header pa-1 mt-3',
				{ 'mobile-header': isSmallScreen, 'desktop-header': !isSmallScreen }
			]"
		>
			SKILLS
		</p>
		<div class="row skill-line">
			<li v-for="skill in skills" :key="skill" class="skill-list">
				<div
					:class="isSmallScreen ? 'small-icon' : 'icon'"
					:style="{
						'background-image': 'url(' + require(`../assets/logos/${skill}`) + ')'
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
			skills: [
				'node.png',
				'python.png',
				'vue.png',
				'sql.png',
				'docker.png',
				'ml.png',
				'redis.png'
			],
			isSmallScreen: null
		}
	},
	mounted() {
		this.isSmallScreen = window.innerWidth < 868
	}
}
</script>

<style lang="scss" scoped>
.skills-header {
	text-align: center;
}
.skill-line {
	justify-content: space-evenly;
}
.skill-list {
	list-style: none;
}
.icon {
	display: inline-block;
	width: 120px;
	height: 120px;
	background-position: 50% 50%;
	background-size: cover;
	border-radius: 30%;
}
.small-icon {
	display: inline-block;
	width: 50px;
	height: 50px;
	background-position: 50% 50%;
	background-size: cover;
	border-radius: 30%;
}
</style>
