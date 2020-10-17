<template>
    <header data-collapse="medium" role="banner" class="navbar w-nav">
        <div class="container nav w-container">
            <router-link to="/" aria-current="page" class="logo w-nav-brand w--current">
                <div class="logo-text">Eyamin {{size.width}}</div>
            </router-link>
            <transition name="slide">
                <nav role="navigation" class="navmenu w-nav-menu" v-if="NavOpen">
                    <a
                        href="#"
                        @click.prevent="toggleMenu"
                        class="crossBtn"
                        v-bind:class="{ 'active' : toggleMenu }"
                    >X</a>
                    <div class="nav-group">
                        <a href="#portfolio" class="nav-link transition w-nav-link">Portfolio</a>
                        <router-link to="/blog" class="nav-link transition w-nav-link"><span @click="toggleMenu">Blog</span></router-link>
                        <a href="#" class="nav-link transition w-nav-link">About</a>
                        <a href="#" class="nav-link transition w-nav-link">Contact</a>
                    </div>
                    <div class="link-group">
                        <a href="#" class="nav-link extra transition w-nav-link">Let&#x27;s Talk</a>
                        <a
                            href="https://github.com/ahmadeyamin"
                            target="_blank"
                            class="nav-link btns icon transition w-nav-link"
                        ></a>
                        <a
                            href="https://facebook.com/ahmadeyamin"
                            target="_blank"
                            class="nav-link btns icon transition fb w-nav-link"
                        ></a>
                    </div>
                </nav>
            </transition>
            <div class="menu-button w-nav-button" @click.prevent="toggleMenu">
                <div class="w-icon-nav-menu"></div>
            </div>
        </div>
    </header>


    <router-view />

    <footer id="footer" class="footer">
        <div class="footer_main container w-container">
            <div class="footer_flex_boxes">
                <div>
                    <h2 class="footer_hading">
                        Lat&#x27;s make something amazing
                        <br />together.
                        <br />
                        <br />Start By
                        <a
                            href="https://wa.me/+8801999050360"
                            target="_blank"
                            class="say_hello"
                        >Saying Hi</a>
                    </h2>
                </div>
                <div>
                    <h2 class="footer_hading">Links</h2>
                    <ul role="list" class="w-list-unstyled">
                        <li>
                            <a href="#" class="footer_link">Blog</a>
                        </li>
                        <li>
                            <a href="#" class="footer_link">Contact Us</a>
                        </li>
                        <li>
                            <a href="#" class="footer_link">Team Info</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer_c_text">Copyright © 2020. All rights reserved.</div>
        </div>
    </footer>
</template>


<script>
export default {
    data: function() {
        return {
            NavOpen: false,
            size: {
                width: null
            }
        };
    },

    mounted() {
        this.resizeNav();
        this.toggleMenu();
        window.addEventListener("resize", this.resizeNav);
    },
    methods: {
        toggleMenu: function() {
            if (this.size.width < 992) {
                this.NavOpen = !this.NavOpen;
            }
        },

        resizeNav: function() {
            this.size.width = window.innerWidth;
            if (this.size.width > 992) {
                this.NavOpen = true;
            }
        }
    }
};
</script>

