import Http from "./Http";
import Path from "./Path";

//facade pattern
class Fetching {
    protected http: Http;
    protected path: Path;

    constructor() {
        this.http = Http.getInstance();
        this.path = Path.getInstance('lcjteam-secret-key-123');
    }

    public getApi(url: string) {
        let enpath = this.path.getEncode(url);
        return this.http.getAxios().get(enpath);
    }

    public postApi(url: string, data: string) {
        let enpath = this.path.getEncode(url);
        return this.http.getAxios().post(enpath, data);
    }
}

export default Fetching;