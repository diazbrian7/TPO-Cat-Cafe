(function(){
    var formulario = document.getElementsByName('formulario')[0]
    elementos = formulario.elements
    boton = document.getElementById('btn')
    
    var validarNombre=function(e){
      if(formulario.name.value == 0){
        alert("Completa el nombre")
        e.preventDefault()
      }
    }
    var validarPersonas=function(e){
      if(formulario.personas.value<=0){
        alert("Tiene que haber una persona como mínimo")
        e.preventDefault()
      }         
    }
    var validarPersonas2 =function(e){
      if(formulario.personas.value > 6){
        alert("No puede haber más de 6 personas por mesa")
        e.preventDefault()
      }
    }
    
    var validar = function(e){
      validarNombre(e)
      validarPersonas(e)
      validarPersonas2(e)
    }
    formulario.addEventListener("submit",validar)

  }())
