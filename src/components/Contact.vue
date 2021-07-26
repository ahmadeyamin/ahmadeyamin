<template>
    <form
        id="contact-form"
        name="contact-form"
        data-name="Contact Form"
        class="con_form_inner"
        @submit.prevent="saveContactForm"
        v-if="!isSubmited"
    >
        <div class="cont_name-sec">
            <input
                type="text"
                class="contact_box_input transition w-input"
                maxlength="256"
                name="f-name"
                data-name="f-name"
                placeholder="First Name"
                id="f-name"
                v-model='contact.first_name'
                required
            />
            <input
                type="text"
                class="contact_box_input transition l-name w-input"
                maxlength="256"
                name="L-Name"
                data-name="L Name"
                placeholder="Last Name"
                id="L-Name"
                v-model='contact.last_name'
                required
            />
        </div>
        <input
            type="email"
            class="contact_box_input transition w-input"
            maxlength="256"
            name="email"
            data-name="email"
            placeholder="Your Email"
            v-model="contact.email"
            id="email"
            required
        />
        <input
            type="text"
            class="contact_box_input transition w-input"
            maxlength="256"
            name="subjet"
            data-name="subjet"
            v-model="contact.subjet"
            placeholder="Subject"
            id="subjet"
            required
        />
        <select
            class="contact_box_input transition"
            style="padding: 13px 7px"
            v-model="contact.range"
            placeholder="Select Project Range"
        >
            <option value="" selected>Select Project Range</option>
            <option value="100-1000">100$ - 1000$</option>
            <option value="1001-10000">1001$ - 10000$</option>
            <option value="10001-100000">10001$ - 100000$</option>
        </select>
        <textarea
            placeholder="Your Messages"
            maxlength="5000"
            id="msg"
            name="msg"
            required
            v-model="contact.message"
            data-name="msg"
            class="contact_box_input transition w-input"
        ></textarea>
        <input
            type="submit"
            value="Submit"
            data-wait="Please wait..."
            class="cont_submit w-button"
            :disabled="isLoading ? true : false"
        />
    </form>
    <div v-else>
        <h2 style="color:#fff">Form Information Submited Successfully</h2>
    </div>
    <div v-if="HasError">
        {{HasError}}
    </div>
</template>

<script>
import db from '../firebase'
export default {
    template:'ContactForm',

    data() {
        return {
            contact:{
                first_name: null,
                last_name: null,
                email: null,
                subjet: null,
                range: "",
                message: null,
                
            },
            isSubmited: false,
            isLoading: false,
            HasError: null
        }
    },

    methods:{
        saveContactForm() {
            this.isLoading = true

            db.collection('contacts').doc().set({
                first_name: this.contact.first_name,
                last_name: this.contact.last_name,
                email: this.contact.email,
                subjet: this.contact.subjet,
                range: this.contact.range,
                message: this.contact.message,
            })
            .then(function() {
                this.isLoading = false
                this.isSubmited = true
            }.bind(this))
            .catch(function(error) {
                this.HasError = "Error writing document: ", error
            }.bind(this))
            ;
        }
    }
};
</script>

<style>
</style>