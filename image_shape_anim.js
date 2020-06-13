window.addEventListener("scroll", function(){


    var dev_intro = this.document.querySelector(".dev-intro");
    var development = this.document.querySelector(".development");
    var gamedevelopment = this.document.querySelector(".gamedevelopment");
    var deeplearning = this.document.querySelector(".deeplearning");
    var projects = this.document.querySelector(".projects");
    var aboutme = this.document.querySelector(".aboutme-intro");
    var hobbies = this.document.querySelector(".hobbies");

    var position1 = dev_intro.getBoundingClientRect();
    var position2 = development.getBoundingClientRect();
    var position3 = gamedevelopment.getBoundingClientRect();
    var position4 = deeplearning.getBoundingClientRect();
    var position5 = projects.getBoundingClientRect();
    var position6 = aboutme.getBoundingClientRect();
    var position7 = hobbies.getBoundingClientRect();

    if(position1.top < window.innerHeight && position1.bottom >= 0){
        this.document.getElementById("dev-img").style.transition = "transform 2s ease"
        this.document.getElementById("dev-shape").style.transition = "transform 2s ease"
        this.document.getElementById("dev-img").style.transform = "translateX(0%)"
        
        this.document.getElementById("dev-shape").style.transform = "translateY(0%)"
    };

    if(position2.top < window.innerHeight && position2.bottom >= 0){
        this.document.getElementById("development-img").style.transition = "transform 2s ease"
        this.document.getElementById("development-shape").style.transition = "transform 2s ease"

        this.document.getElementById("development-img").style.transform = "translateX(0%)"
        this.document.getElementById("development-shape").style.transform = "translateX(0%)"
    }

   if(position3.top < window.innerHeight && position3.bottom >= 0){
    this.document.getElementById("game-img").style.transition = "transform 2s ease"
    this.document.getElementById("game-shape").style.transition = "transform 2s ease"
    this.document.getElementById("game-img").style.transform = "translateX(0%)"
    
    this.document.getElementById("game-shape").style.transform = "translateY(0%)"
    };

    if(position4.top < window.innerHeight && position4.bottom >= 0){
        this.document.getElementById("deep-img").style.transition = "transform 2s ease"
        this.document.getElementById("deep-shape").style.transition = "transform 2s ease"
        this.document.getElementById("deep-img").style.transform = "translateX(0%)"
        
        this.document.getElementById("deep-shape").style.transform = "translateY(0%)"
        };

    if(position5.top < window.innerHeight && position5.bottom >= 0){
            this.document.getElementById("projects-img").style.transition = "transform 2s ease"
            this.document.getElementById("projects-shape").style.transition = "transform 2s ease"
            this.document.getElementById("projects-img").style.transform = "translateX(0%)"
            
            this.document.getElementById("projects-shape").style.transform = "translateY(0%)"
        };

        if(position6.top < window.innerHeight && position6.bottom >= 0){
            this.document.getElementById("aboutme-img").style.transition = "transform 2s ease"
            this.document.getElementById("aboutme-shape").style.transition = "transform 2s ease"
            this.document.getElementById("aboutme-img").style.transform = "translateX(0%)"
            
            this.document.getElementById("aboutme-shape").style.transform = "translateY(0%)"
        }
        if(position7.top < window.innerHeight && position7.bottom >= 0){
            this.document.getElementById("hobbies-img").style.transition = "transform 2s ease"
            this.document.getElementById("hobbies-shape").style.transition = "transform 2s ease"
            this.document.getElementById("hobbies-img").style.transform = "translateX(0%)"
            
            this.document.getElementById("hobbies-shape").style.transform = "translateY(0%)"
        }
})