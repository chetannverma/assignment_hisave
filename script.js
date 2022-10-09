function changeImg1() {
    let img = document.getElementById("img1")
    let tick = document.getElementById("tick1")
    img.src = `https://picsum.photos/200/200?random=${Math.random()}`;
    tick.style.display = "block";
    img.style.display = "none";
    setTimeout(() => {
        tick.style.display = "none"
        img.style.display = "block"
    }, 1000)
    
}