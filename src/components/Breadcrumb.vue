<template>
    <Breadcrumb class="bc-warp">
        <BreadcrumbItem to="/">管理系统</BreadcrumbItem>
        <BreadcrumbItem v-for="(item, index) of arr" :key="index">{{item}}</BreadcrumbItem>
    </Breadcrumb>
</template>

<script>
export default {
    name: "MyBreadcrumb",
    props: {
        arr: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="less" scoped>
.bc-warp{
    padding: 5px 10px 10px;
    margin-bottom: 10px;
    font-size: 16px;
    border-bottom: 1px solid #eee;
}
</style>