<template>
    <div class="content-box">
        <Aside></Aside>
        <div class="main-body">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    </div>
</template>


<script>
   import Header from './Header';
   import Main from './Main';
   import Footer from './Footer';
   import Aside from'./ASide';
   export default {
     components: {
       Header,
       Main,
       Footer,
       Aside
     }
   }
</script>
<style>
   .content-box{
     width:100%;
     height: 100%;
     overflow: hidden;
   }
   .main-body{
     float: left;
     height: 100%;
     width: calc(100% - 200px);
   }
</style>


