<script>
import HeaderContent from "./components/HeaderContent.vue";
import MainContent from "./components/MainContent.vue";
import FooterContent from "./components/FooterContent.vue";
import {data} from "./charactersData.js"
import axios from "axios"

export default {
  components: {
    HeaderContent,
    MainContent,
    FooterContent
  },
  data() {
    return {
      data
    }
  },
  methods : {
    callApi() {
      axios.get(url)
      .then(response => {
        console.log(response);
        this.data.characters = response.data
      })
      .catch(err => {
        console.error(err.message)
        this.data.error = err.message
      })
    },
    changeCategory() {
      axios.get(this.data.apiUrlBetter)
      .then(response => {
        console.log(response);
        this.data.characters = response.data
      })
      .catch(err => {
        console.error(err.message)
        this.data.error = err.message
      })
    }
  },
  mounted() {
    this.callApi(this.data.apiUrl)
  }
}
</script>

<template>
  <HeaderContent></HeaderContent>
  <MainContent @searchCategory="changeCategory"></MainContent>
  <FooterContent></FooterContent>
</template>

<style>
</style>