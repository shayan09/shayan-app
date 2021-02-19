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
          <v-btn color="primary"> Know More </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="10"><MoreContent /></v-col>
  </v-layout>
</template>

<script>
import MoreContent from '../components/MoreContent'

export default {
  components: { MoreContent },
  data() {
    return {
      whoAmI:
        "<p>Hi, I'm Shayan. Trying to make the society a better place through technology, currently based in 📍Dallas,TX. Alumna 🎓 of <em>The University of Texas at Dallas</em> and <em>University of Pune</em>. Intrigued by sports, traveling, great food, strategy, finance, history and even better conversations. Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me.</p>",
    }
  },
}
</script>
