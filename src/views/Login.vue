<template>
    <div class="login">
        <h1 class="login-title">Element Dome</h1>
      <div class="login-content">
        <div class="login-main">
            <div class="login-container">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Login',

    data() {
        return {
            ruleForm:{
                name:'admin',
                password:'123'
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
                ],
            }
        };
    },

    mounted() {
        
    },

    methods: {
        submitForm:function(){
            this.$router.push('/Home')
        }
    },
};
</script>

<style lang="scss" scoped>

</style>