<template>
    <br>
    <div v-if="blog" class="container">

        <h2 class="text-center">{{blog.title ?? 'Empty'}}</h2>
        <hr>
        <img class='container' :src="blog.image" alt="">
        <hr>
        <div class="container">
            <p>
                {{blog.body??'Empty'}}
            </p>
        </div>
    </div>

    <br>
    <br>
</template>

<script>
import db from '../firebase'
export default {
    name: "SingleBlog",
    data() {
        return {
            blog:null,
        }
    },
    mounted(){
            db
            .collection('posts')
            .where('slug','==',this.$route.params.slug)
            .limit(1)
            .get()
            .then(function(short){
                short.forEach(data=>{
                    this.blog = data.data();
                })
            //    console.log(blog);
            }.bind(this))
    }

}
</script>
<style>

</style>