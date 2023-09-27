const validate = (formAuth) =>{

    const error = {}

    if(!formAuth.phone) error.phone = 'Debes ingresar un celular'

    if(formAuth.phone > 10) error.phone = 'El celular no debe tener mas de 10 caracteres'

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formAuth.email)) error.email = 'Email invalido'

    if(formAuth.password.length > 12  ) error.password = 'La contraseña no debe tener mas de 12 caracteres'

    // if(!formAuth.password) error.password = 'Debes ingresar una contraseña'
    
    if(formAuth.name.length > 30 ) error.name = 'El nombre no debe tener mas de 30 caracteres'

    if(!formAuth.name) error.name = 'Debes ingresar un nombre'

    return error
    
}

export default validate