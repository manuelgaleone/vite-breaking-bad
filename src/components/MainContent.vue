<script>
import CharactersList from "../components/CharactersList.vue";

export default {
    name: "MainContent",
    components: {
        CharactersList
    }
}
</script>

<template>
    <div class="container">
        <div class="select_input">
            <select class="form-select select_input_element" aria-label="Default select example">
                <option selected>Select Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <CharactersList></CharactersList>
    </div>
</template>

<style lang="scss" scoped>
.select_input_element {
    width: 200px;
}

</style>