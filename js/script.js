Vue.config.devtools = true;

const email = new Vue({

    el: '#root',

    data: {

        totalEmail: 10,

        emails: [],
    },

    methods: {

        getRandomEmail () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                this.emails.push(res.data.response)
            }
            )},

    },

})
