import axios, { AxiosInstance } from 'axios';

//singleton
// 1 instance has Class'type
// constructor is private
// 1 public method get this instance - inside of it, use new Contructor to create an instance
class Http {
    private static _instance: Http;
    private axiosInstace: AxiosInstance;

    private constructor(public authorization?: string) {
        this.axiosInstace = axios.create({
            baseURL: 'https://api-gateway.lckteam/api/',
            headers: {
                Authorization: authorization,
            }
        })
    }

    public static getInstance(accessToken?: string): Http {
        if (!Http._instance) {
            Http._instance = new Http(accessToken);
        }
        return Http._instance;
    }

    public getAxios(): AxiosInstance {
        return this.axiosInstace;
    }
}

export default Http;