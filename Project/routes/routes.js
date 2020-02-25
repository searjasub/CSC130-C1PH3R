const config = require('../config');

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

exports.rot13 = async (req, res) => {
    res.render('rot13', {
        title: 'Rot13',
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