const config = require('../config');
const atbash = require('../public/atbash.js')

exports.encryptAtbash = async(req, res) => {
    let info = {
        encrypt: req.body.encrypt,
        decrypt: atbash.encrypt(req.body.encrypt)
    }
    res.render('atbash', {
        title: 'Atbash',
        "config": config,
        "info": info
    });
}
exports.decryptAtbash = async(req, res) => {
    let info = {
        encrypt: atbash.decrypt(req.body.decrypt),
        decrypt: req.body.decrypt
    }
    res.render('atbash', {
        title: 'Atbash',
        "config": config,
        "info": info
    });
}

exports.decryptRunning = async(req, res) => {
    let info = new Info({
        decrypt: req.body.decrypt
    });
}

exports.home = async(req, res) => {
exports.decryptAtbash = async (req, req) => {
    let info = new Info({
        encrypt : req.body.en
    })
}

exports.home = async (req, res) => {
    res.render('home', {
        title: 'C1PH3RS',
        "config": config
    });
};

exports.game = async(req, res) => {
    res.render('game', {
        title: 'Games',
        "config": config
    })
};

exports.ciphers = async(req, res) => {
    res.render('ciphers', {
        title: 'Collection of Ciphers',
        "config": config
    })
};

exports.atbash = async(req, res) => {
    res.render('atBash', {
        title: 'Atbash Cipher',
        "config": config
    })
};

exports.caesar = async(req, res) => {
    res.render('caesar', {
        title: 'Caesar Cipher',
        "config": config
    })
};
