const validate = (formAuth) =>{

    const error = {}

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formAuth.email)) error.email = 'Email invalido'

    if(formAuth.password.lenght > 12) error.password = 'La contraseña no debe tener mas de 12 caracteres'
    
    if(formAuth.name.lenght > 30) error.name = 'El nombre no debe tener mas de 30 caracteres'

    return error
    
}

export default validate