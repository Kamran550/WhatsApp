var firebaseConfig = {
    apiKey: "AIzaSyAer7a-FvXhdPlrewwht4klNfwiUm1ZP98",
    authDomain: "fkbootcamp.firebaseapp.com",
    projectId: "fkbootcamp",
    storageBucket: "fkbootcamp.appspot.com",
    messagingSenderId: "407529317160",
    appId: "1:407529317160:web:d2096a7f94481386fb661d"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database()
var name = prompt("Adiniz?")
var ad;
var text;

var count = 0
$("#send").on('click', function (e) {
    e.preventDefault()

    var text = $("#text").val().trim()

   
db.ref().update({
    name:name,
    text:text
})


$("#text").val('')
})


db.ref().on('value',function(snapshot){

    // var p =$("<p>")
    // p.append(snapshot.val().name + ":" + snapshot.val().text + '<hr>')
    // p.addClass('paraqraf')
    // $(".chat").append(p)
var message = $(`<div data-id='${count++}' class='paraqraf'> ${snapshot.val().name + ":" + snapshot.val().text}</div> <br> `)
    $(".chat").append(message)
    $(".chat").scrollTop($(".chat")[0].scrollHeight);    
})


$(document).on('click','.paraqraf',function(){
    // var data  = $(this).attr('data-id')
    // console.log(data)

    $(this).text("Bu mesaj silindi...")
    db.ref().remove()
})


