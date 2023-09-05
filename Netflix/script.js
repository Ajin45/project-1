 
$(document).ready(function(){
    $("#plus").click(()=>{
        $("#Main").toggle();
    }) 
    })
    
   
    $(document).ready(function(){
    $("#plus-1").click(()=>{
        $('#Main-1').toggle()
    })
})


var plus=document.getElementById("plus")

var show=function(plus){
    plus.classList.toggle("fa-plus")
    plus.classList.toggle("fa-close")
}

$(document).ready(()=>{
    $("#form").validate({
        rules:{
            email:{
            required:true,
            email:true }
            
        },
        Messages:{
            email:{
            required:"enter valid email"
            }
        }
    
    })
})