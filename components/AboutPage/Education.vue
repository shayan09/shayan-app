<template>
	<div>
		<h2 class="about-header pa-3 mt-3">EDUCATION</h2>
		<ul>
			<li v-for="edu in education" :key="edu.title" class="education-list">
				<div class="row mt-2">
					<img
						:src="require(`../../assets/logos/${edu.img}`)"
						height="100px"
						width="100px"
					/>
					<div>
						<h3 class="ml-3">{{ edu.title }}</h3>
						<p class="ml-4">{{ edu.degree }}</p>
						<p class="ml-5">
							{{ edu.location }} <i class="years"> {{ edu.years }} </i>
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
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.education-list {
	list-style: none;
	margin-left: 5%;
}
.years {
	color: gray;
}
</style>
