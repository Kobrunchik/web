<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>New Article</h3>
      </div>
      <hr/>
      <div class="card-text">
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Title</label>
            <input v-model="article.title" type="text" class="form-control" placeholder="Title"/>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Text</label>
            <textarea v-model="article.text" class="form-control" rows="5"></textarea>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Image</label>
            <input @change="onImage" class="form-control" type="file" id="file">
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button type="button" @click="send" class="btn float-end btn-primary"><em class="bi-check"/>Save and Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewArticle",
  data() {
    return {
      article: {
        title: null,
        text: null,
        image: null
      }
    }
  },
  methods: {
    onImage(e) {

    },
    async send() {
      try {
        console.log(this.article);
        await fetch('http://localhost:3000/articles',
            {
              method: 'POST',
              body: JSON.stringify(this.article),
              headers:{
                'Content-type':'application/json'
              }
            }
        )
        alert("Saved!");
      } catch (e) {
        alert(e);
      }
    }
  }
}
</script>

<style scoped>

</style>
