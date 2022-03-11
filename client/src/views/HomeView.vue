<script>
import TheWelcome from '@/components/TheWelcome.vue'
import Article from '@/components/Article.vue';
import Preview from '@/components/Preview.vue';
import Cards from '@/components/Cards.vue'

//export default {



export default {
  components: {Preview, Article, Cards},
  data() {
    return {
      articles: [
        {
          id: 1,
          image: 'https://picsum.photos/500/499',
          title: "Title",
          date: new Date(),
          text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
        },
        {
          id: 2,
          image: 'https://picsum.photos/499/501',
          title: "Title",
          date: new Date(),
          text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
        },
        {
          id: 3,
          image: 'https://picsum.photos/501/501',
          title: "Title",
          date: new Date(),
          text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
        },
      ]
    }
  }

}

</script>

<template>


  <div class="row">

    <div class="col-lg-11 offset-lg-2   pb-5 pt-3">
      <Cards/>
    </div>
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2  pb-3 pt-3" v-for="article in articles">
      <Preview :id="article.id" :title="article.title" :date="article.date" :text="article.text" :image="article.image"></Preview>
    </div>
  </div>


</template>
