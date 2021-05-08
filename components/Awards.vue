<template>
	<div>
		<h2
			:class="[
				'award-header pa-3 mt-3',
				{ 'mobile-header': isSmallScreen, 'desktop-header': !isSmallScreen }
			]"
		>
			AWARDS
		</h2>
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
.award-header {
	text-align: center;
}
.award-list {
	list-style: none;
}
.years {
	color: gray;
}
</style>
