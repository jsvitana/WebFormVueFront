var app = new Vue({
    el: '#test',
    data: {
        message: ''
    },
    created () {
        fetch('https://api.myjson.com/bins/17mt8m')
        .then((resp) => resp.json()
        .then((data) => {
            this.message = data.emails[1]
            }))
    }
})

 