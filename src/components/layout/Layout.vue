<template>
    <div style="height: 100%;">
        <Layout class="layout-wrap">
            <Sider class="sider-con"
                   :style="siderWidth">
                <MyMenu />
            </Sider>
            <Layout>
                <Header class="header-con">
                    <Button @click="width = width ? 0 : 200"
                            icon="md-list-box" />
                    <ul class="control-con fr">
                        <li>
                            <Icon type="md-person" /> admin
                        </li>
                        <li class="control-item">
                            <Icon type="ios-log-in" /> 退出</li>
                    </ul>
                </Header>
                <Content class="content-wrap">
                    <div>
                        <router-view></router-view>
                    </div>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import MyMenu from "./Menu";

export default {
    name: "MyLayout",
    components: {
        MyMenu
    },
    data() {
        return {
            width: 200
        };
    },
    computed: {
        siderWidth() {
            return {
                width: `${this.width}px`,
                "min-width": `${this.width}px`,
                "max-width": `${this.width}px`
            }
        }
    }
};
</script>

<style lang="less" scoped>
.layout-wrap {
    height: 100%;

    // 侧边栏样式
    .sider-con {
        background: #fff;
        overflow: hidden;
        transition: 0.3s ease-in-out all;
    }

    // 头部样式
    .header-con {
        padding: 0 20px;
        background: #fff;
        box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.1);

        .menu-btn {
            display: none;
        }
        // 头部右边的样式
        .control-con {
            > li {
                display: inline-block;
                padding: 0 10px;
                cursor: pointer;
                user-select: none;
                
                &:hover {
                    background: #f7f7f7;
                }

                i {
                    font-size: 18px;
                }
            }
        }
    }

    // 内容区样式
    .content-wrap {
        padding: 10px;
        background: #f1f1f1;

        > div {
            padding: 10px;
            height: 100%;
            background: #fff;
            border-radius: 2px;
            transition: all 0.2s ease-in-out;

            &:hover {
                box-shadow: 0 0 10px #ccc;
            }
        }
    }
}
</style>