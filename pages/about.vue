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
    <v-col cols="10"><v-card>
      <h2>EDUCATION</h2>
      <ul>
        <li v-for="edu in education" :key="edu.title">
          <h3>{{ edu.title }}</h3>
          <p> {{ edu.location }} <i> {{ edu.years }} </i> </p>
        </li>
      </ul>
      <h2>WORK EXPERIENCE</h2>
      <ul>
        <li v-for="work in workExperience" :key="work.title">
          <h3> {{ work.title }} <p> {{ work.role[0] }} </p> </h3>
          <p> {{ work.location }} <i> {{ work.years[0] }} </i> </p>
          <p> {{ work.description[0] }} </p>
           <h3> <p> {{ work.role[1] }} </p> </h3>
          <p> {{ work.location }} <i> {{ work.years[1] }} </i> </p>
          <p> {{ work.description[1] }} </p>
        </li>
      </ul>
      <h2>SKILLS</h2>
      <li v-for="skill in skills" :key="skill">
        {{ skill }}
      </li>
      <h2>PUBLICATIONS</h2>
      <li v-for="publication in publications" :key="publication">
        {{ publication }}
      </li>
      <h2>AWARDS</h2>
        <ul>
          <li v-for="award in awards" :key="award">
            {{ award }}
          </li>
        </ul>
      </v-card></v-col>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      education:  [{title: 'The University of Texas at Dallas', location: 'Dallas, TX', years: '2018 - 2020'}, {title: 'University of Pune', location: 'Pune, India', years: '2014 - 2018'}, {title: 'St. Mary\'s Junior College', location: 'Pune, India', years: '2012 - 2014'}, {title: 'St. Mary\'s School', location: 'Pune, India', years: '2002 - 2012'}], 
      workExperience: [{title: 'QliqSOFT, Inc.', role: ['Senior Software Engineer', 'Data Science Engineer'], location: 'Dallas, TX', description: ['Design and develop full-stack web applications using Vue.js, Nuxt.js, Node.js, Python, Docker and SQL. Architect and implement the back-end and offer scaling solutions to improve existing services. Add the ability for our customers to develop an end product using our existing software in multiple languages. Develop a Chatbot Marketplace that allows potential new customers to use and experience our software solutions. Improve the deployment pipeline with Docker and CI/CD. Collaborate with multiple teams to review and approve code changes.', 'Responsible for developing the back-end infrastructure for chat-bots using Python, Node.js and Natural Language Processing (NLP) using Spacy. Participate in all phases of development starting with a conceptual model through functional and detailed design to implementation, debugging and deployment of the software. Manage elements of our internal infrastructure to support software deployment and display flexibility to work across technologies based on new development activities specific to the customer mission. Initiating and executing mid- and long-term project improvements.'], years: ['Aug 2020 - Present', 'Aug 2019 - Jul 2020']}],
      skills: ['Node.js', 'Python', 'Vue.js', 'SQL', 'Docker'],
      publications: ['LipVision - A Deep Learning Approach'],
      awards: ['HackDFW Challenge 2nd Runners Up', 'RACE 2018 Academic Conference - Best Research Paper', 'Runner-Up Trophy Basketball', 'Best Sportsman in High School', 'Most Promising Student By Ishanya Foundation', 'Best Basketball Player'],
      whoAmI:
        "<p>Hi, I'm Shayan. Trying to make the society a better place through technology, currently based in 📍Dallas,TX. Alumna 🎓 of <em>The University of Texas at Dallas</em> and <em>University of Pune</em>. Intrigued by sports, traveling, great food, strategy, finance, history and even better conversations. Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me.</p>",
    }
  },
}
</script>
