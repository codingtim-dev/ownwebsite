window.addEventListener("scroll", function(){

    var dev_intro = this.document.querySelector(".dev-intro");

    var position1 = dev_intro.getBoundingClientRect();

    if(position1 < window.innerHeight && position1 >= 0){

        this.document.getElementById("dev-text").style.opacity = "1"
    }

})

function myFunction() {

    

    var x = document.getElementById("navbar");
    if(x.className === "sticky"){
        x.className += " responsive";
        
    }else{
        x.className = "sticky";
        
    }
}

function resizenav() {

    var x = document.getElementById("navbar");
    x.className = "sticky"
}