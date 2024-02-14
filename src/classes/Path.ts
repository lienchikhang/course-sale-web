import CryptoJS from "crypto-js";

class Path {
    private static _instace: Path;
    private enPath: string;
    private scrtKey: string;

    private constructor(scrt: string) {
        this.enPath = '';
        this.scrtKey = scrt;
    }

    public static getInstance(scrt: string) {
        if (!Path._instace) {
            Path._instace = new Path(scrt);
        }
        return Path._instace;
    }

    private encode(path: string) {
        let prev = CryptoJS.AES.encrypt(path, this.scrtKey).toString();
        this.enPath = prev.replace(/\//g, '-').replace(/=/g, '');
    }

    public getEncode(path: string) {
        this.encode(path);
        return this.enPath;
    }
}

export default Path;