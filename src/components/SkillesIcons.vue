<template>
    <div class="sec-3--img_boxs">
        <div class="sec-3-img" v-for="(icon,index) in icons" :key="index">
            <img :src="icon.src" loading="lazy" alt class="brand-icon transition" />
            <p class="brand-text">{{icon.title}}</p>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            icons:[
                {
                    title:'Google',
                    src: require('../assets/images/search.svg'),
                },
                {
                    title:'HTML',
                    src: require('../assets/images/html.svg'),
                },
                {
                    title:'CSS',
                    src: require('../assets/images/css.svg'),
                },
                {
                    title:'JS',
                    src: require('../assets/images/js.svg'),
                },
                {
                    title:'VueJs',
                    src: require('../assets/images/vue.svg'),
                },
                {
                    title:'PHP',
                    src: require('../assets/images/php.svg'),
                },
                {
                    title:'Laravel',
                    src: require('../assets/images/laravel.svg'),
                },
                {
                    title:'WordPress',
                    src: require('../assets/images/wordpress-plain.svg'),
                },
                {
                    title:'VS Code',
                    src: require('../assets/images/vscode.svg'),
                },
                {
                    title:'Github',
                    src: require('../assets/images/github.svg'),
                },
                {
                    title:'Git',
                    src: require('../assets/images/git.svg'),
                },
                {
                    title:'Linux',
                    src: require('../assets/images/linux.svg'),
                },
                {
                    title:'Tailwind',
                    src: require('../assets/images/tall.svg'),
                },
                {
                    title:'Bootstrap',
                    src: require('../assets/images/boostrap.png'),
                },
                {
                    title:'PgSQL',
                    src: require('../assets/images/PgSQL.svg'),
                },
                {
                    title:'Mysql',
                    src: require('../assets/images/mysql.svg'),
                },
                {
                    title:'PgSQL',
                    src: require('../assets/images/PgSQL.svg'),
                },
                {
                    title:'Python',
                    src: require('../assets/images/python.svg'),
                },
                {
                    title:'SvelteJS',
                    src: require('../assets/images/svelte.svg'),
                },
                {
                    title:'firebase',
                    src: require('../assets/images/firebase.svg'),
                },
                {
                    title:'Webpack',
                    src: require('../assets/images/webpack.svg'),
                },
            ]
        }
    }
};
</script>

<style>
</style>