let slider = document.querySelector(".slider");
let left = document.querySelector('.left');
let right = document.querySelector('.right')
let image = document.querySelectorAll(".image")
let bottom = document.querySelector(".radioInput")


let x = 1
let len = image.length

setInterval(()=>{
    if( x  < len){
        slider.style.transform = `translateX(-${400*x}px)`;
        x +=1 ;
        console.log(x);
    }else{
        slider.style.transform = `translateX(-${0}px)`;
        x = 1
    }
    resetBtn()
    buttons[x-1].style.opacity=  "1"
},5000)



// for (let i =0; i<len ; i++){
//     let dev = document.createElement('div');
//     dev.classList.add("button");
//     bottom.appendChild(dev);
// }
image.forEach((e)=>{
let d = document.createElement('div')
let image = document.createElement('img')
image.src = e.src 
d.appendChild(image)
d.classList.add("button")
bottom.appendChild(d)
})

let buttons = document.querySelectorAll('.button')

const resetBtn = ()=>{
    buttons.forEach(btn=>{
        btn.style.opacity = ".5"
    })
}

buttons.forEach((btn,index) => {
    btn.addEventListener("click",()=>{
        resetBtn()
        slider.style.transform = `translateX(-${(index)*400}px)`;
        x = index + 1 
        // btn.style.background = "white"
        btn.style.opacity = "1"

    })
});
buttons[0].style.backgroundColor = "white"

left.addEventListener("click" , ()=>{
    if(x ==1){
        slider.style.transform = `translateX(-${400*(len-1)}px)`
        x=len
        console.log(x ,400*(len-1) );
    }else{
        ex =(x-2)*400
        slider.style.transform = `translateX(-${ex}px)`
        x-=1
        console.log(ex);
    }
    resetBtn()
    // buttons[x-1].style.backgroundColor= "white"
})
right.addEventListener("click" , ()=>{
    if (x <len){
        slider.style.transform = `translateX(-${400*x}px)`
        x+=1
    }else{
        slider.style.transform = `translateX(0px)`
        x = 1
    }
    resetBtn()
    // buttons[x-1].style.backgroundColor= "white"
    buttons[x-1].style.opacity = "1"
})


