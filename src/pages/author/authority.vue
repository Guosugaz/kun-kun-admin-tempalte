<template>
    <div>
        <my-breadcrumb :arr="['权限管理', '权限配置']" />
        <Button @click="showModel = true">添加一级权限</Button>
        <Tree :data="info"
              :render="renderContent" />
        <Modal v-model="showModel"
               :title="title"
               :mask-closable="false"
               :closable="false"
               :loading="btnLoading"
               @on-cancel="reset"
               @on-ok="hadnleAdd">
            <Form ref="checkForm"
                  :model="formData"
                  :rules="formRules">
                <FormItem prop="name"
                          label="权限名称">
                    <Input v-model="formData.name"
                           placeholder="请输入权限名称" />
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: 0,
            pid: 0,
            loading: false,
            btnLoading: false,
            showModel: false,
            formData: {
                name: ""
            },
            formRules: {
                name: [
                    {
                        required: true,
                        message: "权限名称不能为空",
                        trigger: "blur"
                    }
                ]
            },
            info: [
                {
                    title: "权限配置",
                    id: 1,
                    expand: true,
                    children: [
                        {
                            title: "添加权限配置",
                            id: 2,
                            children: null
                        }
                    ]
                }
            ],
            buttonProps: {
                type: "default",
                size: "small"
            }
        };
    },
    computed: {
        title() {
            if (this.pid) {
                return "添加二级权限";
            } else if (this.id) {
                return this.formData.name;
            }
            return "添加一级权限";
        }
    },
    methods: {
        handleRmove() {},
        hadnleAdd() {},
        reset() {
            this.formData = {
                name: ""
            };
            this.id = 0;
            this.pid = 0;
        },
        renderContent(h, { node, data }) {
            return h(
                "span",
                {
                    style: {
                        display: "inline-block",
                        width: "100%"
                    }
                },
                [
                    h(
                        "span",
                        {
                            style: {
                                marginLeft: "8px"
                            }
                        },
                        data.title
                    ),
                    h(
                        "span",
                        {
                            style: {
                                display: "inline-block",
                                float: "right",
                                marginRight: "32px"
                            }
                        },
                        [
                            node.parent === undefined
                                ? h(
                                      "Button",
                                      {
                                          props: this.buttonProps,
                                          style: {
                                              marginRight: "8px"
                                          },
                                          on: {
                                              click: () => {
                                                  this.showModel = true;
                                                  this.pid = data.id;
                                              }
                                          }
                                      },
                                      "添加"
                                  )
                                : "",
                            h(
                                "Button",
                                {
                                    props: this.buttonProps,
                                    style: {
                                        marginRight: "8px"
                                    },
                                    on: {
                                        click: () => {
                                            this.showModel = true;
                                            this.id = data.id;
                                            this.formData.name = data.title;
                                        }
                                    }
                                },
                                "修改"
                            ),
                            h(
                                "Poptip",
                                {
                                    props: {
                                        confirm: true,
                                        placement: "top-end",
                                        "word-wrap": true,
                                        title: `确认删除 ${data.title} ?`
                                    },
                                    on: {
                                        "on-ok": () => {
                                            this.handleRmove(data.id);
                                        }
                                    }
                                },
                                [
                                    h(
                                        "Button",
                                        {
                                            props: Object.assign(
                                                {},
                                                this.buttonProps,
                                                {
                                                    type: "error"
                                                }
                                            )
                                        },
                                        "删除"
                                    )
                                ]
                            )
                        ]
                    )
                ]
            );
        }
    }
};
</script>

<style lang="less" scoped>
</style>