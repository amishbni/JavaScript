let moment = require('moment-jalaali')

let today = moment()

let date_h1 = document.getElementById("date");
let date_jalaly_h1 = document.getElementById("date-jalaly");

date_h1.innerText = today.format("dddd, MMMM D, YYYY");
today.loadPersian({
    usePersianDigits: true,
    dialect: 'persian-modern'
})
date_jalaly_h1.innerText = today.format("jdddd, jMMM jD, jYYYY");
