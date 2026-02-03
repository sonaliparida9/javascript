// mouse move
// var main = document.querySelector('.main')
// var cursor = document.querySelector('#cursor');

// main.addEventListener('mousemove',function(dets){
    
//     cursor.style.left =dets.x + 'px';
//     cursor.style.top = dets.y + 'px';
// })

// dblclick

// mouseleave
// mouseenter

// var chutki = document.querySelector("img");
// var msg = document.querySelector('h2 span');
// var body = document.body;

// chutki.addEventListener('mouseenter',function(){
//     msg.innerHTML = 'chutkii se door ho jaaaa'
//     body.style.backgroundColor = 'red';
// })
// chutki.addEventListener('mouseleave',function(){
//     msg.innerHTML = 'Good! ab door hi rahena '
//     body.style.backgroundColor = 'black';
// })


// keydown
var body = document.body
var h1 = document.querySelector('h1')
body.addEventListener('keydown',function(dets){
    h1.innerHTML = dets.code
})