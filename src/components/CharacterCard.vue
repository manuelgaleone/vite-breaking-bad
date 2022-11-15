<script>
export default {
    name: "CharacterCard",
    props: {
        character: Object
    }
}
</script>

<template>
    <div class="col-3 px-2 py-2 ">
        <div class="character character_card p-2 text-center">
            <img class="character_image py-2" :src="character.img" alt="Character Image">
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
.character_card {
    background-color: rgb(37, 53, 78);
    color: white;
}


img {
    width: 250px;
    height: 350px;
}

</style>