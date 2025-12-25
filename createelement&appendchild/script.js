var btn = document.querySelector('button');
var main = document.querySelector('main');

var arr = ["Hey! I am Sonali", "Sheryians is Best", "Js Lover", "HTML is good"]

btn.addEventListener('click',function(){
    // var div = document.createElement('div')

    var h1 = document.createElement('h1')

    var a = Math.floor(Math.random()*arr.length)
    var x = Math.random()*80
    var y = Math.random()*80
    var rot = Math.random()*360
    var scl = Math.random()*3

    h1.innerHTML = arr[a]
    h1.style.position = 'absolute'
    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.rotate = rot+'deg'


    // div.style.height = '50px'
    // div.style.width = '50px'
    // div.style.backgroundColor = 'blue'

    // var x = Math.random() * 100
    // var y = Math.random() * 100 
    // var c1 = Math.floor(Math.random() * 256)   
    // var c2 = Math.floor(Math.random() * 256)
    // var c3 = Math.floor(Math.random() * 256)
    // div.style.position = 'absolute'

    // div.style.top = y+'%'
    // div.style.left = x+'%'
    // div.style.backgroundColor = `rgb(${c1},${c2},${c3})`

    main.appendChild(h1)
})