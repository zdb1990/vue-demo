<template>
    <div class="aside-box">
        <el-menu class="el-menu-vertical-demo" :default-active="this.$router.path" router>
        <el-menu-item index="/render">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="2" >
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
   export default {
       data(){
            return {
                isCollapse: true
            };
       },
       methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
       }
   }
</script>
<style>
  .aside-box{
      height: 100%;
      float: left;
      width:200px;
      background: #000000;
  }
  .el-menu-vertical-demo{
      background: #000000;
  }
  .el-menu{
    border-right: none;
  }
</style>