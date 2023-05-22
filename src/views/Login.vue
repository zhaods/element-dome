<template>
    <div>
        <h1>Element Dome</h1>
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
</template>

<script>
export default {
    name: 'Login',

    data() {
        return {
            ruleForm:{
                name:'admin',
                password:'123'
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