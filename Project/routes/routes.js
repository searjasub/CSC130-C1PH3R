const config = require('../config');
const atbash = require('../public/atbash.js');
const running = require('../public/runningkey.js');


exports.encryptAtbash = async (req, res) => {
    let info = {
        encrypt: req.body.encrypt,
        decrypt: atbash.encrypt(req.body.encrypt)
    };
    res.render('atbash', {
        title: 'Atbash',
        "config": config,
        "info": info
    });
};

exports.decryptAtbash = async (req, res) => {
    let info = {
        encrypt: atbash.decrypt(req.body.decrypt),
        decrypt: req.body.decrypt
    };
    res.render('atbash', {
        title: 'Atbash',
        "config": config,
        "info": info
    });
};

exports.encryptRunning = async (req, res) => {
    let info = {
        key: req.body.key,
        encrypt: req.body.encrypt,
        decrypt: running.encrypt(req.body.encrypt, req.body.key)
};
    res.render('runningkey_submitted', {
        title: 'Running Key - Encrypted',
        "config": config,
         info
    })
};

exports.decryptRunning = async (req, res) => {
    let info = {
        key: req.body.key,
        encrypt: req.body.decrypt,
        decrypt: running.decrypt(req.body.decrypt, req.body.key)
    };
    res.render('runningkey_submitted', {
        title: 'Running Key - Decrypted',
        "config": config,
        info
    })
};

exports.encryptCaesar = async (req, res) => {
    let info = {
        encrypt: req.body.encrypt
    }
};

exports.decryptCaesar = async (req, res) => {
    let info = {
        encrypt: req.body.encrypt
    }
};

exports.encryptPlayfair = async (req, res) => {
    let info = {
        encrypt: req.body.encrypt
    }
};

exports.decryptPlayfair = async (req, res) => {
    let info = {
        encrypt: req.body.encrypt
    }
};

exports.home = async (req, res) => {
    res.render('home', {
        title: 'C1PH3RS',
        "config": config
    });
};

exports.game = async (req, res) => {
    res.render('game', {
        title: 'Games',
        "config": config
    })
};

exports.playFair = async (req, res) => {
    res.render('game', {
        title: 'PlayFair',
        "config": config
    })
};

exports.ciphers = async (req, res) => {
    res.render('ciphers', {
        title: 'Collection of Ciphers',
        "config": config
    })
};

exports.atbash = async (req, res) => {
    res.render('atBash', {
        title: 'Atbash Cipher',
        "config": config
    })
};

exports.caesar = async (req, res) => {
    res.render('caesar', {
        title: 'Caesar Cipher',
        "config": config
    })

};

exports.runningkey = async (req, res) => {
    res.render('runningkey', {
        title: 'Running Key Cipher',
        "config": config
    })
};