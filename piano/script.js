const allKeys = document.querySelectorAll(".key");

allKeys.forEach((key,i)=>{
    
    key.onclick=()=>{
        
        const music_url = "sounds/key"+i+".mp3";
        console.log(music_url)
        const audio = new Audio(music_url);
        audio.play();
    }
})


// const allKeys = document.querySelectorAll(".key");

// allKeys.forEach((key,i)=>{
    
//     key.addEventListener('click',function(){
        
//         const music_url = "sounds/key"+i+".mp3";
//         console.log(music_url)
//         const audio = new Audio(music_url);
//         audio.play();
// })
// })