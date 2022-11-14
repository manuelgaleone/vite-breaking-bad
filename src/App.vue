<script>
import HeaderContent from "./components/HeaderContent.vue";
import MainContent from "./components/MainContent.vue";
import FooterContent from "./components/FooterContent.vue";
import {data} from "./charactersData.js"

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
    callApi(url) {
      axios.get(url)
      .then(response => {
        console.log(response);
        this.data.characters = response.data.results
        this.data.info = response.data.info
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
  <MainContent></MainContent>
  <FooterContent></FooterContent>
</template>

<style>
</style>