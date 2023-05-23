<template>
    <el-aside class="aside"  width="200px">
        <el-row class="tac">
            <el-col>
                <!-- exact 精确匹配路由 -->
                <el-menu
                :default-active="$route.path" exact
                class="el-menu-vertical-demo" router>
                    <NavsItem v-for="v in items" :key="v.url" :mingzi="v" :basePath="v.url" :elicon="v.elicon"  />
                </el-menu>
            </el-col>
        </el-row>
    </el-aside>
</template>
<script>
import NavsItem from "./NavsItem";
export default {
    name: 'WorkspaceJsonNav',
    components: { 
        NavsItem
    },
    data() {
        return {
            items:[
                {
                    "name":'首页',
                    "url":'/index',
                    "elicon":'el-icon-location'
                },{
                    "name":'数据管理',
                    "url":'/stats',
                    "elicon":'el-icon-menu'
                },{
                    "name":'信息管理',
                    "url":'/wms',
                    "elicon":'el-icon-document',
                    child:[
                        {
                            "name":'列表展示1',
                            "url":'/wms/list',
                            "elicon":'el-icon-s-order'
                        },{
                            "name":'列表展示2',
                            "url":'/wms/list2',
                            "elicon":'el-icon-s-fold'
                        }
                    ]
                }
            ]
        };
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>