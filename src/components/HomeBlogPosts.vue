<template>
  <div class="section-7">
        <div class="sec-7 container w-container">
            <div class="sec-7_inner">
                <h1 class="sec_6-title">
                    Latest Blogs
                    <br />
                </h1>
                <div class="sec_7-box" v-if="!loading">

                    <div class="sec_7--item" v-for="(post,index) in posts" :key="index">
                        <router-link :to="{name:'SingleBlog',params: { slug: post.slug }}" class="sec_7--item_in w-inline-block">
                            <img
                                :src="post.image"
                                loading="lazy"
                                alt
                                class="sec_7--item-img"
                            />
                            <div class="sec_7--item_cont">
                                <p class="sec_7--item_date">
                                    <span class="author_box">By Ahmad Eyamin</span> • {{new Date(Date(post.date.seconds)).toLocaleDateString()}}
                                </p>
                                <p>

                                </p>
                                <h1 class="sec_7-text">{{post.title}}</h1>
                                <p class="sec_7-readmore">Read More ...</p>
                            </div>
                        </router-link>
                    </div>
                </div>
                <h2 v-else>
                    <center style="color:#fff">
                        Loading...
                    </center>
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
import db from '../firebase'

export default {
    name: "HomeBlogPosts",

    data() {
        return {
            posts:[],
            loading: true
        }
    },

    mounted() {

        db.collection('posts').limit(3).onSnapshot(snapshot=>{
            this.posts = []
            snapshot.forEach(data=>{
                console.log(data.data());
                this.posts.push(data.data())
            })

            this.loading = false
        })
    }
}
</script>

<style>

</style>