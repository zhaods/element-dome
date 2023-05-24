<template>
    <div>
        <template>
            <el-carousel :interval="2000" type="card" height="200px">
                <el-carousel-item v-for="item in items" :key="item">
                    <img :src="item" alt="" />
                </el-carousel-item>
            </el-carousel>
        </template>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonIndex',

    data() {
        return {
            items:[
                require('@/assets/img/1.png'),
                require('@/assets/img/2.png'),
                require('@/assets/img/3.png'),
                require('@/assets/img/4.png'),
                require('@/assets/img/5.png'),
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>