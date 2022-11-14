<script>
export default {
    name: "HeaderContent"
}
</script>

<template>
    <div class="header_container p-3">
        <img class="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1280px-Breaking_Bad_logo.svg.png" alt="Breaking Bad Logo.">
        <span class="header_title px-3">
            Breaking Bad Api
        </span>
    </div>
</template>

<style lang="scss" scoped>

.header_logo {
    width: 150px;
}
.header_title {
    font-size: 35px;
    font-weight: 600;
    color: white;
}

</style>