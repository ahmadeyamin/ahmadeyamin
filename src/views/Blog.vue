<template>
        <div class="blog-section-2">
            <div class="b-sec-2 container w-container">
                <div class="b-sec-2_inner">
                    <h1 class="b-s_title">Story, Blogs, Programing</h1>
                    <div class="b-sec-2_sub">This is some text inside of a div block.</div>
                </div>
            </div>
        </div>
        <div class="blog-section-3">
            <div class="b-sec-3 container w-container">
                <div class="b-sec-3_inner">
                    <div class="b-sec-3_top">
                        <ul role="list" class="top_cat_list w-list-unstyled">
                            <li class="blog_cat_item">
                                <a href="#" class="blog_cat_it_lnk active">All</a>
                            </li>
                            <li class="blog_cat_item">
                                <a href="#" class="blog_cat_it_lnk">Blog</a>
                            </li>
                            <li class="blog_cat_item">
                                <a href="#" class="blog_cat_it_lnk">PHP</a>
                            </li>
                            <li class="blog_cat_item">
                                <a href="#" class="blog_cat_it_lnk">Web</a>
                            </li>
                        </ul>
                    </div>
                    <div class="b-sec-3_blogs">
                        <div class="sec-3_blog" v-for="(post,index) in posts" :key="index">
                            <div class="sec-3_blog--inner">
                                <router-link :to="{name:'SingleBlog',params: { slug: post.slug }}"  class="blog_f_image w-inline-block">
                                    <img
                                        :src="post.image"
                                        loading="lazy"
                                        alt
                                        class="blog_f_image_src"
                                    />
                                </router-link>
                                <div class="blog_inf_sec">
                                    <p class="blog_cat_t">PHP</p>
                                    <p class="blog_p_date">{{new Date(Date(post.date.seconds)).toLocaleDateString()}}</p>
                                </div>
                                <router-link :to="{name:'SingleBlog',params: { slug: post.slug }}"  class="blog_title w-inline-block">
                                    <h1
                                        class="blog_title_text"
                                    >{{post.title ?? 'N\\A'}}</h1>
                                </router-link>
                                <div class="blog_text">
                                    <p class="blog_text_p">
                                        {{post.body.length > 240 ? post.body.substr(0,240)+'...' : post.body}}
                                    </p>
                                </div>
                                <router-link :to="{name:'SingleBlog',params: { slug: post.slug }}"  class="read_mored transition">Read Full Article</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import db from '../firebase'
export default {
    name: "Blog",

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
                this.posts.push(data.data())
            })

            this.loading = false
        })
    }
};
</script>

<style>
</style>