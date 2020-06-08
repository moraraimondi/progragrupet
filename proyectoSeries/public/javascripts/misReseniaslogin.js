window.addEventListener('load' ,function(){

    var form = document.querySelector('#formlogin')
  
    form.addEventListener('submit', function(e){
  
      e.preventDefault()
      console.log("äd lorem ipsum")

      var email = document.querySelector('#email')
      var contra = document.querySelector('#contra')
   
      console.log(email.value);
  
  
      //validar que vengan datos
      if (email.value == "") {
       alert("Insert Your Email")
        
      }else if (contra.value == "") {
       alert('Insert your contra') 
        
      } else { 
             var form = document.querySelector('#formlogin')
        
            form.submit() 
       
            }
     })
    
})



