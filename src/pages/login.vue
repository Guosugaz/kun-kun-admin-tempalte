<template>
    <div class="login-wrap full">
        <div class="container">
            <h1>后台管理系统</h1>
            <Form ref="loginForm"
                  :model="formData"
                  :rules="formRules"
                  class="form-con"
                  @submit.native.prevent="handleSubmit">
                <FormItem prop="user">
                    <Input type="text"
                           v-model="formData.user"
                           placeholder="请输入用户名"
                           size="large">
                    <Icon type="ios-person-outline"
                          slot="prepend"
                          size="20"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password"
                           v-model="formData.password"
                           placeholder="请输入密码"
                           size="large">
                    <Icon type="ios-lock-outline"
                          slot="prepend"
                          size="20"></Icon>
                    </Input>
                </FormItem>
                <FormItem style="text-align: center">
                    <Button :loading="btnLoading"
                            type="warning"
                            @click="handleSubmit"
                            size="large"
                            long>登录
                    </Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            btnLoading: false,
            formData: {
                user: "",
                password: ""
            },
            formRules: {
                user: [
                    {
                        required: true,
                        message: "用户名不能为空",
                        trigger: "blur"
                    }
                ],
                password: [
                    { required: true, message: "密码不能为空", trigger: "blur" }
                ]
            }
        };
    },
    methods: {
        handleSubmit() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    console.log(this.formData);
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.login-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../assets/img/login.jpg") no-repeat;
    background-size: cover;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 50vw;
    height: 300px;
    background: rgba(0, 0, 0, 0.4);
    h1 {
        margin-bottom: 30px;
        color: #fff;
    }
    /deep/ .ivu-input-wrapper {
        width: 40vw;
    }
    @media screen and (max-width: 600px) {
        width: 80vw;
        /deep/ .ivu-input-wrapper {
            width: 70vw;
        }
    }
}
</style>