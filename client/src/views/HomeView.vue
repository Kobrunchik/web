<script>
import TheWelcome from '@/components/TheWelcome.vue'
//import Article from '@/components/ArticleView.vue';
import Cards from '@/components/Cards.vue'

//export default {



export default {
  components:{
    Cards
    //Navbar
  },



  data() {
    return{
      count: 1
    }
  },

  methods:{
    onClick(){
      this.count++;
    }
  }
}

</script>

<template>


  <Cards/>

</template>
