const config = require('../config');


exports.decryptAtbash = async (req, res) => {
    let info = {
        decrypt: req.body.decrypt
    };

};

exports.encryptRunning = async (req, res) => {
    let info = {
        encrypt: req.body.encrypt
    };
};

exports.decryptRunning = async (req, res) => {
    let info = {
        decrypt: req.body.decrypt
    };

};

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

exports.playFair = async(req, res) => {
    res.render('game', {
        title: 'PlayFair',
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

exports.caesar = async (req, res) => {
    res.render('caesar', {
        title: 'Caesar Cipher',
        "config" : config
    })
    
};

exports.runningkey = async (req, res) => {
    res.render('runningkey', {
        title: 'Running Key Cipher',
        "config" : config
    })
};
