let arr;
var jsonData;
var emailCycle = 1;


var app = new Vue({
    el: '#test',
    data: {
        message: ''
    },
    created () {
        fetch('https://api.myjson.com/bins/17mt8m')
        .then((resp) => resp.json()
        .then((data) => {
            jsonData = data;
            this.message = data.emails[0]
            }))
    }
})

function change() {
    app.message = jsonData.emails[emailCycle];

    if(emailCycle == jsonData.emails.length -1) {
        emailCycle = 0;
    }
    else {
        emailCycle+=1;
    }
}