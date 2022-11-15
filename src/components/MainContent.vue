<script>
import {data} from "../charactersData.js";
import CharactersList from "../components/CharactersList.vue";

export default {
    name: "MainContent",
    components: {
        CharactersList
    },
    data() {
    return {
      data
    }
  },
}



</script>

<template>
    <div class="container">
        <div class="select_input">
            <select @change="changeCategory(data.apiUrlBetter)" class="select_input_element">
                <option value="" selected disabled>Select Category</option>
                <option value="breakingbad">Breaking Bad</option>
                <option value="bettercallsoul">Better Call Soul</option>
            </select>
        </div>
        <div class="characters_search p-3 my-3">
            <p class="search_caption">
                Found 62 characters.
            </p>
        </div>
        <CharactersList></CharactersList>
    </div>
</template>

<style lang="scss" scoped>
.select_input_element {
    width: 200px;
}

.characters_search {
    background-color: black;
    color:white;
}

</style>