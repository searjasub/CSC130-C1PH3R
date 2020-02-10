const config = require('../config');

exports.decryptAtbash = async (req, res) => {
    let info = new Info({
        decrypt : req.body.decrypt
    });
}

exports.decryptRunning = async (req, res) => {
    let info = new Info({
        decrypt: req.body.decrypt
    });
} 

exports.home = async (req, res) => {
    res.render('home', {
        title : 'C1PH3RS',
        "config" : config
    });
};

exports.game = async (req, res) => {
    res.render('game', {
        title : 'Games',
        "config" : config
    })
};

exports.ciphers = async (req, res) => {
    res.render('ciphers', {
        title : 'Collection of Ciphers',
        "config" : config
    })
};

exports.atbash = async (req, res) => {
    res.render('atBash', {
        title : 'Atbash Cipher',
        "config" : config
    })
};
