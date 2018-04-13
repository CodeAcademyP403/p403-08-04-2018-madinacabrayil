var element = document.querySelectorAll("ul li")
func();

function func(){
    for( var i=0; i < element.length; i++){
        element[i].addEventListener("click",function(){
        for(var i=0; i< element.length; i++){
            element[i].children[0].classList.remove("active")
        }
        this.children[0].classList.add("active")
           
    })   
    }
}
