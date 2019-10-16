let arr;


var app = new Vue({
    el: '#test',
    data: {
        message: ''
    },
    created () {
        fetch('https://api.myjson.com/bins/17mt8m')
        .then((resp) => resp.json()
        .then((data) => {
            arr = data.emails;
            this.message = data.emails[0]
            }))
    }
})

function change() {
    app.message.email = "this";
}