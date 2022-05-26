const setAsistencia = function (req, res) {
    res.send('setAsistencia desde controller');
}
const getAsistencias = (req, res) => {
    res.send('getAsistencias desde controller');
};

module.exports = {setAsistencia, getAsistencias};