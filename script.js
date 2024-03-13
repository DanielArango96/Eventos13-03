let eventos =['click','dblclick','mouseenter','mouseout']

let btnRegistrar= document.getElementById('btnRegistrar')
btnRegistrar.addEventListener(eventos[1],resgistrarUsuario)


function resgistrarUsuario(){
console.log('Usuario registrado correctamente...')
}
