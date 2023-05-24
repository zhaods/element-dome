<template>
    <div class="breadcumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="v.path" v-for="(v,i) in list" :key="i">
                {{v.meta.title}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>


<script>
export default {
    name: 'VueBreadcrumb',

    data() {
        return {
            list:[]
        };
    },

    mounted() {
    },

    created(){
        this.list=this.$route.matched;

    },

    methods: {
        
    },
    watch:{  //监听
        $route(to,from){
            //console.log(to);   //to $route对象
            let matched = to.matched;
            this.list = matched;
        }
    }
};
</script>

<style lang="scss" scoped>

</style>