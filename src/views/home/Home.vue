<template>
    <div class="home" id="module">
        <el-container>
            <el-header>
                
                <el-col class="logoleft">
                    <div class="logo" title="首页"></div>
                </el-col>
                <el-button type="primary" class="exit" @click="goBack()">退出</el-button>
                <Breadcrumb />

            </el-header>
            <el-container>
                <Nav />
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>

import '../../assets/css/index.css'
import Nav from './Navs';
import Breadcrumb from './Breadcrumb';
export default {
    components: { 
      Nav,
      Breadcrumb
    },
    name: 'WorkspaceJsonHome',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style>

.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
    color: #aaa;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
    color: #fff;
}
#module .breadcumb{
  position: absolute;
  left: 230px;
  top:5px;
}
#module .el-container .el-header{
    border: none;
}
.logoleft {
    width: 200px;
}
.logo {
    padding-left:20px;
    width: 200px;
    height: 60px;
    background: url("~@/assets/logo.png") no-repeat center;
    cursor: pointer;
}
 .el-header, .el-footer {
    background-color: #000;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>