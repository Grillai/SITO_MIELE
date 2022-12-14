const navSlide = () =>{
    const burger  = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
   

    burger.addEventListener('click' , () =>{
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    document.querySelectorAll(".nav-links").forEach(n =>n.addEventListener("click", ()=>{
        nav.classList.remove('active');
        burger.classList.remove('active');
    }));
        
   
}


navSlide();

const toTop= document.querySelector(".Torna_Su");
    window.addEventListener("scroll",() =>{
        if(window.pageYOffset >300){
            toTop.classList.add("active")
        }
        else{
            toTop.classList.remove("active")
        }
})




$(document).ready(function() {
    animateDiv($('.Container_Ape'));
    animateDiv($('.Container_Ape_2'));

});

function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}