import CryptoJS from "crypto-js";


class Data {
    private static _instance: Data;

    private scrtKey: string;
    private encodeData: string | null;

    private constructor(srct: string) {
        this.scrtKey = srct;
        this.encodeData = null;
    }

    public static getInstance(srct: string) {
        if (!Data._instance) {
            Data._instance = new Data(srct);
        }
        return Data._instance;
    }

    private encode(data: {}) {
        let prev = CryptoJS.AES.encrypt(JSON.stringify(data), this.scrtKey).toString();
        this.encodeData = prev.replace(/\//g, '-').replace(/=/g, '');
    }

    public getEncodeData(data: {}) {
        this.encode(data);
        return this.encodeData;
    }
}

export default Data;