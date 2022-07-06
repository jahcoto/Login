import userModel from "../models/userModel.js";
//Metodo getUsers
const getUsers = (req, res) => {
    res.json({
        "msg": "Desde API/USUARIOS"
    })
};

//Metodo createUser
const createUser = async (req, res) => {//Indicamos que la funcion tiene que ser asincrona
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

export { getUsers, createUser };