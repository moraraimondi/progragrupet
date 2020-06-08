window.addEventListener('load' ,function(){

    var form = document.querySelector('#formlogin')
  
    form.addEventListener('submit', function(e){
  
      e.preventDefault()
      console.log("äd lorem ipsum")
  
      var nombre = document.querySelector('#name')
      var email = document.querySelector('#email')
      var contra = document.querySelector('#contra')
   
  
  
      console.log(nombre.value);
      console.log(email.value);
  
  
      //validar que vengan datos
      if (nombre.value == "") {
       alert("Insert Your User Name")
        
      }else if (email.value == "") {
       alert('Insert your email') 

      }else if (contra.value == "") {
          alert("Insert you Password")
        
      } else {
        var form = document.querySelector('#formlogin')
  
        form.submit() 
      }
  
    })
})