<template>
	<div
		:class="[
			'work-container',
			{ 'col-md-12': isSmallScreen, 'col-md-9': !isSmallScreen }
		]"
	>
		<h2
			:class="[
				'work-header pa-3 mt-3',
				{ 'mobile-header': isSmallScreen, 'desktop-header': !isSmallScreen }
			]"
		>
			WORK EXPERIENCE
		</h2>
		<ul class="work-list row">
			<li
				v-for="work in workExperience"
				:key="work.title"
				:class="isSmallScreen ? 'col-md-12' : 'col-md-4'"
			>
				<v-card class="work-card text-center" flat>
					<div class="row">
						<v-img
							class="ml-0"
							:src="require(`../assets/logos/${work.img}`)"
							max-height="200px"
							width="100%"
						/>
					</div>
					<v-card-title class="justify-center mt-1"> {{ work.title }} </v-card-title>
					<v-card-text>
						<v-row class="roles-list justify-center">
							<v-chip v-for="role in work.role" :key="role" class="pa-2">
								{{ role }}
							</v-chip>
						</v-row>
						<v-row class="justify-center mt-4">
							<p>
								{{ work.location }} <i class="years"> {{ work.years[0] }} </i>
							</p>
							<span class="work-description">
								{{ work.description[0] }}
							</span>
						</v-row>
					</v-card-text>
				</v-card>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			workExperience: [
				{
					title: 'QliqSOFT, Inc.',
					role: ['Senior Software Engineer', 'Data Science Engineer'],
					location: 'Dallas, Texas, USA',
					description: [
						'Design and develop full-stack web applications using Vue.js, Nuxt.js, Node.js, Python, Docker and SQL. Architect and implement the back-end and offer scaling solutions to improve existing services. Add the ability for our customers to develop an end product using our existing software in multiple languages. Develop a Chatbot Marketplace that allows potential new customers to use and experience our software solutions. Improve the deployment pipeline with Docker and CI/CD. Collaborate with multiple teams to review and approve code changes.',
						'Responsible for developing the back-end infrastructure for chat-bots using Python, Node.js and Natural Language Processing (NLP) using Spacy. Participate in all phases of development starting with a conceptual model through functional and detailed design to implementation, debugging and deployment of the software. Manage elements of our internal infrastructure to support software deployment and display flexibility to work across technologies based on new development activities specific to the customer mission. Initiating and executing mid- and long-term project improvements.'
					],
					years: ['Aug 2019 - Present', 'Aug 2020 - Present', 'Aug 2019 - Jul 2020'],
					img: 'qliq.webp'
				},
				{
					title: 'HelloSivi Software Labs',
					role: ['Data Science Engineer'],
					location: 'Bengaluru Area, India',
					description: [
						'Worked on visual feature importance to generate designs and mood board based on brief. Python and PyTorch framework is used to generate and train models. OpenCV in C++ for finding important features in an image using Computer Vision algorithms. Data Scraping was achieved using Google Cloud Airflow by spawning multiple pods. '
					],
					img: 'sivi.jpg',
					years: ['May 2019 - July 2019']
				},
				{
					title: 'Spectra Cube',
					role: ['Contract Web Developer'],
					location: 'Pune, Maharashtra, India',
					description: [
						'Designed and developed 2-3 client websites with company information, blogs, maps and forms that send an email to the administrator or owner. Achieved this using HTML, CSS, Bootstrap and JavaScript. '
					],
					img: 'spectra.png',
					years: ['May 2017 - July 2017']
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
.work-container {
	height: 100%;
}
.work-header {
	text-align: center;
}
.work-list {
	// width: 100%;
	// height: 100%;
	list-style: none;
}
.years {
	color: gray;
}
.work-card {
	// border-radius: 20px !important;
	// margin: 15px auto;
	width: 100%;
	height: 100%;
	padding: 10px;
}
</style>
