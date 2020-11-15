<template>
  <v-container fluid style="overflow: hidden">
    <v-row style="height: 70vh">
      <IntroOne v-if="selectedIntro == 1" />
      <IntroTwo v-if="selectedIntro == 2" />
      <IntroThree v-if="selectedIntro == 3" />
      <IntroFour v-if="selectedIntro == 4" />
      <IntroFive v-if="selectedIntro == 5" />
    </v-row>
    <v-row class="mt-2">
      <v-spacer />
      <v-btn @click="selectedIntro = 1" icon
        ><v-icon>mdi-checkbox-blank-circle-outline</v-icon></v-btn
      >
      <v-btn @click="selectedIntro = 2" icon
        ><v-icon>mdi-checkbox-blank-circle-outline</v-icon></v-btn
      >
      <v-btn @click="selectedIntro = 3" icon
        ><v-icon>mdi-checkbox-blank-circle-outline</v-icon></v-btn
      >
      <v-btn @click="selectedIntro = 4" icon
        ><v-icon>mdi-checkbox-blank-circle-outline</v-icon></v-btn
      >
      <v-btn @click="selectedIntro = 5" icon
        ><v-icon>mdi-checkbox-blank-circle-outline</v-icon></v-btn
      >
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import IntroOne from '../components/MainPage/IntroOne'
import IntroTwo from '../components/MainPage/IntroTwo'
import IntroThree from '../components/MainPage/IntroThree'
import IntroFour from '../components/MainPage/IntroFour'
import IntroFive from '../components/MainPage/IntroFive'

export default {
  components: { IntroOne, IntroTwo, IntroThree, IntroFour, IntroFive },
  data() {
    return {
      interval: undefined,
      selectedIntro: 1,
    }
  },
  created() {
    this.interval = setInterval(this.changeIntro, 20000)
  },
  methods: {
    changeIntro() {
      if (this.selectedIntro < 5) {
        this.selectedIntro += 1
      } else {
        this.selectedIntro = 1
      }
    },
  },
}
</script>
