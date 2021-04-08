const CryptoJS = require("crypto-js");

export default {
    encrypt: (message: string): string => CryptoJS.AES.encrypt(message, 'secret key 123'),
    decrypt: (encryptedMessage: string) => {
        const bytes  = CryptoJS.AES.decrypt(encryptedMessage, 'secret key 123');
        const plaintext = bytes.toString(CryptoJS.enc.Utf8);
        return plaintext;
    }
}