const UserModel = require('../models/usersModel');
// const {usersModel} = require('../models/indexModel');

const setAsistencia = async function (req, res) {
    let reqBody = req.body;
    res.send(reqBody);
    // try {
    //     const newUser = await UserModel.create(reqBody);
    //     console.log(newUser.dni);
    //     res.send(newUser);
    // } catch (error) {
    //     res.send(error);
    // }
}


/** ESTA ES UNA MANERA DE HACER LAS CONSULTAS, USANDO EL MODELO */
// const getAsistencias = (req, res) => {
//     UserModel.findAll()
//         .then(users => {
//             res.send(users);
//         })
//         .catch(err => {
//             res.send(err);
//         });
// };

/** ESTA ES OTRA MANERA DE HACER LAS CONSULTAS, USANDO EL MODELO */
const getAsistencias = async (req, res) => {
    try {
        const users = await UserModel.findAll();
        res.send(users);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {setAsistencia, getAsistencias};