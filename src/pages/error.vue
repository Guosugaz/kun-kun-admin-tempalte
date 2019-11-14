<template>
    <div class="error-wrap full">
        <div>
            <h1>404</h1>
            <router-link to="/">
                <Button>
                    点击回主页
                </Button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Error"
}
</script>

<style scoped>
.error-wrap {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: gray;
    text-align: center;
}

h1 {
    font-size: 70px;
    color: #fff;
}
</style>