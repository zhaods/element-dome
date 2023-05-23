<template>
    <div>
        <el-menu-item :index="basePath" v-if="!mingzi.child">
            <i :class="elicon"></i>
            <span slot="title">{{ mingzi.name }}</span>
        </el-menu-item>

        <el-submenu v-else :index="basePath">
            <template slot="title">
            <i :class="elicon"></i>
            <span>{{ mingzi.name }}</span>
            </template>

            <NavsItem v-for="child in mingzi.child" :key="child.url" :mingzi="child" :basePath="child.url" :elicon="child.elicon"  />

        </el-submenu>
    </div>
</template>

<script>
export default {
    name: 'NavsItem',

    data() {
        return {
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    props:['mingzi','basePath','elicon']
};
</script>

<style lang="scss" scoped>

</style>