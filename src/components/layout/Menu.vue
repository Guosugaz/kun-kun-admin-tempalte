<template>
    <Menu ref="menu"
          :open-names="menuOpen"
          :active-name="menuActive"
          width="200px">
        <!-- 权限管理 -->
        <Submenu name="author">
            <template slot="title">
                <Icon type="md-person"></Icon>
                权限管理
            </template>
            <MenuItem name="authority"
                      to="/author/authority">权限配置</MenuItem>
        </Submenu>
        <!-- 用户管理 -->
        <Submenu name="user">
            <template slot="title">
                <Icon type="md-person"></Icon>
                用户管理
            </template>
            <MenuItem name="users">用户列表</MenuItem>
            <MenuItem name="store">商家列表</MenuItem>
        </Submenu>
        <!-- 商品管理 -->
        <Submenu name="goods">
            <template slot="title">
                <Icon type="md-cart"></Icon>
                商品管理
            </template>
            <MenuItem name="list">商品列表</MenuItem>
            <MenuItem name="classify">商品分类</MenuItem>
        </Submenu>
    </Menu>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "MyMenu",
    computed: mapState(["menuOpen", "menuActive"]),
    watch: {
        menuOpen() {
            this.$nextTick(() => {
                this.$refs.menu.updateOpened();
            });
        },
        menuActive() {
            this.$nextTick(() => {
                this.$refs.menu.updateActiveName();
            });
        }
    }
};
</script>