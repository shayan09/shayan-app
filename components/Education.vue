<template>
	<div
		:class="[
			'education-container',
			{ 'col-md-12': isSmallScreen, 'col-md-3': !isSmallScreen }
		]"
	>
		<p
			:class="[
				'education-header pa-3 mt-3',
				{ 'mobile-header': isSmallScreen, 'desktop-header': !isSmallScreen }
			]"
		>
			EDUCATION
		</p>
		<ul>
			<li v-for="edu in education" :key="edu.title" class="education-list">
				<div class="mt-2 education-item">
					<div class="row my-2">
						<img
							class="align-image"
							:src="require(`../assets/logos/${edu.img}`)"
							height="100px"
							width="100px"
						/>
					</div>
					<div :class="isSmallScreen ? 'row education-details my-2' : 'ml-3'">
						<h3 :class="['edu-line', { 'row full-width justify-center': isSmallScreen }]">
							{{ edu.title }}
						</h3>
						<p :class="['edu-line', { 'row full-width justify-center': isSmallScreen }]">
							{{ edu.degree }}
						</p>
						<p :class="['edu-line', { 'row full-width justify-center': isSmallScreen }]">
							{{ edu.location }} <i class="years mx-2"> {{ edu.years }} </i>
						</p>
					</div>
				</div>
				<v-divider />
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			education: [
				{
					title: 'The University of Texas at Dallas',
					degree: 'Master of Science - MS, Computer Science, 3.6/4.0',
					location: 'Dallas, TX',
					years: '2018 - 2020',
					img: 'utd.png'
				},
				{
					title: 'University of Pune',
					degree:
						'Bachelor of Engineering - BE, Computer Engineering, First Class With Distinction',
					location: 'Pune, India',
					years: '2014 - 2018',
					img: 'sppu.png'
				},
				{
					title: "St. Mary's Junior College",
					degree: 'ISC, Science, 89.25%',
					location: 'Pune, India',
					years: '2012 - 2014',
					img: 'sms.jpeg'
				},
				{
					title: "St. Mary's School",
					degree: 'ICSE, 91.6%',
					location: 'Pune, India',
					years: '2002 - 2012',
					img: 'sms.jpeg'
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
.education-container {
	height: 100%;
}
.education-header {
	text-align: center;
}
.education-list {
	list-style: none;
}
.education-item {
	text-align: center;
}
.education-details {
	overflow-wrap: break-word;
}
.edu-line {
	margin: auto;
}
.years {
	color: gray;
}
.align-image {
	margin: auto;
}
.full-width {
	width: 100%;
}
</style>
