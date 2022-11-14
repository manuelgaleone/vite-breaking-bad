<script>
import {data} from "../charactersData.js"

export default {
    name: "CharactersList",
    props: {
        characters: Array
    },
    data() {
    return {
      data
    }
  }
}
</script>

<template>
    <div class="container characters_container p-4">
        <div class="characters_search p-3">
            <p class="search_caption">
                Found 62 characters.
            </p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col p-2 character_card">
                    <div class="character text-center">
                        <img class="character_image" :src="character.img" alt="Character Image">
                        <h3>
                            {{character.name}}
                        </h3>
                        <div class="status">
                            {{character.status}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.characters_container {
    background-color: white;
}
.characters_search {
    background-color: black;
}
.search_caption {
    color: white;
    font-weight: 600;
}
.character_card {
    background-color: rgb(37, 53, 78);
}

</style>