import Data from "./Data";
import Http from "./Http";
import Path from "./Path";

//facade pattern
class Service {
    protected http: Http;
    protected path: Path;
    protected data: Data;

    constructor() {
        this.http = Http.getInstance();
        this.path = Path.getInstance('lckteam-secret-key-123');
        this.data = Data.getInstance('lckteam-secret-key-123');
    }

    /**
     * 
     * @param url 
     * @returns Promise
     */
    public getEncrypt(url: string) {
        let enpath = this.path.getEncode(url);
        return this.http.getAxios().get(enpath);
    }

    /**
     * 
     * @param url 
     * @returns Promise
     */
    public get(url: string) {
        return this.http.getAxios().get(url);
    }

    /**
     * 
     * @param url 
     * @param data
     * @returns Promise 
     */
    public postEncrypt(url: string, data: any) {
        let enpath = this.path.getEncode(url);
        let endata = this.data.getEncodeData(data);
        return this.http.getAxios().post(enpath, endata);
    }
}

export default Service;