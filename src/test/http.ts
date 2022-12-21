import "../init";
import HTTPReq from "../http/http"

(async()=>{
    const res = await HTTPReq("http://localhost:3000/", {
        query: {
            msg: "Olá"
        }
    })
    
    console.log(res.data.toString());
    
})()