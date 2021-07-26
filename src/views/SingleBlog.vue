<template>
    <section class="single-article-section">
        <div class="single-article__wrapper">
            <div class="single-article-body" v-if="blog">
                <div class="single-article-header">
                    <div class="container">
                        <h2>{{ blog.title ?? "Empty" }}</h2>
                    </div>
                </div>
                <div class="container single-article-content">
                    <div class="single-article-left">
                        <div>
                            <img :src="blog.image" :alt="blog.title ?? ''" />
                        </div>
                        <div class="single-article-text">
                            {{ blog.body ?? "Empty" }}
                        </div>
                    </div>
                    <div class="single-article-right">
                        <div>
                            <div class="article-right-top">
                                <h2 class="article-right-title">
                                    Latest Article
                                </h2>
                                <ul>
                                    <li>
                                        <br />
                                        <center>Empty</center>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <h2>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <center>
                        Loading...
                    </center>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                </h2>
            </div>
        </div>
    </section>
</template>

<script>
import db from "../firebase";
export default {
    name: "SingleBlog",
    data() {
        return {
            blog: null,
        };
    },
    mounted() {
        db.collection("posts")
            .where("slug", "==", this.$route.params.slug)
            .limit(1)
            .get()
            .then(
                function (short) {
                    short.forEach((data) => {
                        this.blog = data.data();
                    });
                    //    console.log(blog);
                }.bind(this)
            );
    },
};
</script>
<style>
</style>