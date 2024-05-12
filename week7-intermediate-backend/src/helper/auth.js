
const jwt = require('jsonwebtoken');

const generateVerificationToken = (payload) => {
    const verifyOpts = {
        expiresIn: '24h',
        issuer: 'Peworld'
    }

    const verificationtoken = jwt.sign(payload, process.env.SECRET_KEY_JWT, verifyOpts);
    return verificationtoken
}

const generateToken = (payload) => {
    const verifyOpts = {
        expiresIn: '12h',
        issuer: 'Peworld'
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, verifyOpts);
    return token
}

const generateRefreshToken = (payload) => {
    const verifyOpts = {
        expiresIn: '24h',
        issuer: 'Peworld'
    }

    const refreshToken = jwt.sign(payload, process.env.SECRET_KEY_JWT, verifyOpts);
    return refreshToken
}

module.exports = {
    generateVerificationToken,
    generateToken,
    generateRefreshToken,
    
};