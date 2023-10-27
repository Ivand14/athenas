const validate = (formAuth) =>{

    const error = {}

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formAuth.email)) error.email = 'Email invalido'

    if(formAuth.password.length > 12  ) error.password = 'La contraseña no debe tener mas de 12 caracteres'

    if(!formAuth.password) error.password = 'Debes ingresar una contraseña'
    

    return error
    
}

export default validate