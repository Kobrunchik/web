<template>
  <header class="cs-header navbar-expand-lg"> <!--fixed-top navbar-expand-lg-->
    <div class="container">
      <div class="row">
        <div class="col-12 text-white text-xxl-center">
          <h1 class="content">My Blog</h1>
          <span class="subheading text-center "></span>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header"
}
</script>
<style scoped>

.cs-header {
  background-image: url('https://wallpaper.dog/large/5543237.jpg');
  background-repeat: no-repeat;
  background-position: top center;
  height: 500px;

}

.content{
  padding-top: 350px;
  text-align: center;
}
</style>