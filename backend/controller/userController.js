
//Metodo getUsers
const getUsers = (req, res) => {
    res.json({
        "msg": "Desde API/USUARIOS"
    })
};

//Metodo createUser
const createUser = (req, res) => {
    res.json({
        "msg": "Creando Usuario."
    });
}

export { getUsers, createUser };