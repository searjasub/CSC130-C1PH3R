const config = require('../config');

exports.home = async (req, res) => {
    res.render('home', {
        title : 'Home',
        "config" : config
    });
};
