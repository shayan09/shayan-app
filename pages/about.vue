<template>
	<v-layout cols="12">
		<v-col class="pa-3 mt-3" cols="2" elevation="6">
			<v-card>
				<v-img src="images/my-photo.jpg" aspect-ratio="1" />
				<v-card-title style="word-break: break-word">Introduction</v-card-title>
				<v-card-text
					style="font-family: 'Montserrat', sans-serif"
					v-html="whoAmI"
				></v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary"> Know More --></v-btn>
					<v-spacer></v-spacer>
				</v-card-actions>
			</v-card>
		</v-col>
		<v-col cols="10"
			><v-card>
				<h2 class="about-header pa-3 mt-3">EDUCATION</h2>
				<ul>
					<li v-for="edu in education" :key="edu.title" class="education-list">
						<div class="row mt-2">
							<img
								:src="require(`../assets/logos/${edu.img}`)"
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

				<h2 class="about-header pa-3 mt-3">WORK EXPERIENCE</h2>
				<ul>
					<v-row class="work-container" cols="12">
						<li v-for="work in workExperience" :key="work.title" class="work-list">
							<v-card class="work-card text-center" elevation="2">
                <div class="row">
                  <v-img
									:src="require(`../assets/logos/${work.img}`)"
									height="200px"
									width="100px"
								/>
                </div>
								<v-card-title class="justify-center mt-1"> {{ work.title }} </v-card-title>
								<v-card-text>
									<v-row class="roles-list justify-center">
										<v-chip v-for="role in work.role" :key="role">
											{{ role }}
										</v-chip>
									</v-row>
									<v-row class="justify-center">
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
					</v-row>
				</ul>
				<h2 class="about-header ml-2">SKILLS</h2>
				<li v-for="skill in skills" :key="skill" class="skill-list">
					{{ skill }}
				</li>
				<h2 class="about-header ml-2">PUBLICATIONS</h2>
				<li
					v-for="publication in publications"
					:key="publication"
					class="publication-list"
				>
					{{ publication }}
				</li>
				<h2 class="about-header ml-2">AWARDS</h2>
				<ul>
					<li v-for="award in awards" :key="award" class="award-list">
						{{ award }}
					</li>
				</ul>
			</v-card></v-col
		>
	</v-layout>
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
			skills: ['Node.js', 'Python', 'Vue.js', 'SQL', 'Docker'],
			publications: ['LipVision - A Deep Learning Approach'],
			awards: [
				'HackDFW Challenge 2nd Runners Up',
				'RACE 2018 Academic Conference - Best Research Paper',
				'Runner-Up Trophy Basketball',
				'Best Sportsman in High School',
				'Most Promising Student By Ishanya Foundation',
				'Best Basketball Player'
			],
			whoAmI:
				"<p>Hi, I'm Shayan. Trying to make the society a better place through technology, currently based in 📍Dallas,TX. Alumna 🎓 of <em>The University of Texas at Dallas</em> and <em>University of Pune</em>. Intrigued by sports, traveling, great food, strategy, finance, history and even better conversations. Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me.</p>"
		}
	}
}
</script>

<style lang="scss" scoped>
.education-list,
.work-list,
.skill-list,
.publication-list,
.about-list {
	list-style: none;
	margin-left: 5%;
}
.years {
	color: gray;
}
.work-card {
	border-radius: 20px !important;
	margin: 15px auto;
	width: 400px;
	padding: 10px;
}
</style>
