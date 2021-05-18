<template>
	<div>
		<p
			:class="[
				'award-header pa-1 mt-3',
				{ 'mobile-header': isSmallScreen, 'desktop-header': !isSmallScreen }
			]"
		>
			AWARDS
		</p>
		<ul>
			<li v-for="award in awards" :key="award.id" class="award-list row">
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
					id: 1,
					title: 'HackDFW Challenge 2nd Runners Up',
					year: 2019
				},
				{
					id: 2,
					title: 'RACE 2018 Academic Conference - Best Research Paper',
					year: 2018
				},
				{
					id: 3,
					title: 'Runner-Up Trophy Basketball',
					year: 2016
				},
				{
					id: 4,
					title: 'Best Sportsman in High School',
					year: 2012
				},
				{
					id: 5,
					title: 'Most Promising Student By Ishanya Foundation',
					year: 2011
				},
				{
					id: 6,
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
