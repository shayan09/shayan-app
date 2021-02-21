<template>
	<div>
		<h2 class="about-header ml-2">AWARDS</h2>
				<ul>
					<li v-for="award in awards" :key="award" class="award-list">
						{{ award }}
					</li>
				</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			awards: [
				'HackDFW Challenge 2nd Runners Up',
				'RACE 2018 Academic Conference - Best Research Paper',
				'Runner-Up Trophy Basketball',
				'Best Sportsman in High School',
				'Most Promising Student By Ishanya Foundation',
				'Best Basketball Player'
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.award-list {
	list-style: none;
	margin-left: 5%;
}
.years {
	color: gray;
}
</style>