import { request } from "http";
import { toJSON, fromJSON } from "../func/JSON";
import { ConfigHttp } from "../interface/http";

export default async function HTTPReq(url: string | URL, config?: ConfigHttp.Config){
    const res: any= {};
    const uri = new URL(`${url}${config?.query && parseQuery(config.query)}`);

    const opts = {
        method: "GET",
        ...config,
        href: uri.href,
        origin: uri.origin,
        protocol: uri.protocol,
        username: uri.username,
        password: uri.password,
        host: uri.host,
        hostname: uri.hostname,
        port: uri.port,
        path: uri.pathname,
        pathname: uri.pathname,
        search: uri.search,
        searchParams: uri.searchParams,
        hash: uri.hash,
    }

    console.log(opts);
    

    const promiseReq = () => new Promise((resolve, reject)=>{
        const req = request(opts, (res)=>{
            let chunks_of_data = [];

            res.on('data', (fragments) => {
                chunks_of_data.push(fragments);
            });

            res.on('end', () => {
                let response_body = Buffer.concat(chunks_of_data);
                
                // response body
                resolve(response_body.toString());
            });


            res.on("error", (e)=> reject(e))
        })

        req.end("")

        return req 
    }) 

    const data = await promiseReq();

    res.data = fromJSON(data);
    

    return res
}

export function parseQuery(data: any, to?: "string"|"object"): string | object{
    if(to === void 0) to = "string"

    if(to === "string"){
        let query = "?";
        let i = 1;

        for(const key of Object.keys(data)){
            query += `${key}=${data[key]}`
            
            if(i < Object.keys(data).length) query += "&"
            i++
        }

        return query
    }else if(to === "object"){
        const query = {}
        const map = data.replace("?", "").split("&");

        for(const q of map){
            const [key, val] = q.split("=")
            query[key] = val
        }

        return query
    }
}