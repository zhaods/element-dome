<template>
    <el-aside class="aside"  width="200px">
        <el-row class="tac">
            <el-col>
                <el-menu
                default-active="/index"
                class="el-menu-vertical-demo" router>
                    <el-menu-item index="/index">
                        <i class="el-icon-location"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="/stats">
                        <i class="el-icon-menu"></i>
                        <span slot="title">数据管理</span>
                    </el-menu-item>
                    <el-submenu index="3">
                        <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>信息管理</span>
                        </template>
                        <el-menu-item index="/wms/list">列表展示1</el-menu-item>
                        <el-menu-item index="/wms/list2">列表展示2</el-menu-item>
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