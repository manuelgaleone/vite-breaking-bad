<script>
export default {
    name: "CharacterCard",
    props: {
        character: Object
    }
}
</script>

<template>
    <div class="col-3 p-2 character_card">
        <div class="character text-center">
            <img class="character_image" :src="character.img" alt="Character Image">
            <h3 class="p-2">
                {{character.name}}
            </h3>
            <div class="status">
                {{character.status}}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.characters_container {
    background-color: white;
}
.search_caption {
    color: white;
    font-weight: 600;
}
.character_card {
    background-color: rgb(37, 53, 78);
    color: white;
}

.d_flex {
    display: flex;
}

.align_items {
    align-items: center;
}

img {
    width: 250px;
}

</style>