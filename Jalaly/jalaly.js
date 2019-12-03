let moment = require('moment')

let date_h1 = document.getElementById("date");
date_h1.innerText = moment().format('dddd, MMMM D, YYYY');
