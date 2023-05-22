<template>
    <el-aside class="aside"  width="200px">
        <el-row class="tac">
            <el-col>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo">
                    <el-menu-item index="/index">
                        <i class="el-icon-location"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">数据管理</span>
                    </el-menu-item>
                    <el-submenu index="3">
                        <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>信息管理</span>
                        </template>
                        <el-menu-item index="1-3">列表展示1</el-menu-item>
                        <el-menu-item index="1-4-1">列表展示2</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </el-aside>
</template>
<script>
export default {
name: 'WorkspaceJsonNav',

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