const setAsistencia = function (req, res) {
    let reqBody = req.body;
    res.send(reqBody);
}
const getAsistencias = (req, res) => {
    res.send('getAsistencias desde controller');
};

module.exports = {setAsistencia, getAsistencias};