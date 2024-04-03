function validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if(values.correo === ""){
        error.correo = "El campo esta vacio"
    }
    else if(!email_pattern.test(values.correo)){
        error.correo = "El correo es incorrecto"
    }else{
        error.correo = ""
    }

    if(values.contraseña === ""){
        error.contraseña = "El campo esta vacio"
    }
    else if(!password_pattern.test(values.contraseña)){
        error.contraseña = "Contraseña incorrecta"
    }else{
        error.contraseña = ""
    }
    return error;
}

export default validation;