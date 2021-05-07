<template>
	<div>
		<h2 class="about-header pa-3 mt-3">AWARDS</h2>
		<ul>
			<li v-for="award in awards" :key="award" class="award-list row">
				{{ award.title }} &#183;
				<p class="years">&nbsp; {{ award.year }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			awards: [
				{
					title: 'HackDFW Challenge 2nd Runners Up',
					year: 2019
				},
				{
					title: 'RACE 2018 Academic Conference - Best Research Paper',
					year: 2018
				},
				{
					title: 'Runner-Up Trophy Basketball',
					year: 2016
				},
				{
					title: 'Best Sportsman in High School',
					year: 2012
				},
				{
					title: 'Most Promising Student By Ishanya Foundation',
					year: 2011
				},
				{
					title: 'Best Basketball Player',
					year: 2010
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.award-list {
	list-style: none;
}
.years {
	color: gray;
}
</style>
