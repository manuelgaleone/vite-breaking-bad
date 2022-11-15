<script>
import {data} from "../charactersData.js"
import CharacterCard from "../components/CharacterCard.vue";

export default {
    name: "CharactersList",
    props: {
        character: Object
    },
    components: {
        CharacterCard
    },
    data() {
    return {
      data
    }
  }
}
</script>

<template>
    <div class="container char_container">
        <div class="row p-3 d_flex align_items">
            <CharacterCard v-for="character in data.characters"  :character="character"></CharacterCard>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.char_container {
    background-color: white;
}
.d_flex {
    display: flex;
}

.align_items {
    align-items: center;
}

</style>