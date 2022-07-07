import userModel from "../models/userModel.js";
//Metodo getUsers
const getUsers = (req, res) => {
    res.json({
        "msg": "Desde API/USUARIOS"
    })
};

//Metodo createUser
const createUser = async (req, res) => {//Indicamos que la funcion tiene que ser asincrona

    //Comprobar si ya hay un usuario con el mismo email
    const { userEmail } = req.body;//Este metodo de asignacion, se llama desestructuracion, req.body tiene el campo email entre otra informacion
    const user = await userModel.findOne({userEmail})//Se realiza una consulta a MONGO, el metodo findone busca el primer registro que encuentre con el campo ingresado entre {}
    if (user){//Validamos si ya hay un registro con el email que digitamos, si es asi mandamos un mensaje de error
        res.json({
            "msg": "El email digitado ya se encuentra en uso!"
        });
        return;
    }else{//Si el email es nuevo realizamos el proceso para guardar el usuario en MONGO
        try {
            const user = new userModel(req.body);//Declaramos la constante user y le asignamos el modelo, el cual recibe el req.body(datos desde la pagina web)
            const userSaved = await user.save();//Declaramos la constante userSaved el cual va a guardar los datos en la BD. Si la insercion no produjo error, devolvera un json con los datos guardados
            res.json({
                //"msg": `Creando Usuario de: ${name}`  
                "msg": `Usuario: ${userSaved.name}  fue creado con exito!`//Devolvemos al postman o pagina web el json con el resultado de la insercion
            });    
        } catch (error) {
            res.json({
                "msg": `Error creando al usuario: ${error}`//Si hubo un error lo devolvemos al postman o pagina web  
            });
        }
    }    
}

export { getUsers, createUser };